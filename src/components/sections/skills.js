/*eslint  jsx-a11y/no-noninteractive-element-interactions: "off"*/
/*eslint  jsx-a11y/control-has-associated-label: "off"*/
/*eslint  jsx-a11y/click-events-have-key-events: "off"*/
import React, { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import '../../styles/sections/skills.scss'

import {
	SiJavascript,
	SiTypescript,
	SiCsharp,
	SiJava,
	SiReact,
	SiRedux,
	SiNextDotJs,
	SiNodeDotJs,
	SiApollographql,
	SiSocketDotIo,
	SiMysql,
	SiGraphql,
	SiMicrosoftsqlserver,
	SiMongodb,
	SiMariadbfoundation,
	SiAmazonaws,
	SiMicrosoftazure,
	SiNetlify,
	SiHeroku,
	SiGithub,
	SiNpm,
} from 'react-icons/si';
import {
	DiSass,
	DiDotnet,
	DiPostgresql
} from 'react-icons/di';
import {
	RiGatsbyLine,
	RiHtml5Line,
	RiCss3Fill,
} from 'react-icons/ri';
import {
	GiKoala
} from 'react-icons/gi';
import {
	VscDatabase
} from 'react-icons/vsc';
import {
	GrMysql
} from 'react-icons/gr';

const Skills = () => {
	const [section, setSection] = useState({ b: true })

	const Tab = ({ children, tab }) => (
		<li
			className={section[tab] ? 'active-Tab' : ''}
			onClick={() => setSection({ [tab]: true })}>
			{children}
		</li>
	)

	const Anim = ({ Icon, name }) => (
		<ScrollAnimation
			className="project-anim"
			initiallyVisible={true}
			animateIn="pulse"
			animateOnce={true}
			duration={.5}>
			<li>
				<p><Icon /></p>
				<p>{name}</p>
			</li>
		</ScrollAnimation>
	)

	const Icons = ({ children, tab }) => (
		<>
			{section[tab] &&
				<section>
					<ul>
						{children}
					</ul>
				</section>
			}
		</>
	)

	return (
		<div>
			<div className="skills-section">
				<h1 className="section-title">Specialties</h1>
				<div className="skills-cont">
					<ul className="navigation">
						<Tab tab="a"><span>Programming </span><span>Languages</span></Tab>
						<Tab tab="b"><span>Front-end </span><span>Technologies</span></Tab>
						<Tab tab="c"><span>Back-end </span><span>Technologies</span></Tab>
						<Tab tab="d"><span>Database </span><span>Technologies</span></Tab>
						<Tab tab="e"><span>Storage and</span><span>Deployment</span></Tab>
					</ul>
					<Icons tab="a">
						<Anim Icon={SiJavascript} name="JavaScript" />
						<Anim Icon={SiTypescript} name="TypeScript" />
						<Anim Icon={SiCsharp} name="CSharp" />
						<Anim Icon={SiJava} name="Java" />
					</Icons>
					<Icons tab="b">
						<Anim Icon={DiDotnet} name="ASP.NET" />
						<Anim Icon={SiReact} name="React" />
						<Anim Icon={SiRedux} name="Redux" />
						<Anim Icon={RiGatsbyLine} name="Gatsby" />
						<Anim Icon={SiNextDotJs} name="Next" />
						<Anim Icon={RiHtml5Line} name="HTML" />
						<Anim Icon={RiCss3Fill} name="CSS" />
						<Anim Icon={DiSass} name="SASS" />
					</Icons>
					<Icons tab="c">
						<Anim Icon={SiNodeDotJs} name="Express.js" />
						<Anim Icon={GiKoala} name="Koa.js" />
						<Anim Icon={GrMysql} name="SQL" />
						<Anim Icon={SiGraphql} name="GraphQL" />
						<Anim Icon={SiApollographql} name="Apollo" />
						<Anim Icon={SiSocketDotIo} name="Socket.io" />
					</Icons>
					<Icons tab="d">
						<Anim Icon={SiMysql} name="MySQL" />
						<Anim Icon={DiPostgresql} name="PostgreSQL" />
						<Anim Icon={SiMicrosoftsqlserver} name="SQL Server" />
						<Anim Icon={VscDatabase} name="NoSQL" />
						<Anim Icon={SiMongodb} name="Mongo DB" />
						<Anim Icon={SiMariadbfoundation} name="Maria DB" />
					</Icons>
					<Icons tab="e">
						<Anim Icon={SiAmazonaws} name="AWS" />
						<Anim Icon={SiMicrosoftazure} name="Azure" />
						<Anim Icon={SiGithub} name="Github" />
						<Anim Icon={SiNetlify} name="Netlify" />
						<Anim Icon={SiNpm} name="NPM" />
						<Anim Icon={RiGatsbyLine} name="Gatsby Cloud" />
						<Anim Icon={SiHeroku} name="Heroku" />
					</Icons>
				</div>
			</div>
		</div >
	)
}

export default Skills
