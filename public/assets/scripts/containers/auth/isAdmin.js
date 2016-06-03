import React, { PropTypes } from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import browserHistory from 'react-router/lib/browserHistory';

class IsAdmin extends Component {

    render() {
        return (
            this.props.isAuthenticated === true && this.props.data && this.props.data.user && this.props.data.user.role == 'admin'
                ? this.props.children
                : null                
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    data: state.auth.data
});

IsAdmin.contextTypes = {
  router: PropTypes.object
}

export default connect(mapStateToProps)(IsAdmin);