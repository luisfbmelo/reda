import React, { PropTypes } from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export function requireAuth(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount() {
            this.checkAuth();
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth();
        }

        checkAuth() {
            if (!this.props.isAuthenticated) {
                let redirectAfterLogin = this.props.location.pathname;
                this.context.router.push(`/?next=${redirectAfterLogin}`);
            }
        }

        render() {
            return (
                <div>
                    {this.props.isAuthenticated === true
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )

        }
    }

    const mapStateToProps = (state) => ({
        isAuthenticated: state.auth.isAuthenticated
    });

    AuthenticatedComponent.contextTypes = {
	  router: PropTypes.object
	}

    return connect(mapStateToProps)(AuthenticatedComponent);
}