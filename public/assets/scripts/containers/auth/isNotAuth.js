import React, { PropTypes } from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class IsNotAuthenticated extends Component {

    render() {
        return (
            this.props.isAuthenticated === false
                ? this.props.children
                : null                
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

IsNotAuthenticated.contextTypes = {
  router: PropTypes.object
}

export default connect(mapStateToProps)(IsNotAuthenticated);