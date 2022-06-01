import { React, useState } from 'react'
import { Carousel} from 'react-bootstrap'



function Slider() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.bobswatches.com/rolex-blog/wp-content/uploads/2020/10/Rolex_Explorer_214270_5D3_1933-Edit-2-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>WATCHES</h3>
            <p>It's time to upgrade</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/91BKAPu8rgL._AC_UX522_.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>HATS</h3>
            <p>Don't deal with your hair</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://staticg.sportskeeda.com/editor/2022/03/18160-16476816771680-1920.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3 style={{color:'rgb(52,228,203)'}}>T-SHIRTS</h3>
            <p style={{color:'rgb(52,228,203)'}}>Comfortable and stylish shirts for any occassion.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default Slider