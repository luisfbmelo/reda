const validate = values => {
  const errors = {}

  // Subjects
  if (!values.subjects || values.subjects.length==0) {
    errors.subjects = 'Campo é obrigatório'
  }

  // Domains
  if (!values.domains || values.domains.length==0) {
    errors.domains = 'Campo é obrigatório'
  }

  // Years
  if (!values.years || values.years.length==0) {
    errors.years = 'Campo é obrigatório'
  }

  // Languages
  if (!values.language) {
    errors.language = 'Campo é obrigatório'
  }

  // Op Proposal
  if (!values.op_proposal) {
    errors.op_proposal = 'O campo é obrigatório'
  } else if (values.op_proposal.length < 20) {
    errors.op_proposal = 'Deve ter pelo menos 20 caracteres'
  } else if (values.op_proposal.length > 800) {
    errors.op_proposal = 'Apenas deve conter no máximo 800 caracteres'
  }

  // Op proposal author
  if (!values.op_proposal_author) {
    errors.op_proposal_author = 'Campo é obrigatório'
  }

  // Accepted terms
  if (!values.accept_terms) {
    errors.accept_terms = 'Deve aceitar os termos e condições para criar o recurso'
  }

  return errors
}

export default validate