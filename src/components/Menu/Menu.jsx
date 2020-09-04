import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './Menu.scss';

import { HeaderImage } from '../../images';
import { MenuContext } from '../../context/menu-context';

const Menu = React.memo(() => {
	const { menu, menuHandler } = useContext(MenuContext);
	React.useEffect(() => () => {}, [menu]);
	return (
		<div className={menu ? 'menu' : 'menu-hidden'}>
			<CSSTransition in={menu} timeout={1000} classNames="fade">
				<div className="menu-container">
					<span className="menu-button">menu</span>
					<img className="header-image " src={HeaderImage} alt="paint" />
					<ul className="menu-navigation-list">
						<li>
							<Link to="/home" onClick={menuHandler}>
								<i className="fas fa-home"></i> Home
							</Link>
						</li>
						<li>
							<Link to="/projects" onClick={menuHandler}>
								<i className="fas fa-code"></i> Projects
							</Link>
						</li>
						<li>
							<Link to="/contact" onClick={menuHandler}>
								<i className="fas fa-envelope"></i> Contact
							</Link>
						</li>
					</ul>
				</div>
			</CSSTransition>
		</div>
	);
});

export default Menu;
