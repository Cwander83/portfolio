import React, { memo } from 'react';

import './Projects.scss';

import Taco from '../../images/tacotest.jpg';
import HJM from '../../images/hjm.jpg';
import Grid from '../../images/aggrid.jpg';

const projects = [
	{
		name: 'HJM Janitorial Company',
		url: 'https://www.hjmjanitorial.com',
		github: 'https://github.com/Cwander83/hjm-react',
		image: HJM,
		description: `This is a company page for a Commercial Janitorial Company in the Central Florida Area. They also sell Bissell Commercial products. `,
	},
	{
		name: 'Taco Test',
		url: 'https://cwander83.github.io/taco_test/',
		github: 'https://github.com/Cwander83/taco_test',
		image: Taco,
		description: `This site was built with React v16 w/ hooks connected to firebase database. It uses firebase email/password authentication to access the database then saves data, for the next time user returns.`,
	},
	{
		name: 'SpaceX Launches',
		url: 'https://cwander83.github.io/Ag-Grid-SpaceX-Launches/',
		github: 'https://github.com/Cwander83/Ag-Grid-SpaceX-Launches',
		image: Grid,
		description: `You can search all details from all spaceX launches. Each row is a past or upcoming launch. At the end of each row there is a button for rocket and launchpad. By clicking on one of those buttons a modal opens to display details about the rocket or launchpad for that launch. It was build using the AG-Grid package`,
	},
];

const Projects = () => {
	return (
		<div className="project-wrapper">
			<h1>My Work</h1>
			<div className="divider"></div>
			<section>
				{projects.map((project, i) => {
					return (
						<div className="media" key={i}>
							<div className="col-1">
								<img src={project.image} alt="" />
							</div>
							<div className="col-2">
								<h3 className="title">{project.name}</h3>
								<p>
									<a className="site-url" href={project.url}>
										Hosted Link<i className="fas fa-external-link-alt"></i>
									</a>
									<span>&bull;</span>
									<a href={project.github} className="site-github">
										Github Repo<i className="fas fa-external-link-alt"></i>
									</a>
								</p>
								<p className="site-description">{project.description}</p>
							</div>
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default memo(Projects);
