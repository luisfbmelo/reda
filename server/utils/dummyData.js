// ROLES
var createRoles = function(models){
  models.Role.create({value: "Admin"});
}

// FORMATS
var createFormats = function(models){
  models.Format.create({
    title: "Vídeo",
    type: "video",
    Image: {
      name: "video",
      extension: "svg"
    }
  }, {
    include: [ models.Image ]
  });
  models.Format.create({
      title: "Simulação",
      type: "simulation",
      Image: {
        name: "simulacao",
        extension: "svg"
      }
    }, {
    include: [ models.Image ]
  });
  models.Format.create({
      title: "Animação",
      type: "animation",
      Image: {
        name: "animacao",
        extension: "svg"
      }
    }, {
    include: [ models.Image ]
  });
  models.Format.create({
      title: "Áudio",
      type: "audio",
      Image: {
        name: "audio",
        extension: "svg"
      }
    }, {
    include: [ models.Image ]
  });
  models.Format.create({
      title: "Imagem",
      type: "image",
      Image: {
        name: "simulacao",
        extension: "svg"
      }
    }, {
    include: [ models.Image ]
  });
  models.Format.create({
      title: "Texto",
      type: "text",
      Image: {
        name: "texto",
        extension: "svg"
      }
    }, {
    include: [ models.Image ]
  });
  models.Format.create({
      title: "Folha de Cálculo",
      type: "excel",
      Image: {
        name: "folha_calculo",
        extension: "svg"
      }
    }, {
    include: [ models.Image ]
  });
  models.Format.create({
      title: "Jogo Didático",
      type: "game",
      Image: {
        name: "jogo_didatico",
        extension: "svg"
      }
    }, {
    include: [ models.Image ]
  });
  models.Format.create({
      title: "Outros",
      type: "others",
      Image: {
        name: "outros",
        extension: "svg"
      }
    }, {
    include: [ models.Image ]
  });
}

// MODES
var createMode = function(models){
  models.Mode.create({
    title: "Online",
    type: "online"
  });

  models.Mode.create({
    title: "Descarregável",
    type: "downloadable"
  });
}

// SUBJECTS
var createSubjects = function(models){
  models.Subject.create({
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
  });

  models.Subject.create({
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
  });

  models.Subject.create({
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
  });


  models.Subject.bulkCreate([
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
}

// DOMAINS
var createDomains = function(models){
  models.Domain.bulkCreate([
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
  models.Language.bulkCreate([
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
  models.Year.bulkCreate([
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

var createResource = function(models){
  models.Resource.create({
    title: "Media heading",
    slug: "media-heading",
    description: "Are you one of the thousands of Iphone owners who has no idea that they can get free games for their Iphone? It’s pretty cool to download things from Itunes, but with a little research you can find thousands of other places to download from",
    format_id: 1,
    author:" Luis Melo",
    organization: "Escola X",
    email: "geral@luisfbmelo.com",
    highlight: true,
    reserved: true,
    embed: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/eIho2S0ZahI\" frameborder=\"0\" allowfullscreen></iframe>",
    tech_req: "asd",
    operation: "asdasd",
    Subjects: [
      { id: 1 },
      { id: 2 }
    ],
    Domains: [
      { id: 1 },
      { id: 2 }
    ],
    Years: [
      { id: 1 },
      { id: 2 }
    ],
    Modes: [{id: 1}],
    Languages: [{id: 1}],
    user_id: 1
  },{
    include: [ models.Domain, models.Subject, models.Year, models.Mode, models.Language ]
  }).catch(function(err){
    console.log(err);
  });
}

exports.createData = function(models){
  createRoles(models);
  createFormats(models);
  createMode(models);
  createSubjects(models);
  createLanguages(models);
  createYears(models);
  createResource(models);
}