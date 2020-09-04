import React from 'react';

import './Home.scss';

const Home = () => {
	return (
		<div className="wrapper">
			<div className="title">
				<h1 className="home-title">web developer</h1>
			</div>
			<section className="about">
				<h4>What I Do</h4>
				<p>
					Today businesses can be a success or fail just by there website! I
					help make them a success.
				</p>
				<p>
					With over 3 years of experience, I use the most up-to-date frameworks
					to create fun and user friendly websites.
				</p>
			</section>

			<section className="experience">
				<h4>tools of trade</h4>

				<p>front-end: HTML5, CSS3, SASS, Javascript, Node.JS</p>
				<p>Javascript frameworks: React.JS, Vue.JS, Angular 6+, jQuery.JS</p>
				<p>CSS frameworks: Bootstrap, Material-UI,Materialize-CSS</p>
				<p>Back-end: </p>

				<ul>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>SASS</li>
					<li>Bootstrap</li>
					<li>Material-UI</li>
					<li>Javascript</li>
					<li>jQuery</li>
					<li>Node.JS</li>
					<li>Vue.JS</li>
					<li>React.JS</li>
					<li>Angular 6+</li>
					<li>MongoDB</li>
					<li>mySQL</li>
					<li>PostgreSQL</li>
					<li>Firebase</li>
				</ul>
			</section>
			<section className="school">
				<h4>school</h4>
			</section>
		</div>
	);
};

export default Home;
