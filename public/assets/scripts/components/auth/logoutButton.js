'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Utils
import { removeClass } from '@/utils';

// Components
import { logout } from '@/actions/auth';


export default class LogoutButton extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(){
    this.props.logout();
    
    removeClass('open', Array.from(document.querySelectorAll(".open")));
    removeClass('filter-menu', Array.from(document.querySelectorAll(".filter-menu")));
    removeClass('admin-op-menu', Array.from(document.querySelectorAll(".admin-op-menu")));
    removeClass('site-menu', Array.from(document.querySelectorAll(".site-menu")));

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