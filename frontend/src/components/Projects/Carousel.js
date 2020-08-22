import "../../styles/Projects/carousel.css"

export default function Carousel(props) {
  return (
    <div className={`carousel ${props.className}`}> 
      <div className="carousel-slider">
        {props.children}
      </div>
    </div>
  )
}