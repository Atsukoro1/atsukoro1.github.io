import { useRef, useState, useCallback, useLayoutEffect } from "react"
import ResizeObserver from "resize-observer-polyfill"
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion
} from "framer-motion"
import Socials from "./Socials"
import { SiGithub, SiLinkedin } from "react-icons/si"
import ProgressLine from "./ProgressLine"

const SmoothScroll = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
  const scrollRef = useRef(null)

  const [pageHeight, setPageHeight] = useState(0)

  // @ts-ignore
  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );

    // @ts-ignore
    scrollRef && resizeObserver.observe(scrollRef.current)
    return () => resizeObserver.disconnect()
  }, [scrollRef, resizePageHeight])

  const { scrollY } = useViewportScroll()

  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  const physics = { damping: 15, mass: 0.27, stiffness: 75 }
  const spring = useSpring(transform, physics) 

  return (
    <div className="dark:bg-[#0F172A] bg-white">  
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
      >
        {children}
      </motion.div>
      <span className="fixed top-0 sm:block"><ProgressLine /></span>
      
      <span className="fixed hidden md:block bottom-0 left-8">
        <Socials
          socials={[
            {
              icon: SiGithub,
              href: "https://github.com/Atsukoro1"
            },
            {
              icon: SiLinkedin,
              href: "https://cz.linkedin.com/in/jakub-dornicak-b6953423b?trk=people-guest_people_search-card"
            }
          ]}
        />
      </span>

      <div className="w-full"/>
    </div>
  )
}

export default SmoothScroll
