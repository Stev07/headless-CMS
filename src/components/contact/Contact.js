import React from "react";
import "./contact.scss";
import Infos from "../infos/Infos";
import Map from "../map/Map";

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <section className="row">
          <main className="col-lg-8 col-md-12 col-sm-12 col-xs-12 contact">
            <form
              action="https://formspree.io/contact@visagesetcouleurs.be"
              method="POST"
              className="contact-form"
            >
              <p>Contactez-moi</p>
              <div className="txtb">
                <label>Nom </label>
                <input type="text" name="Nom" placeholder="Votre nom" />
              </div>

              <div className="txtb">
                <label>Email </label>
                <input type="text" name="Email" placeholder="Votre e-mail" />
              </div>

              <div className="txtb">
                <label>Message </label>
                <textarea name="message" placeholder="Votre message" />
              </div>
              <input type="submit" value="Envoyer" className="btn" />
            </form>
            <br />
            <br />
            <div>
              <Map />
            </div>
          </main>

          <Infos />
        </section>
      </div>
    );
  }
}
