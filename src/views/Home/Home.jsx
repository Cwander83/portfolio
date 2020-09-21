import React from 'react';

import './Home.scss';

const Home = () => {
	return (
		<div className="wrapper">
			<div className="title">
				<h1 className="home-title">web developer</h1>
			</div>
			<section className="about">
				{/* <h4>What I Do</h4> */}
				<p>
					In today's world businesses can be a success just by their website! I
					help them exceed their goals.
				</p>
				<p>
					With over 3 years of experience, I use the most up-to-date tools of
					the trade to create fun and user friendly websites.
				</p>
			</section>

			<section className="tools">
				<ul>
					<li>
						<i className="fab fa-react"></i> React.js
					</li>

					<li>
						<i className="fab fa-vuejs"></i> Vue.js
					</li>
					<li>
						<i className="fab fa-node-js"></i> Node.js
					</li>
					<li>
						<i className="fab fa-java"></i> Java
					</li>
					<li>
						<i className="fab fa-python"></i> Python
					</li>
					<li>
						<i className="fab fa-css3-alt"></i> CSS
					</li>
					<li>
						<i className="fab fa-html5"></i> HTML
					</li>
				</ul>
			</section>
		</div>
	);
};

export default Home;
