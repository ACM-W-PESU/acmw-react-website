import React from 'react';
import Lightbox from 'react-image-lightbox';
import './gallery.css';
import '../Lightbox.css';
import image1 from '../assets/gallery/Screenshot_20241013_142133_Chrome.jpg';
import image2 from '../assets/gallery/Screenshot_20241013_142241_Chrome.jpg';
import image3 from '../assets/gallery/Screenshot_20241013_143330_Chrome.jpg';
import image6 from '../assets/gallery/Screenshot_20241013_142338_Chrome.jpg';
import image4 from '../assets/gallery/Screenshot_20241013_142406_Chrome.jpg';
import image5 from '../assets/gallery/Screenshot_20241013_142418_Chrome.jpg';
import Footer from '../components/footer';
class Gallery extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: [
      { src: image1, description: "ACMW tech team 2023-24" },
      { src: image2, description: "DFH 4.0" },
      { src: image3, description: "" },
      { src: image6, description: "DFH 1st place" },
      { src: image4, description: "DFH 2nd place" },
      { src: image5, description: "DFH 3rd place" }
    ]
  };

  renderImages = () => {
    const { images } = this.state;
    
    return images.map((image, index) => (
      <div key={index} className="gallery-item">
        <img
          src={image.src}
          alt={`Gallery ${index + 1}`}
          onClick={() => this.setState({ photoIndex: index, isOpen: true })}
        />
        <p className="image-description">{image.description}</p>
      </div>
    ));
  };

  render() {
    const { photoIndex, isOpen, images } = this.state;
    return (
      <div>
      <div className="gallery-container" id="gallery">
        <div className="gallery-wrapper">
          {this.renderImages()}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
            imageTitle={images[photoIndex].description}
            imageCaption={`Image ${photoIndex + 1} of ${images.length}`}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
      <Footer/>
      </div>
    );
  }
}

export default Gallery;