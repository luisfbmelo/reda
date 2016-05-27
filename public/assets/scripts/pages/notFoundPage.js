import React, { PropTypes } from 'react';
import { Component } from 'react';
import Header from '@/containers/header';
import BottomNav from '@/components/navigation/bottomNav';

export default class NotFoundPage extends Component {
  render() {
    return (
    	<div>
        <Header location={this.props.location}/>
        <div className="page-not-found light-background">
          <div className="container">
            <div className="col-xs-10 col-xs-offset-1 text-center">
              <h1>Oops! Não foi possível encontrar a página pretendida.</h1>
              <p>Talvez seja melhor <button onClick={() => this.context.router.goBack()} className="cta primary outline">Voltar</button></p>
            </div>
          </div>          
        </div>
  			<BottomNav location={this.props.location}/>
    	</div>
    );
  }
}

NotFoundPage.contextTypes = {
  router: PropTypes.object
}