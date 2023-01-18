import { useRef, useState, useCallback, useLayoutEffect } from "react"
import ResizeObserver from "resize-observer-polyfill"
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion
} from "framer-motion"

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
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics) 

  return (
    <div className="bg-[#0F172A]">  
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
      >
        {children}
      </motion.div>

      <div className="w-full"/>
    </div>
  )
}

export default SmoothScroll
