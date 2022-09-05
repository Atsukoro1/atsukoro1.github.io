import { IconDefinition } from "@fortawesome/fontawesome-common-types/index";

interface ITechnology {
    name: string;
    icon: IconDefinition
}

interface IProps {
    name: string;
    description?: string;
    technologies: ITechnology[],
    imagePath?: string;
}

const Project = ({ 
    name,
    description, 
    technologies, 
    imagePath 
}: IProps) => {
  return (
    <div>Project</div>
  )
}

export default Project