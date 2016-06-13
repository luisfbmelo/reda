import React, { PropTypes } from 'react';
import { Component } from 'react';
import _ from 'lodash';

// Utils
import { sortByTitle, toggleClass, removeClass } from '@/utils';

// Components
import Collapsible from '@/components/common/collapse';
import CheckboxGroup from 'react-checkbox-group';


export default class AppsFilters extends Component {
	constructor(props){
		super(props);

		this.state = {
			categories: [],
			themes: [],
			update: false
		};

		//
		//	Submition
		//
		this.submitFilters = this.submitFilters.bind(this);

		//
		//	Change events
		//
		this.categoriesChange = this.categoriesChange.bind(this);
		this.themesChange = this.themesChange.bind(this);
		this.toggleList = this.toggleList.bind(this);
		this.clearAll = this.clearAll.bind(this);

		//
		//	Renders
		//
		this.renderCategories = this.renderCategories.bind(this);
		this.renderThemes = this.renderThemes.bind(this);
	}

	componentDidMount(){		
		this.props.fetchCatApp();
		this.props.fetchThemes();

		// Are there any filters from localStorage or state?
		var localFilters = JSON.parse(localStorage.getItem('filters_apps'));

		if (this.props.filtersApps.data!=null){
			const { categories, themes } = this.props.filtersApps.data.filters || this.props.filtersApps.data;
			this.setState({
				categories,
				themes
			});
		}else if (localFilters && localFilters.filters){
			const { categories, themes } = localFilters.filters;
			this.setState({
				categories,
				themes
			});
		}
	}

	// Reset filters on unmount
	componentWillUnmount() {
	    this.props.resetCategories(); 

	    //	Remove open class from body on unmount
		removeClass('open',document.getElementsByTagName("BODY")[0]);
		removeClass('filter-menu',document.getElementsByTagName("BODY")[0]);
	}

	componentDidUpdate(prevProps, prevState) {

		//If previous state is different, then warn container
		if (this.state.update){
			this.submitFilters();
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
	 	return nextProps.categories.fetched || nextProps.themes.fetched;     
	}

	// Change list statue
	toggleList(){
		let list = this.refs.filters_list;
		let backdrop = this.refs.backdrop;
		let body = document.getElementsByTagName("BODY")[0];

		toggleClass('open', list);
		toggleClass('open', backdrop);
		toggleClass('open', body);
		toggleClass('filter-menu', body);
	}

	//
	//	On submit
	//
	submitFilters(){
		const { categories, themes } = this.state;

		this.props.onFilterChange({ categories, themes });
		this.setState({update: false});
	}

	//
	//	Clear all filters
	//
	clearAll(){
		this.setState({
			categories: [],
			themes: [],
			update: true
		});

		localStorage.setItem('filters_apps', null);
	}

	//
	//	Handle Changes
	//
	categoriesChange(data){
		this.setState({
			categories: data,
			update: true
		});
	}

	themesChange(data){
		this.setState({
			themes: data,
			update: true
		});		
	}

	//
	//	RENDER DATA
	//
	// Render formats list
	renderCategories(){
		const { data } = this.props.categories;

		if (!data || data.length==0){
			return null;
		}
		
		return(
			<Collapsible title="Categorias" iconOpen="fa fa-chevron-up" iconClosed="fa fa-chevron-down">
			  <CheckboxGroup
			        name="categories"
			        value={this.state.categories}
			        onChange={this.categoriesChange}
			      >
			        {
			          Checkbox => (
			            <div className="row">
			              {data.map((item,index) => {
			              	return (
			                  <div key={item.id} className="col-xs-12">
			                    <Checkbox value={item.id} id={"category-"+item.id}/> 
			                    <label htmlFor={"category-"+item.id}>{item.title}</label>
			                  </div>
			                )		                
			              })}
			            </div>
			          )
			        }
			  </CheckboxGroup>
			</Collapsible>
		)
	}

	// Render themes list
	renderThemes(){
		const { data } = this.props.themes;

		if (!data || data.length==0){
			return null;
		}
		
		return(
			<Collapsible title="Temas" iconOpen="fa fa-chevron-up" iconClosed="fa fa-chevron-down">
			  <CheckboxGroup
			        name="themes"
			        value={this.state.themes}
			        onChange={this.themesChange}
			      >
			        {
			          Checkbox => (
			            <div className="row">
			              {data.map((item, index) => {
			              	return (
			                  <div key={item.id} className="col-xs-12">
			                    <Checkbox value={item.id} id={"theme-"+item.id}/> 
			                    <label htmlFor={"theme-"+item.id}>{item.title}</label>
			                  </div>
			                )		                
			              })}
			            </div>
			          )
			        }
			  </CheckboxGroup>
			</Collapsible>
		)
	}


	render() {
		const { categories, themes } = this.props;
		console.log(this.props.categories);

		if (!categories.data && !themes.data)
			return null;

		return (
			<div className="app__filter apps">
				<div className="backdrop" ref="backdrop" onClick={this.toggleList}></div>
				<div className="row filters-button">
					<div className="col-xs-12">
						<button className="cta primary outline" onClick={this.toggleList}><i className="fa fa-filter"></i>Filtrar Lista</button>	
					</div>					
				</div>
				<div className="row filters__list" ref="filters_list">
					{/* Title */}
					<div className="col-xs-10 filters__list--title">
						<h6>Ajuste a lista</h6>
					</div>
					{/* Close Button */}
					<div className="col-xs-2 filters__list--close">
						<button type="button" className="close" aria-label="Close" onClick={this.toggleList}><span aria-hidden="true">&times;</span></button>
					</div>
					<div className="col-xs-12 filters__list--elements">
						{this.renderCategories()}
						{this.renderThemes()}					
					</div>
					<div className="col-xs-12 filters__list--submit">
						<button className="cta primary" onClick={this.toggleList}>Fechar</button>	
					</div>	
					<div className="col-xs-12 filters__list--clear">
						<button className="cta primary outline no-border" onClick={this.clearAll}>Remover Todos</button>	
					</div>	
				</div>
			</div>
		);
	}
}

AppsFilters.propTypes = {
	categories: PropTypes.object.isRequired,
	themes: PropTypes.object.isRequired,
	onFilterChange: PropTypes.func.isRequired
}