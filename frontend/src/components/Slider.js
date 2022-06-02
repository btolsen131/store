import { React, useState } from 'react'
import { Carousel} from 'react-bootstrap'



function Slider() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={8000}>
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
        <Carousel.Item interval={8000}>
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
        <Carousel.Item interval={8000}>
          <img
            className="d-block w-100"
            src="https://talksport.com/wp-content/uploads/sites/5/2022/02/M298922.jpg?strip=all&w=960&quality=100"
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