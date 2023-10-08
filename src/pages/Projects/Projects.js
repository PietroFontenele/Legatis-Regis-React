import styles from './Projeto.css';
//components
import React, { useState, useRef, useEffect } from 'react';
import ArrowLeft from '../../IMGS/PNGs/left.png';
import ArrowRight from '../../IMGS/PNGs/right.png';
import Close from '../../IMGS/PNGs/close.png'
//IMGS
import Project from '../../IMGS/Projects-IMGS/projeto1.jpeg'
import Project1 from '../../IMGS/Projects-IMGS/projeto2.jpeg'
import Project2 from '../../IMGS/Projects-IMGS/projeto3.jpeg'
import Project3 from '../../IMGS/Projects-IMGS/projeto4.jpeg'
import Project4 from '../../IMGS/Projects-IMGS/projeto5.jpeg'
import Project5 from '../../IMGS/Projects-IMGS/projeto6.jpeg'
import Project6 from '../../IMGS/Projects-IMGS/projeto7.jpeg'
import Project7 from '../../IMGS/Projects-IMGS/projeto8.jpeg'
import Project8 from '../../IMGS/Projects-IMGS/projeto10.jpeg'
import Project9 from '../../IMGS/Projects-IMGS/projeto11.jpeg'
import ProjectX from '../../IMGS/Projects-IMGS/projeto12.jpeg'
import ProjectY from '../../IMGS/Projects-IMGS/Projeto13.jpeg';

const Modal = ({ isOpen, onClose, image, onNext, onPrevious, }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}><img src={Close} /></span>
        <div className="modal-image-container">
          <button className="modal-nav-button but" onClick={onPrevious}><img src={ArrowLeft} /></button>
          <img src={image} alt="Modal Image" className="modal-image" />
          <button className="modal-nav-button" onClick={onNext}><img src={ArrowRight} /></button>

        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // const [showElement, setShowElement] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setCurrentIndex(0);
    setModalOpen(false);
  };
  const images = [
           Project,
           Project1,
           Project2,
           Project3,
           Project4,
           Project5,
           Project6,
           Project7,
           Project8,
           Project9,
           ProjectX,
           ProjectY,
         ];

  // const handleShow = () => {
  //   setShowElement(img);
  // };
  // const handleClose = () => {
  //   setShowElement(false);
  // };

  // const img = [
  //   Project8,
  //   Project9,
  //   ProjectX,
  //   ProjectY,
  // ]



  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const previousImage = () => {
    const previousIndex = (currentIndex + images.length - 1) % images.length;
    setSelectedImage(images[previousIndex]);
    setCurrentIndex(previousIndex);
  };
  // const ToggleShowElement = () => {
  //   setShowElement(!ToggleShowElement);
  // };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img
            src={image}
            alt={`Gallery Image ${index + 1}`}
            onClick={() => openModal(image, index)}
          />
        </div>
      ))}
      {/* {img.map((image, index) => (
        <div key={index} className='gallery-item'>
          <img 
          src={image}
          alt={`Gallery Image ${index + 1}`}
          onClick={() => openModal(image, index)}
          />
        </div>
       ))} */}
      {/*  <button className='btn' onClick={handleShow}>ver mais</button> */}

      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        image={selectedImage}
        images={images}
        currentIndex={currentIndex}
        onNext={nextImage}
        onPrevious={previousImage}

      />
    </div>
  );
};

export default Projects;