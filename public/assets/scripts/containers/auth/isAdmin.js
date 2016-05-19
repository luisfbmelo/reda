import React, { PropTypes } from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class IsAdmin extends Component {

    render() {
        return (
            this.props.isAuthenticated === true && this.props.role == 'admin'
                ? this.props.children
                : null                
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    role: state.auth.data.user.role
});

IsAdmin.contextTypes = {
  router: PropTypes.object
}

export default connect(mapStateToProps)(IsAdmin);