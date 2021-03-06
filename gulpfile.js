'use strict';

var fs = require('fs');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var exit = require('gulp-exit');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var notifier = require('node-notifier');
var historyApiFallback = require('connect-history-api-fallback');

// /////////////////////////////////////////////////////////////////////////////
// --------------------------- Variables -------------------------------------//
// ---------------------------------------------------------------------------//

// The package.json
var pkg;

// Environment
// Set the correct environment, which controls what happens in config.js
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// /////////////////////////////////////////////////////////////////////////////
// ------------------------- Helper functions --------------------------------//
// ---------------------------------------------------------------------------//

function readPackage () {
  pkg = JSON.parse(fs.readFileSync('public/package.json'));
  console.log(pkg.dependencies);
}
readPackage();

// /////////////////////////////////////////////////////////////////////////////
// ------------------------- Callable tasks ----------------------------------//
// ---------------------------------------------------------------------------//

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

gulp.task('dev-env', function(){
  process.env.NODE_ENV = 'development';
  //process.env.DS_ENV = 'development';
  gulp.start('serve');
});

gulp.task('prod-env', function(){
  process.env.NODE_ENV = 'production';
  //process.env.DS_ENV = 'production';
  gulp.start('build');
});

gulp.task('serve', ['vendorScripts', 'javascript', 'styles', 'images'], function () {

  //
  //  SOME PACKAGES MISSING
  //
  //"sequelize": "^3.21.0"

  browserSync({
    port: 3000,
    server: {
      baseDir: ['.tmp', 'public'],
      routes: {
        '/node_modules': './node_modules'
      },
      middleware: [ historyApiFallback() ]
    }
  });

  // watch for changes
  gulp.watch([
    'public/*.html',
    'public/assets/graphics/**/*'
  ], { usePolling: true }).on('change', reload);

  gulp.watch('public/assets/styles/**/*.scss', { usePolling: true }, ['styles']);
  gulp.watch('package.json', { usePolling: true }, ['vendorScripts']);
});

gulp.task('clean', function () {
  return del(['.tmp', 'dist'])
    .then(function () {
      $.cache.clearAll();
    });
});

gulp.task('build', ['vendorScripts', 'javascript'], function () {
  gulp.start(['html', 'images', 'extras'], function () {
    return gulp.src('dist/**/*')
      .pipe($.size({title: 'build', gzip: true}))
      .pipe(exit());
  });
});

// /////////////////////////////////////////////////////////////////////////////
// ------------------------- Browserify tasks --------------------------------//
// ------------------- (Not to be called directly) ---------------------------//
// ---------------------------------------------------------------------------//

// Compiles the user's script files to bundle.js.
// When including the file in the index.html we need to refer to bundle.js not
// app.js
gulp.task('javascript', function () {
  var watcher = watchify(browserify({
    entries: ['./public/assets/scripts/app.js'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }), {poll: true});

  function bundler () {
    if (pkg.dependencies) {
      watcher.external(Object.keys(pkg.dependencies));
    }
    return watcher.bundle()
      .on('error', function (e) {
        notifier.notify({
          title: 'Oops! Browserify errored:',
          message: e.message
        });
        console.log('Javascript error:', e);
        // Allows the watch to continue.
        this.emit('end');
      })
      .pipe(source('bundle.js'))
      .pipe(buffer())
      // Source maps.
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('.tmp/assets/scripts'))
      .pipe(reload({stream: true}));
  }

  watcher
  .on('log', gutil.log)
  .on('update', bundler);

  return bundler();
});

// Vendor scripts. Basically all the dependencies in the package.js.
// Therefore be careful and keep the dependencies clean.
gulp.task('vendorScripts', function () {
  // Ensure package is updated.
  readPackage();
  var vb = browserify({
    debug: true,
    require: pkg.dependencies ? Object.keys(pkg.dependencies) : []
  });
  return vb.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('vendor.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('.tmp/assets/scripts/'))
    .pipe(reload({stream: true}));
});


// //////////////////////////////////////////////////////////////////////////////
// --------------------------- Helper tasks -----------------------------------//
// ----------------------------------------------------------------------------//

gulp.task('styles', function () {
  return gulp.src('public/assets/styles/main.scss')
    .pipe($.plumber(function (e) {
      notifier.notify({
        title: 'Oops! Sass errored:',
        message: e.message
      });
      console.log('Sass error:', e.toString());
      // Allows the watch to continue.
      this.emit('end');
    }))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.'].concat(require('node-bourbon').includePaths)
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/assets/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('html', ['styles'], function () {
  return gulp.src('public/*.html')
    .pipe($.useref({searchPath: ['.tmp', 'public', '.']}))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.csso()))
    .pipe($.if(/\.(css|js)$/, rev()))
    .pipe(revReplace())
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
  return gulp.src('public/assets/graphics/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('dist/assets/graphics'))
    .pipe(gulp.dest('.tmp/assets/graphics'));
});

gulp.task('extras', function () {
  return gulp.src([
    'public/**/*',
    '!public/*.html',
    '!public/package.json',
    '!public/files/**',
    '!public/node_modules/**',
    '!public/assets/graphics/**',
    '!public/assets/vendor/**',
    '!public/assets/styles/**',
    '!public/assets/scripts/**/!(dummy.json)'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});