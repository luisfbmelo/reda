import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Components
import {Tabs, Tab} from 'react-bootstrap';
import TechFile from '@/components/resources/techFile';
import IsAuthenticated from '@/containers/auth/isAuth';

const renderScripts = (scripts) => {

	return (
		<Tabs defaultActiveKey={1} >
			{scripts.map((script, index) => {
				return (					
					<Tab eventKey={index+1} title={"Guião " + (index+1)} key={script.id}>
						<div className="row">
							<div className="col-xs-12 col-sm-4">
								<label>Autor:</label>
								{script.author}
							</div>
							<div className="col-xs-12 col-sm-4">
								<label>Email:</label>
								<a href={"mailto:"+script.email}>{script.email}</a>
							</div>
							<div className="col-xs-12 col-sm-4">
								<label>Organização:</label>
								{script.organization}
							</div>
						</div>

						<div className="row">
							<div className="col-xs-6 col-sm-3">
								<label className="block">Descrição</label>
								{script.description}
							</div>
						</div>

						<div className="row">
							<div className="col-xs-12 op-proposal">
								<label className="block">Proposta de Operacionalização</label>
								<p>
									{script.operation}
								</p>
							</div>
						</div>

						{/* Tech File */}
						<TechFile details={script} maxCol={3} showTitle={false} />
					</Tab>
				)				
			})}
		</Tabs>
	)
}

const ScriptsList = (props) => {
	const { data, resource } = props;

	if (!data || data.length==0){
		return (
			<section className="scripts-detail">
				<div className="container text-center">
					<h1>Guiões</h1>
					<p>Este recurso ainda não possui guiões. </p>

					<IsAuthenticated>
						<div className="text-center no-script">
							<Link to={"/gerirguioes/"+resource} className="cta primary outline">Publicar o primeiro Guião</Link>
						</div>
					</IsAuthenticated>
				</div>
			</section>
		);
	}

	return(
		<section className="scripts-detail">
			<div className="container">
				<h1 className="text-center">Guiões</h1>
				{renderScripts(data)}
			</div>
		</section>
	);
}

ScriptsList.propTypes = {
	data: PropTypes.array,
	resourceId: PropTypes.number
}

export default ScriptsList