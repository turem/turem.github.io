import React, { Component } from "react";
import "../css/Learning.css";

class Learning extends Component {
    state = {
        photoIndex: 0,
        images: [
          'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(63).jpg',
          'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(66).jpg',
          'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(65).jpg',
          'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(67).jpg',
          'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(68).jpg',
          'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(64).jpg',
          'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(69).jpg',
          'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(59).jpg',
          'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(70).jpg'
        ]
      }
      
      renderImages = () => {
        let photoIndex = -1;
        const { images } = this.state;
      
      return images.map(imageSrc => {
        photoIndex++;
        const privateKey = photoIndex;
          return (
            <div className="column" key={privateKey/2}>
              <div className="container">
                <img src={imageSrc} key={privateKey} alt="Project"/>
                <div className="text">TEXT</div>
              </div>
            </div>
          ); 
        })
      }

      createRow = () => {

        return (
          <div className="row">
            {this.renderImages()}
            
          </div>
        );
      }
      
      render() {
        return (
            <div className="Learning">
              <header className="Learning-header">
                <div id="main-content">
                {this.createRow()}
                </div>
              </header>
            </div>
          );
        }
      }

export default Learning;