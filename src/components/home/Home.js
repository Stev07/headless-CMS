import React from "react";
import "./home.scss";
import About from '../infos/Infos';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      imgs: []
    };
  }

  componentDidMount() {
    let imgsURL =
      "https://www.visagesetcouleurs.be/admin/wp-json/wp/v2/media?parent=83";
    fetch(imgsURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          imgs: response
        });
      });
  }

  render() {
    let imgs = this.state.imgs.map((img, index) => {
      return (
        <div key={index} id="carousel">
          <img src={img.source_url} alt="carousel-item" />
          <p className="legend">{img.title.rendered} </p>
        </div>
      );
    });

    return (
      <section className="row">
        <main className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
          <h1 className="bienvenue">
            Bienvenue sur le site de Liliane Bourgeois
          </h1>
          <br />
          <br />
          <p className="voici">Voici quelques-unes de mes dernières oeuvres</p>
          <br />

          <Carousel width="75%" className="carousel">
            {imgs}
          </Carousel>

          <br />
          <br />
        </main>

        <About />
      </section>
    );
  }
}
