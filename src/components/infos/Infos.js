import React from "react";
import './infos.scss';

export default class Aside extends React.Component {

  render() {

    return (
        <aside className="col-lg-2 ml-auto col-md-12 col-sm-12 col-xs-12;">
          <h3 className="quisuisje">Qui suis-je?</h3>
          <br />
          <p className="infos">
            Liliane Bourgeois vit et peint à Saive. Elle profite de sa retraite
            pour fréquenter l'Académie Royale des Beaux-Arts de Liège en section
            dessin. Puis elle touche à la peinture en autodidacte depuis
            maintenant 4 ans. L'acrylique convient particulièrement à sa nature
            impatiente. Les petits formats du début sont devenus grands et ses
            goûts se sont rapidement précisés, c’est donc inévitablement qu’elle
            peint des portraits, des regards, des personnages forts et puissants
            en émotions, et elle croit avoir trouvé sa voie en peignant des
            portraits dont la plupart laissent libre cours à l’imagination, de
            par leur ambiguïté. Son travail est inspiré par la notion que l’art
            est fait pour perturber la conscience. Depuis peu, elle a testé et
            approuvé la peinture à l’huile, qui lui ouvre d’autres portes, une
            autre façon de peindre.
          </p>
        </aside>
      
    );
  }
}
