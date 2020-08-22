import "../../styles/Projects/carousel.css"

export default function Carousel(props) {
  return (
    <div className={`carousel ${props.className}`}> 
      <div className="carousel-slider">
        {[...Array(props.count)].map((_, index) => 
          <img key={index} src={`${props.img_folder}${index}.jpg`} 
            className="carousel-img" alt="Crousel Image" 
            style={{height: props.img_height, width: props.img_width }}/>
        )}
      </div>
    </div>
  )
}