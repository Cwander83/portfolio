import React, { useContext } from 'react';

import './Header.scss';
import { HeaderImage, Github, Linkedin, Facebook } from '../../images';

// context api
import { MenuContext } from '../../context/menu-context';

const Header = React.memo(() => {
	const { menuHandler } = useContext(MenuContext);
	return (
		<header className="header">
			<span className="menu-button " onClick={menuHandler}>
				menu
			</span>

			<img className="header-image " src={HeaderImage} alt="paint" />

			<ul className="social-list">
				<li className="social-list-item">
					<a href="https://github.com/Cwander83">
						<img src={Github} alt="github" />
					</a>
				</li>
				<li className="social-list-item">
					<a href="https://www.linkedin.com/in/chris-wander-832329151/">
						<img src={Linkedin} alt="linkedin" />
					</a>
				</li>
				<li className="social-list-item">
					<a href="https://www.facebook.com/cwander1">
						<img src={Facebook} alt="facebook" />
					</a>
				</li>
			</ul>
		</header>
	);
});

export default Header;
