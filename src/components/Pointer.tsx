import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons"

const Pointer = () => {
  return (
    <FontAwesomeIcon
        icon={faAnglesDown}
        className={
            `text-white fixed bottom-7 left-[50%] 
            translate-X-[50%]`
        }
        bounce
        size="2x"
    />
  )
}

export default Pointer