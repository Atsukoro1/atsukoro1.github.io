import Technology, { TechnologyI } from "./Technology"

interface Props {
    data: TechnologyI<string>[]
}

export default ({ data }: Props) => {
    return (
        <div className="grid grid-cols-2">
            {data.map((el, index) => {
                return (
                    <Technology
                        icon={el.icon}
                        name={el.name}
                        color={el.color}
                        key={index as keyof typeof Technology}
                    />
                )
            })}
        </div>
    )
}