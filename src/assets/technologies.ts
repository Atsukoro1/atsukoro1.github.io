import { TechnologyI } from "../components/Technology";
import {
	SiCss3,
	SiDocker,
	SiGit,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiMongodb,
	SiMysql,
	SiNeo4J,
	SiNextdotjs,
	SiNuxtdotjs,
	SiPhp,
	SiPostgresql,
	SiPostman,
	SiReact,
	SiRust,
	SiSolidity,
	SiTypescript,
	SiVuedotjs
} from "react-icons/si";

export const databaseTechnologies: TechnologyI<string>[] = [
	{
		name: "PostgreSQL",
		icon: SiPostgresql,
	},
	{
		name: "MongoDB",
		icon: SiMongodb,
	},
	{
		name: "Neo4J",
		icon: SiNeo4J,
	},
	{
		name: "MySQL",
		icon: SiMysql,
	},
]

export const toolTechnologies: TechnologyI<string>[] = [
	{
		name: "Git",
		icon: SiGit,
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
		name: "Postman",
		icon: SiPostman
	}
];

export const languageTechnologies: TechnologyI<string>[] = [
	{
		name: "Typescript",
		icon: SiTypescript,
	},
	{
		name: "Rust",
		icon: SiRust,
	},
	{
		name: "Javascript",
		icon: SiJavascript,
	},
	{
		name: "HTML",
		icon: SiHtml5,
	},
	{
		name: "CSS5",
		icon: SiCss3,
	},
	{
		name: "PHP",
		icon: SiPhp
	}
];

export const frameworksTechnologies: TechnologyI<string>[] = [
	{
		name: "React",
		icon: SiReact
	},
	{
		name: "Vue",
		icon: SiVuedotjs
	},
	{
		name: "Nuxt.js",
		icon: SiNuxtdotjs
	},
	{
		name: "Next.js",
		icon: SiNextdotjs
	},
	{
		name: "Solid.js",
		icon: SiSolidity
	},
	{
		name: "React Native",
		icon: SiReact
	}
]