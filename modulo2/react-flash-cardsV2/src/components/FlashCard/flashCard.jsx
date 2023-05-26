import { useEffect, useState } from "react";
import styles from "./flashCard.module.css";

export function FlashCard({
  title = <b>Titulo do card</b>,
  description = "Descrição do card, \n que pode conter\n mais palavras",
  showFlashCardTitle = true,
}) {
  const [showTitle, setShowTitle] = useState(showFlashCardTitle);

  useEffect(() => {
    setShowTitle(showFlashCardTitle);
  }),
    [showFlashCardTitle];

  const fontSizeClassName = showTitle ? { "font-size": "20px" } : { "font-size": "25px" };

  const descriptionStyle = {
    whiteSpace: "pre-line", // Quebras de linha preservadas
  };

  // Nessa função estou mudando o stado do showTitle, onde estou negando
  function handleCardClick() {
    setShowTitle(!showTitle);
  }

  return (
    <div
      className={`${styles.card}`}
      style={fontSizeClassName}
      onClick={handleCardClick}
    >
      {/* Se ShowTitle estiver true eu monstro o valor de TITULO se estiver false o valor de description */}
      {showTitle ? title : <span style={descriptionStyle}>{description}</span>}
    </div>
  );
}
