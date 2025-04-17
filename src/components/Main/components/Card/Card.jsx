import React from "react";
import trashIcon from "../../../../images/icons/trash.svg";
import ImagePopup from "../ImagePopup/ImagePopup";
import { CurrentUserContext } from "../../../../contexts/CurrentUserContext";

export default function Card({ card, onClick, onCardLike, onCardDelete }) {
  let { currentUser } = React.useContext(CurrentUserContext);
  const { name, link } = card;
  const imageComponent = {
    title: null,
    children: <ImagePopup card={card} />,
  };

  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `place-grid__element-icon-like ${
    isLiked ? "place-grid__element-icon-like_active" : ""
  }`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="place-grid__element">
      <img
        src={trashIcon}
        alt="Icono Eliminar"
        className="place-grid__element-icon-trash"
        onClick={handleDeleteClick}
      />

      <img
        className="place-grid__element-image"
        src={link}
        alt=""
        onClick={() => onClick(imageComponent)}
      />
      <div className="place-grid__element-row">
        <p className="place-grid__element-text">{name}</p>
        <div className="place-grid__element-column">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <span className="place-grid__element-counter-like">0</span>
        </div>
      </div>
    </li>
  );
}
