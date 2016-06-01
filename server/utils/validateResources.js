const allowedExt = ["gif","jpeg","jpg","png","svg", "rtf", "doc","docx","odt","txt","mp3","wav","wma","jar","ggb","swf","jnlp","xlsx","xls","ods","xlsm","zip","rar","pdf","gsp","pptx","odp"];

exports.validate = function(values){
  const errors = {}

  // Title
  if (!values.title) {
    errors.title = 'Título: O campo é obrigatório'
  }

  // Author
  if (!values.author) {
    errors.author = 'Autor: O campo é obrigatório'
  }

  // Email
  if (!values.email) {
    errors.email = 'E-mail: O campo é obrigatório'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'E-mail: E-mail inserido não é válido';
  }

  // Organization
  if (!values.organization) {
    errors.organization = 'Organização: O campo é obrigatório'
  }

  // Keywords
  if (!values.tags) {
    errors.tags = 'Palavras-chave: O campo é obrigatório'
  } else if (values.tags.length > 5) {
    errors.tags = 'Palavras-chave: Deve ter entre 1 e 5 palavras-chave'
  }

  // Formats
  if (!values.format) {
    errors.format = 'Formato: O campo é obrigatório'
  }

  // File
  if (!values.isOnline && !values.file && ( values.format && values.format.type!="video")){
    errors.file = 'Ficheiro: Campo é obrigatório'
  }else if (!values.isOnline && values.file && values.file.size && values.file.size>1000000) {
    errors.file = 'Ficheiro: Ficheiro não deve exceder os 1 MB'
  }else if(!values.isOnline && values.format && values.format.type!="video" && values.file && values.file.extension && allowedExt.indexOf(values.file.extension.toLowerCase())<0){
    errors.file = `Ficheiro: Extensão .${values.file.extension} não é permitida`
  }

  if (values.file && values.file.name && !values.file.id && !values.file.data){
    errors.file = 'Ficheiro: Campo é obrigatório';
  }

  // Duration
  if (values.format && values.format.type=="video" && !values.duration){
    errors.duration = 'Duração: Campo é obrigatório'
  }

  // Embed
  if (values.format && values.format.type=="video" && !values.embed && !values.link){
    errors.embed = 'Código de incorporação: Campo é obrigatório'
  }

  // Link
  if (values.isOnline && (!values.link && !values.embed)){
    errors.embed = 'Código de incorporação: Campo é obrigatório'
  }

  // Access modes
  if (!values.access || values.access.length==0) {
    errors.access = 'Modos de utilização: O campo é obrigatório'
  }

  // Tech Resources
  if (!values.techResources) {
    errors.techResources = 'Recursos Téncicos: O campo é obrigatório'
  } else if (values.techResources.length < 1) {
    errors.techResources = 'Recursos Téncicos: Deve ter pelo menos 1 caracter'
  } else if (values.techResources.length > 300) {
    errors.techResources = 'Recursos Téncicos: Apenas deve conter no máximo 300 caracteres'
  }

  // Description
  if (!values.description) {
    errors.description = 'Descrição: O campo é obrigatório'
  } else if (values.description.length < 20) {
    errors.description = 'Descrição: Deve ter pelo menos 20 caracteres'
  } else if (values.description.length > 800) {
    errors.description = 'Descrição: Apenas deve conter no máximo 800 caracteres'
  }

   // Subjects
  if (!values.subjects || values.subjects.length==0) {
    errors.subjects = 'Disciplinas: Campo é obrigatório'
  }

  // Domains
  if (values.hasDomains && (!values.domains || values.domains.length==0)) {
    errors.domains = 'Domínios: Campo é obrigatório'
  }

  // Years
  if (!values.years || values.years.length==0) {
    errors.years = 'Anos: Campo é obrigatório'
  }

  // Languages
  if (!values.language) {
    errors.language = 'Idioma: Campo é obrigatório'
  }

  // Op Proposal
  if (!values.op_proposal) {
    errors.op_proposal = 'Proposta de operacionalização: O campo é obrigatório'
  } else if (values.op_proposal.length < 20) {
    errors.op_proposal = 'Proposta de operacionalização: Deve ter pelo menos 20 caracteres'
  } else if (values.op_proposal.length > 800) {
    errors.op_proposal = 'Proposta de operacionalização: Apenas deve conter no máximo 800 caracteres'
  }

  // Op Proposal Author
  if (!values.op_proposal_author) {
    errors.op_proposal_author = 'Autor da proposta: O campo é obrigatório'
  }

  // Accepted terms
  if (!values.accept_terms) {
    errors.accept_terms = 'Termos: Deve aceitar os termos e condições para criar o recurso'
  }

  return errors
}