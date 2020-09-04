import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../views/Landing/Landing';
import Projects from '../views/Projects/Projects';
import Contact from '../views/Contact/Contact';
import Home from '../views/Home/Home';

const routes = (
	<Switch>
		<Route exact path="/" component={Landing} />
		<Route exact path="/home" component={Home} />
		<Route exact path="/projects" component={Projects} />
		<Route exact path="/contact" component={Contact} />
	</Switch>
);

export default routes;
