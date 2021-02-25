import React from 'react';
import { HashRouter } from 'react-router-dom';

// sass
import './App.scss';

// react-router routes
import routes from './routes/routes';

// components
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

// context
import MenuProvider from './context/menu-context';

function App() {
	return (
		// <Router>
		<HashRouter>
			<div className="App">
				<MenuProvider>
					<Menu />
					<div className="layout">
						<Header />
						{routes}
					</div>
				</MenuProvider>
			</div>
		</HashRouter>
	);
}

export default App;
