import React from "react";
import "./peintures.scss";

export default class Peintures extends React.Component {
  constructor() {
    super();
    this.state = {
      imgs: []
    };
  }

  componentDidMount() {
    let imgsURL =
      "https://www.visagesetcouleurs.be/admin/wp-json/wp/v2/media?parent=77&per_page=100";
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
      <div key={index} className="post" data-aos="fade-up">
        <div className="galerie img-wrap">
          <img src={img.source_url} alt="" className="galerie-img" />
          <div className="post-s">
            <p className="img-title">{img.title.rendered}</p>
            <p className="img-infos">{img.alt_text}</p>
          </div>
        </div>
      </div>
      )
    });

    return (
      <section className="row">
        <main className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="galerie">
          {imgs}
          </div>
        </main>
      </section>
    );
  }
}
