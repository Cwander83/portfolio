import React from 'react';
import { Link } from 'react-router-dom';

import './Landing.scss';

const Landing = React.memo(() => {
	return (
		<div className="landing">
			<h2 className="landing-title">Hello</h2>
			<h2 className="landing-subtitle">chris here </h2>
			<ul className="landing-text-list">
				<li className="text-list-li">
					<i className="fas fa-terminal"></i> full stack developer
				</li>
				<li className="text-list-li">
					&emsp;&emsp;&emsp;<i className="fas fa-dumbbell"></i> avid gym
					enthusiast
				</li>
				<li className="text-list-li">
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
					<i className="fas fa-pepper-hot"></i> taco connoisseur
				</li>
				<li className="text-list-li">
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
					<i className="fas fa-football-ball"></i> sports fanatic
				</li>
				<li className="text-list-li">
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
					<i className="fas fa-anchor"></i> kayak owner
				</li>

				<li className="text-list-li">
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
					<Link className="landing-home-link" to="/home">
						Home page <i className="fas fa-arrow-right"></i>
					</Link>
				</li>
			</ul>
		</div>
	);
});

export default Landing;
