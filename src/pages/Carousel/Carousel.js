import React from 'react';
import './Carousel.css'; // Estilos para o carousel

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0
        };
    }

    // Função para avançar para a próxima imagem
    nextSlide = () => {
        const lastIndex = this.props.images.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    // Função para retroceder para a imagem anterior
    prevSlide = () => {
        const lastIndex = this.props.images.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        const { images } = this.props;
        const { currentImageIndex } = this.state;

        return (
            <div className="carousel">
                <div className="carousel-images">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            className={index === currentImageIndex ? 'active' : ''}
                        />
                    ))}
                </div>

                <button onClick={this.prevSlide} className="carousel-button prev">
                    &#10094;
                </button>
                <button onClick={this.nextSlide} className="carousel-button next">
                    &#10095;
                </button>
            </div>
        );
    }
}

export default Carousel;
