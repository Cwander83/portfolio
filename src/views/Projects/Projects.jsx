import React from 'react';

import './Projects.scss';

import { Taco, HJM, Grid } from '../../images';

const projects = [
	{
		name: 'Taco Test',
		url: 'https://cwander83.github.io/taco_test/',
		github: 'https://github.com/Cwander83/taco_test',
		image: Taco,
		description: `This site was built with React v16 w/ hooks connected to firebase database

    it uses firebase email/password authentication to access the database
    
    then saves data, for the next time user returns.`,
	},
	{
		name: 'HJM Janitorial Company',
		url: 'https://www.hjmjanitorial.com',
		github: 'https://github.com/Cwander83/hjm-react',
		image: HJM,
		description: `This is a company page for a Commercial Janitorial Company in the Central Florida Area. They also sell Bissell Commercial products. `,
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
			<section>
				{projects.map((project, i) => {
					return (
						<div className="media" key={i}>
							<div className="col-1">
								<img src={project.image} alt="" />
							</div>
							<div className="col-2">
                <h3>{project.name}</h3>
                <h3>{project.url}</h3>
                <h3>{project.github}</h3>
                <h3>{project.description}</h3>
              </div>
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default Projects;
