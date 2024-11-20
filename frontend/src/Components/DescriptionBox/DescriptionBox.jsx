import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        L'histoire de Henda Gazzeh est une ode à l'amour, à la tradition et à la créativité, tissée à travers les fils de la broderie. C'est une histoire qui transcende le temps,
         un voyage à travers les souvenirs et les héritages familiaux, où chaque point raconte une histoire unique.
        </p>
        <p>
        Henda Gazzeh, une âme passionnée, a découvert sa vocation dès son plus jeune âge, guidée par l'amour et la patience de sa mère.
         Chaque vacance scolaire était une nouvelle page de ce voyage, où un simple morceau de tissu se transformait en une toile d'art. Ce gorguef, ce tissu hayek tunisien traditionnel, n'était pas seulement un morceau de tissu,
         c'était un lien entre mère et fille, une passerelle vers un monde de créativité et d'héritage.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
