import React from "react";
import './footer.scss';
import { Link } from "react-router-dom";

import logofb from '../../imgs/logo_facebook.png';
import logoinsta from '../../imgs/logo_insta.png';

export default class Footer extends React.Component {


  render() {
    return (
      <footer className="row">
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <div className="reseaux-sociaux">
            <p> Retrouvez-moi sur les différents réseaux sociaux!</p>
            <a href="https://www.facebook.com/Liliane-Bourgeois-Visages-et-couleurs-1678456515754188/?ref=br_rs">
              <img
                src={logofb}
                width="80"
                height="85"
                alt="Facebook"
              />
            </a>
            <a href="https://www.instagram.com/liliane_bourgeois/?hl=fr">
              <img src={logoinsta} width="80" height="80" alt="" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm 12 col-xs-12">
          <div className="contact">
            <p>
              {" "}
              Un avis, une remarque, une question ou tout simplement interessé par une toile/sculpture?
              <br /><br /> N'hésitez pas à me contacter via la page{" "}
              <Link to="/contact">
                {" "}
                {"contact"}{" "}
              </Link> .
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
