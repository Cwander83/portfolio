import React, { Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';
const Landing = React.lazy(() => import('../views/Landing/Landing'));
const Home = React.lazy(() => import('../views/Home/Home'));
const Projects = React.lazy(() => import('../views/Projects/Projects'));
const Contact = React.lazy(() => import('../views/Contact/Contact'));

const routes = (
	<Suspense
		fallback={
			<div
				style={{
					width: '100%',
					height: '100vh',
				}}
			></div>
		}
	>
		<Switch>
			<Route exact path="/" component={Landing} />
			<Route  path="/home" component={Home} />
			<Route  path="/projects" component={Projects} />
			<Route  path="/contact" component={Contact} />
			
		</Switch>
	</Suspense>
);

export default routes;
