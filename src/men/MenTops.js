import React, { Component } from 'react';
import p1 from './images/t-p1.jpg'
import p2 from './images/t-p2.jpg'
import p3 from './images/t-p3.jpg'

class MenTops extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron-bg jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Men's Tops</h1>
            <p className="lead">Soft wardrobe essentials for everyday.</p>
          </div>
        </div>
        <div className="container">
        <div class="embed-responsive embed-responsive-21by9">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0IyKM_iul-8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <br/>
        <h2>Product Preview</h2>
          <br/>
          <div className="text-center">
            <figure class="figure">
              <img src={p1} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Cotton Shirt CAD $29.90</figcaption>
            </figure>
            <figure class="figure">
              <img src={p2} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Cotton Shirt CAD $29.90</figcaption>
            </figure>
            <figure class="figure">
              <img src={p3} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Cotton Shirt CAD $29.90</figcaption>
            </figure>
           
          </div>
        </div>
        <br/>
      </div>);
  }
}

export default MenTops;
