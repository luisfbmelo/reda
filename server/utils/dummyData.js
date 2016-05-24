// ROLES
var createRoles = function(models){
  return models.Role.create({value: "Admin", type: "admin"})
  .then(function(){
    return models.Role.create({value: "User", type: "user"})
  });
}

// FORMATS
var createFormats = function(models){
  return models.Format.create({
    title: "Vídeo",
    type: "video",
    priority: 1,
    Image: {
      name: "video",
      extension: "svg"
    }
  }, {
    include: [ models.Image ]
  })
  .then(function(){
    return models.Format.create({
        title: "Simulação",
        type: "simulation",
        priority: 2,
        Image: {
          name: "simulacao",
          extension: "svg"
        }
      }, {
      include: [ models.Image ]
    })
  })
  .then(function(){
    return models.Format.create({
        title: "Animação",
        type: "animation",
        priority: 3,
        Image: {
          name: "animacao",
          extension: "svg"
        }
      }, {
      include: [ models.Image ]
    })
  })
  .then(function(){
    return models.Format.create({
      title: "Áudio",
      type: "audio",
      priority: 4,
      Image: {
        name: "audio",
        extension: "svg"
      }
    }, {
    include: [ models.Image ]
  })
  })
  .then(function(){
    return models.Format.create({
      title: "Imagem",
      type: "image",
      priority: 5,
      Image: {
        name: "imagem",
        extension: "svg"
      }
    }, {
    include: [ models.Image ]
  })
  })
  .then(function(){
    return models.Format.create({
      title: "Texto",
      type: "text",
      priority: 9,
      Image: {
        name: "texto",
        extension: "svg"
      }
    }, {
    include: [ models.Image ]
  })
  })
  .then(function(){
    return models.Format.create({
      title: "Folha de Cálculo",
      type: "excel",
      priority: 7,
      Image: {
        name: "folha_calculo",
        extension: "svg"
      }
    }, {
    include: [ models.Image ]
  })
  })
  .then(function(){
    return models.Format.create({
      title: "Jogo Didático",
      type: "game",
      priority: 8,
      Image: {
        name: "jogo_didatico",
        extension: "svg"
      }
    }, {
    include: [ models.Image ]
  })
  })
  .then(function(){
    return models.Format.create({
      title: "Outros",
      type: "others",
      priority: 6,
      Image: {
        name: "outros",
        extension: "svg"
      }
    }, {
    include: [ models.Image ]
  });
  });
}

// MODES
var createMode = function(models){
  return models.Mode.create({
    title: "Online",
    type: "online"
  })
  .then(function(){
    return models.Mode.create({
    title: "Descarregável",
    type: "downloadable"
  });
  });
}

// SUBJECTS
var createSubjects = function(models){
  return models.Subject.create({
    title: "Matemática",
    Domains: [
      { title: "Números e Operações" },
      { title: "Geometria e Medida" },
      { title: "Funções, Sequências e Sucessões" },
      { title: "Álgebra" },
      { title: "Organização e Tratamento de Dados" },
      { title: "Artes" },
      { title: "História e natureza da matemática" }
    ] 
  },{
    include: [ models.Domain ]
  })
  .then(function(){

  return models.Subject.create({
    title: "Português",
    Domains: [
      { title: "Oralidade" },
      { title: "Leitura" },
      { title: "Escrita" },
      { title: "Iniciação à educação literária" },
      { title: "Educação literária" },
      { title: "Gramática" },
      { title: "Artes" },
      { title: "História da língua" }
    ]
  },{
    include: [ models.Domain ]
  })
  })
  .then(function(){

  return models.Subject.create({
    title: "Ciências Físico-Químicas",
    Domains: [
      { title: "Espaço " },
      { title: "Materiais" },
      { title: "Energia" },
      { title: "Reações químicas" },
      { title: "Som " },
      { title: "Luz" },
      { title: "Movimentos" },
      { title: "Forças" },
      { title: "Eletricidade" },
      { title: "Classificação dos materiais" },
      { title: "Artes" },
      { title: "História e natureza da ciência " }
    ]
  },{
    include: [ models.Domain ]
  })
  })
  .then(function(){

  return models.Subject.bulkCreate([
    {
      title: "Estudo do Meio"
    },
    {
      title: "Cidadania"
    },
    {
      title: "TIC"
    },
    {
      title: "Inglês"
    },
    {
      title: "Outros"
    }
  ]);
  });
}

// DOMAINS
var createDomains = function(models){
  return models.Domain.bulkCreate([
    {
      title: "Oralidade"
    },
    {
      title: "Leitura"
    },
    {
      title: "Escrita"
    },
    {
      title: "Iniciação à educação literária"
    },
    {
      title: "Cidadania"
    },
    {
      title: "TIC"
    },
    {
      title: "Inglês"
    },
    {
      title: "Outros"
    }
  ]);
}

// LANGUAGES
var createLanguages = function(models){
  return models.Language.bulkCreate([
    {
      title: "Português (PT)"
    },
    {
      title: "Português (BR)"
    },
    {
      title: "Inglês sem legendas"
    },
    {
      title: "Inglês com legendas em Português"
    },
    {
      title: "Castelhano sem legendas"
    },
    {
      title: "Castelhano com legendas em Português"
    },
    {
      title: "Outros"
    }
  ]);
}

// YEARS
var createYears = function(models){
  return models.Year.bulkCreate([
    {
      title: "1.º"
    },
    {
      title: "2.º"
    },
    {
      title: "3.º"
    },
    {
      title: "4.º"
    },
    {
      title: "5.º"
    },
    {
      title: "6.º"
    },
    {
      title: "7.º"
    },
    {
      title: "8.º"
    },
    {
      title: "9.º"
    }
  ]);
}

// Tags
var createTags = function(models){
  return models.Tag.bulkCreate([
    {
      title: "Tag1"
    },
    {
      title: "Tag2"
    },
    {
      title: "Tag3"
    }
  ]);
}

exports.createResource = function(models){
  return models.Resource.create({
    title: "Media heading",
    slug: "media-heading-3",
    description: "Are you one of the thousands of Iphone owners who has no idea that they can get free games for their Iphone? It’s pretty cool to download things from Itunes, but with a little research you can find thousands of other places to download from",
    format_id: 1,
    author:" Luis Melo",
    organization: "Escola X",
    email: "geral@luisfbmelo.com",
    highlight: false,
    exclusive: false,
    embed: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/eIho2S0ZahI\" frameborder=\"0\" allowfullscreen></iframe>",
    techResources: "asd",
    operation: "asdasd",
    operation_author: "asdasdasd",
    user_id: 1
  },{
    include: [ models.Domain, models.Subject, models.Year, models.Mode, models.Language ]
  }).then(function(item){
    item.setSubjects([
      1,
      2
    ]);

    item.setDomains([
      1,
      2
    ]);

    item.setYears([
      1,
      2
    ]);

    item.setModes([
      1
    ]);

    item.setLanguages([
      1
    ]);

    item.setTags([
      1,
      2
    ]);

    item.setFavorites([
      1
    ])

  })
  .catch(function(err){
    console.log(err);
  });
}

exports.createData = function(models){
  createRoles(models)
  .then(createFormats(models))
  .then(createMode(models))
  .then(createSubjects(models))
  .then(createLanguages(models))
  .then(createYears(models))
  .then(createTags(models));
  //.then(createResource(models));
}