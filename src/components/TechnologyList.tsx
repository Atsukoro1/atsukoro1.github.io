import {
	SiBootstrap,
	SiCss3,
	SiDocker,
	SiExpress,
	SiFastify,
	SiFramer,
	SiGit,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiMongodb,
	SiMysql,
	SiNeo4J,
	SiNextdotjs,
	SiNodedotjs,
	SiPhp,
	SiPostgresql,
	SiReact,
	SiRust,
	SiSass,
	SiSolidity,
	SiStripe,
	SiTypescript,
	SiVuedotjs,
	SiYarn,
} from "react-icons/si";
import Technology, { TechnologyI } from "./Technology";

const technologies: TechnologyI<string>[] = [
	{
		name: "PostgreSQL",
		icon: SiPostgresql
	},
	{
		name: "MongoDB",
		icon: SiMongodb
	},
	{
		name: "Neo4J",
		icon: SiNeo4J
	},
	{
		name: "MySQL",
		icon: SiMysql
	},
	{
		name: "NodeJS",
		icon: SiNodedotjs
	},
	{
		name: "Typescript",
		icon: SiTypescript
	},
	{
		name: "Rust",
		icon: SiRust
	},
	{
		name: "Javascript",
		icon: SiJavascript
	},
	{
		name: "HTML",
		icon: SiHtml5
	},
	{
		name: "CSS5",
		icon: SiCss3
	},
	{
		name: "Sass",
		icon: SiSass
	},
	{
		name: "React",
		icon: SiReact
	},
	{
		name: "NextJS",
		icon: SiNextdotjs
	},
	{
		name: "SolidJS",
		icon: SiSolidity
	},
	{
		name: "Vue",
		icon: SiVuedotjs
	},
	{
		name: "Docker",
		icon: SiDocker
	},
	{
		name: "Github",
		icon: SiGithub
	},
	{
		name: "ExpressJS",
		icon: SiExpress
	},
	{
		name: "Fastify",
		icon: SiFastify
	},
	{
		name: "Git",
		icon: SiGit
	},
	{
		name: "Php",
		icon: SiPhp
	},
	{
		name: "Yarn",
		icon: SiYarn
	},
	{
		name: "Bootstrap",
		icon: SiBootstrap
	},
	{
		name: "Stripe",
		icon: SiStripe
	},
	{
		name: "Framer",
		icon: SiFramer
	},
];

const TechnologyList = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 grid-flow-dense">
			{technologies.map((el, key) => {
				return (
					<Technology
						key={key}
						name={el.name}
						icon={el.icon}
						color={el.color}
					/>
				);
			})}
		</div>
	);
};

export default TechnologyList;
