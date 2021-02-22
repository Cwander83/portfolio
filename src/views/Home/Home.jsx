import React from 'react';

import './Home.scss';

const jsFrameworks = [
	'React',
	'Vue',
	'Angular 2',
	'jQuery',
	'Handlebars',
	'Gatsby',
	'Node',
];
const cssFrameworks = ['TailwindCSS', 'MaterialUi', 'Bootstrap', ''];
const backendFrameworks = ['Express', 'Sequelize', 'Mongoose', 'Node'];
const databases = ['MongoDb', 'MySql', 'PostgreSql'];
const languages = ['Javascript', 'Java', 'Python', 'PHP'];

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

			<section className="languages">
				<h2>Front-End Frameworks</h2>
				<ul>
					{jsFrameworks.map((ele, i) => {
						return <li key={i}>{ele}</li>;
					})}
				</ul>
			</section>
			<section className="languages">
				<h2>CSS Frameworks</h2>
				<ul>
					{cssFrameworks.map((ele, i) => {
						return <li key={i}>{ele}</li>;
					})}
				</ul>
			</section>
			{/* <section className="languages">
				<h2>Programming Languages</h2>
				<ul>
					{languages.map((ele, i) => {
						return <li key={i}>{ele}</li>;
					})}
				</ul>
			</section> */}
			<section className="languages">
				<h2>Databases</h2>
				<ul>
					{databases.map((ele, i) => {
						return <li key={i}>{ele}</li>;
					})}
				</ul>
			</section>
			<section className="languages">
				<h2>Backend Frameworks</h2>
				<ul>
					{backendFrameworks.map((ele, i) => {
						return <li key={i}>{ele}</li>;
					})}
				</ul>
			</section>
		</div>
	);
};

export default Home;
