const requireFields = (...names) => data =>
  names.reduce((errors, name) => {
    if (!data[name]) {
      errors[name] = 'Required'
    }
    return errors
  }, {})

const validateScript = (values) => {
  const errors = {};

  // Title
  if (!values.title) {
    errors.title = 'O campo é obrigatório'
  }

  // Email
  if (!values.email) {
    errors.email = 'O campo é obrigatório'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'E-mail inserido não é válido';
  }

  // Organization
  if (!values.organization) {
    errors.organization = 'O campo é obrigatório'
  }

  // Subjects
  if (!values.subjects || values.subjects.length==0) {
    errors.subjects = 'Campo é obrigatório'
  }

  // Domains
  if (values.hasDomains && (!values.domains || values.domains.length==0)) {
    errors.domains = 'Campo é obrigatório'
  }

  // Years
  if (!values.years || values.years.length==0) {
    errors.years = 'Campo é obrigatório'
  }

   // Op Proposal
  if (!values.description) {
    errors.description = 'O campo é obrigatório'
  } else if (values.description.length < 20) {
    errors.description = 'Deve ter pelo menos 20 caracteres'
  } else if (values.description.length > 300) {
    errors.description = 'Apenas deve conter no máximo 300 caracteres'
  }

  // Op Proposal
  if (!values.op_proposal) {
    errors.op_proposal = 'O campo é obrigatório'
  } else if (values.op_proposal.length < 20) {
    errors.op_proposal = 'Deve ter pelo menos 20 caracteres'
  } else if (values.op_proposal.length > 800) {
    errors.op_proposal = 'Apenas deve conter no máximo 800 caracteres'
  }

  return errors
}

const validateScriptForm = data => {
  const errors = {};

  // Accepted terms
  if (!data.accept_terms) {
    errors.accept_terms = 'Deve aceitar os termos e condições para criar o recurso'
  }

  errors.scripts = data.scripts.map(validateScript);
  return errors;
}


export default validateScriptForm