import technologies from "../assets/technologies";
import Technology from "./Technology";

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
