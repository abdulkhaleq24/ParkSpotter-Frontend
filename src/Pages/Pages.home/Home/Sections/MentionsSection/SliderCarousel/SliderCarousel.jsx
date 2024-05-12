import { useState, useRef } from "react"
import styled from "styled-components"

export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 50px;
`

export const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1); /* Custom cubic bezier for smoother motion */
  height: 800px;
`

export const CarouselItem = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 400px; /* Adjust height as needed */
  box-sizing: border-box;
`

const SliderCarousel = ({ children }) => {
  const [startIndex, setStartIndex] = useState(0)
  const [startPosition, setStartPosition] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [velocity, setVelocity] = useState(0)

  const containerRef = useRef(null)

  const handleTouchStart = (event) => {
    setIsDragging(true)
    setStartPosition(event.touches[0].clientX)
    setVelocity(0)
  }

  const handleTouchMove = (event) => {
    if (!isDragging) return

    const currentPosition = event.touches[0].clientX
    const diff = currentPosition - startPosition

    const sensitivity = 0.003 // Adjust sensitivity for smoother swipe
    const newIndex = startIndex - diff * sensitivity
    setStartIndex(newIndex)
    setStartPosition(currentPosition)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    // Add inertia based on the last touch velocity
    const decelerationRate = 0.7 // Adjust deceleration rate for smoother motion
    const timer = setInterval(() => {
      setStartIndex((prevIndex) => {
        const newIndex = prevIndex + velocity
        return Math.max(0, Math.min(children.length - 1, newIndex))
      })
      setVelocity((prevVelocity) => prevVelocity * decelerationRate)
      if (Math.abs(velocity) < 0.001) clearInterval(timer)
    }, 16)
  }

  const handleMouseDown = (event) => {
    setIsDragging(true)
    setStartPosition(event.clientX)
    setVelocity(0)
  }

  const handleMouseMove = (event) => {
    if (!isDragging) return

    const currentPosition = event.clientX
    const diff = currentPosition - startPosition

    const sensitivity = 0.003 // Adjust sensitivity for smoother swipe
    const newIndex = startIndex - diff * sensitivity
    setStartIndex(newIndex)
    setStartPosition(currentPosition)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    // Add inertia based on the last mouse movement velocity
    const decelerationRate = 0.7 // Adjust deceleration rate for smoother motion
    const timer = setInterval(() => {
      setStartIndex((prevIndex) => {
        const newIndex = prevIndex + velocity
        return Math.max(0, Math.min(children.length - 1, newIndex))
      })
      setVelocity((prevVelocity) => prevVelocity * decelerationRate)
      if (Math.abs(velocity) < 0.001) clearInterval(timer)
    }, 16)
  }

  const handleMouseMoveCapture = (event) => {
    if (isDragging) event.preventDefault()
  }

  return (
    <CarouselContainer
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseMoveCapture={handleMouseMoveCapture}
      ref={containerRef}
    >
      <CarouselWrapper
        style={{ transform: `translateX(-${startIndex * 90}%)` }} // Adjust multiplier for full-width scrolling
      >
        {children}
      </CarouselWrapper>
    </CarouselContainer>
  )
}

export default SliderCarousel
