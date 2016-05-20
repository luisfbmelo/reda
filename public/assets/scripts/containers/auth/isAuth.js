import React, { PropTypes } from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class IsAuthenticated extends Component {

    render() {
        return (
            this.props.isAuthenticated === true ? this.props.children : null       
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

IsAuthenticated.contextTypes = {
  router: PropTypes.object
}

export default connect(mapStateToProps)(IsAuthenticated);