'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';


export default class LogoutButton extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(){
    this.props.logout();
    this.context.router.push('/');
  }

  render() {
    return (
      <li>
        <button onClick={this.logout} className="link-effect">Sair</button>
      </li>
    )
  }
}

LogoutButton.contextTypes = {
  router: PropTypes.object
}

export default connect(null, { logout })(LogoutButton);