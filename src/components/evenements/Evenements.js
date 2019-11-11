import React from "react";
import "./evenements.scss";

export default class Evenements extends React.Component {
  render() {
    return (
      <section className="row">
        <main className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="event">
            <div className="soon">
              <h3 className="menuCenter">Expositions à venir...</h3>
              <br />
              <ul>
                <li>Aucune exposition prévue pour le moment...</li>
              </ul>
            </div>
            <br />
            <br />
            <div className="past">
              <h3 className="menuCenter">Expositions passées</h3>
              <br />
              <h4>2019</h4>
              <ul>
                <li>
                  Exposition en solo à l’abbaye de Val Dieu à Aubel en avril
                </li>
              </ul><br/>
              <h4>2018</h4>
              <ul>
                <li>Brel, notre quête.</li>
                <li>Expo d'ensemble d'artistes à l'ESCA Flawinne</li>
                <li>Château Les Waleffes en juin</li>
                <li>Lac de l’eau d’heure (Cerfontaine) en août</li>
                <li>Hotton-Montmartre en août</li>
                <li>Montmartre à Dinant en septembre</li>
                <li>
                  Artistes de chez nous et d’ailleurs à Fléron en novembre
                </li>
              </ul>
<br />
              <h4>2017</h4>
              <ul>
                <li>Art au chalet à Jambes</li>
                <li>Salon senior Relook'âge à Verviers</li>
                <li>Expo d'ensemble d'artistes à l'ESCA Flawinne</li>
                <li>Salle l'Omalienne à Omal</li>
                <li>Force et regards différents à Flémalle</li>
                <li>Artistes et artisants à bellaire</li>

                <li>Juprelle</li>
                <li>Hotton-Montmartre</li>
                <li>Ny, village artisans</li>
                <li>Art et saveurs en Abbaye à Obourg</li>

                <li>Florennes art</li>
                <li>Montmartre à Dinant</li>
                <li>SAC à Charleroi</li>

                <li>Artistes de chez nous et d'ailleurs à Fléron</li>
                <br />
              </ul>
<br />
              <h4>2016</h4>
              <ul>
                <li>Mos'Art à Yvoir</li>
                <li>Labelg'Art à la galerie du Beffroi à Namur</li>
                <li>Challenge Alari à St Gérard</li>
                <li>Dinant Montmartre</li>
                <br />
                <li>
                  Participation au grand prix René Thewissen au château d'Oupeye
                </li>
                <li>"Artistes de chez nous et d'ailleurs" à Fléron</li>
                <li>SLAR à Spy</li>
                <br />
              </ul>
            </div>
          </div>
          <br />
          <br />
        </main>
      </section>
    );
  }
}
