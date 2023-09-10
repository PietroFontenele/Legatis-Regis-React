// import styles from './Slide.css';
// import slide1 from '../../IMGS/Slide-IMGS/carousel-esc2-Edits.jpeg';
// import slide2 from '../../IMGS/Slide-IMGS/carousel-esc2edit.jpeg';
// import slide3 from '../../IMGS/Slide-IMGS/carousel-esc6.jpeg';
// import slide4 from '../../IMGS/Slide-IMGS/aboutus-image3.jpeg';
// import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react';
import styles from './Slide.css';

const Slide = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentImage, images.length]);
  
  
  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          className={`carousel-item ${
            index === currentImage ? 'active' : ''
          }`}
          key={index}
        >
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Slide;














// const imagens= [slide1, slide2, slide3, slide4];



// const Slide = () => {

//     const carousel = useRef();
//     const [width, setWidth] = useState(0)

//     useEffect(() => {
//         console.log(carousel.currebt?.scrollWidth, carousel.current?.offsetWidth)
//         setWidth(carousel.currebt?.scrollWidth - carousel.current?.offsetWidth)
//     }, [])

//     return(
//         <div className='Slide'>
//             <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "gabbing"}}>
//                 <motion.div
//                 className="inner"
//                 drag="x"
//                 dragConstraints={{ right: 0, left: -width }}>
//                     {imagens.map(image => (
//                         <motion.div className="item" key={image}>
//                             <img src={image} alt='Texto alt'/>
//                             </motion.div>
//                     ))}

//                 </motion.div>
//             </motion.div>
//         </div>
//     );
// }
// export default Slide;