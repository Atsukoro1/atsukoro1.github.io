import { SiBootstrap, SiCss3, SiDocker, SiExpress, SiFastify, SiFramer, SiGit, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNeo4J, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiReact, SiRust, SiSass, SiSolidity, SiStripe, SiTypescript, SiVuedotjs, SiYarn } from "react-icons/si"
import Technology, { TechnologyI } from "./Technology"

const technologies: TechnologyI<string>[] = [
    {
        name: 'PostgreSQL', 
        icon: SiPostgresql,
        color: 'blue'
    },
    {
        name: 'MongoDB', 
        icon: SiMongodb,
        color: 'yellow'
    },
    {
        name: 'Neo4J', 
        icon: SiNeo4J,
        color: 'blue'
    },
    {
        name: 'MySQL', 
        icon: SiMysql,
        color: 'orange'
    },
    {
        name: 'NodeJS', 
        icon: SiNodedotjs,
        color: 'green'
    },
    {
        name: 'Typescript', 
        icon: SiTypescript,
        color: 'blue'
    },
    {
        name: 'Rust', 
        icon: SiRust,
        color: 'orange'
    },
    {
        name: 'Javascript', 
        icon: SiJavascript,
        color: 'yellow'
    },
    {
        name: 'HTML', 
        icon: SiHtml5,
        color: 'orange'
    },
    {
        name: 'CSS5', 
        icon: SiCss3,
        color: 'blue'
    },
    {
        name: 'Sass', 
        icon: SiSass,
        color: 'pink'
    },
    {
        name: 'React', 
        icon: SiReact,
        color: 'blue'
    },
    {
        name: 'NextJS', 
        icon: SiNextdotjs,
        color: 'blue'
    },
    {
        name: 'SolidJS', 
        icon: SiSolidity,
        color: 'green'
    },
    {
        name: 'Vue', 
        icon: SiVuedotjs,
        color: 'green'
    },
    {
        name: 'Docker', 
        icon: SiDocker,
        color: 'blue'
    },
    {
        name: 'Github', 
        icon: SiGithub,
        color: 'black'
    },
    {
        name: 'ExpressJS', 
        icon: SiExpress,
        color: 'black'
    },
    {
        name: 'Fastify', 
        icon: SiFastify,
        color: 'black'
    },
    {
        name: 'Git', 
        icon: SiGit,
        color: 'orange'
    },
    {
        name: 'Php', 
        icon: SiPhp,
        color: 'purple'
    },
    {
        name: 'Yarn', 
        icon: SiYarn,
        color: 'blue'
    },
    {
        name: 'Bootstrap', 
        icon: SiBootstrap,
        color: 'purple'
    },
    {
        name: 'Stripe', 
        icon: SiStripe,
        color: 'blue'
    },
    {
        name: 'Framer', 
        icon: SiFramer,
        color: 'black'
    }
]

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
                )
            })}
        </div>
    )
}

export default TechnologyList;