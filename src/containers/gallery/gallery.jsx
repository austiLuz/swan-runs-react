import React from 'react';
import './gallery.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image1 from '../../assets/image1.jpeg';
import Image2 from '../../assets/image2.jpeg';
import Image3 from '../../assets/image3.jpeg';
import Image4 from '../../assets/image4.jpeg';
import Image5 from '../../assets/image5.jpeg';
import Image6 from '../../assets/image6.jpeg';
import Image7 from '../../assets/image7.jpeg';

const Gallery = () => {
  return (
    <Carousel className='section__padding' autoPlay infiniteLoop>
      {/* Slide 1 */}
      <div id='gallery'>
        <img src={Image1} alt="Image 1" />
      </div>
      {/* Slide 2 */}
      <div>
        <img src={Image2} alt="Image 2" />
      </div>
      {/* Slide 3 */}
      <div>
        <img src={Image3} alt="Image 3" />
      </div>
      {/* Slide 4 */}
      <div>
        <img src={Image4} alt="Image 4" />
      </div>
      {/* Slide 5 */}
      <div>
        <img src={Image5} alt="Image 5" />
      </div>
       {/* Slide 6 */}
       <div>
        <img src={Image6} alt="Image 6" />
      </div>
      {/* Slide 7 */}
      <div>
        <img src={Image7} alt="Image 7" />
      </div>
    </Carousel>
  );
};

export default Gallery;
