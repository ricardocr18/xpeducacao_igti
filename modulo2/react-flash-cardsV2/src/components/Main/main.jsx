import { useState } from "react";
import { allFlashCards } from "../../data/allFlashCards";
import { Button } from "../Button/button";
import { FlashCard } from "../FlashCard/flashCard";
import { FlashCards } from "../FlashCards/flashCards";
import { helperShuffleArray } from "../arrayHelpers/arrayHelpers";
import { RadionButton } from "../RadionButton/radionButton";

export function Main() {
  const [allCards, setAllCards] = useState(allFlashCards);
  const [showTitle, setShowTitle] = useState(true);

  function handleButtonClick() {
    const shuffLedCards = helperShuffleArray(allCards);

    setAllCards(shuffLedCards);
  }

  function handleRadionButtonClick(buttonGroup) {
    if (buttonGroup === "showTitle") {
      setShowTitle(true);
    } else if (buttonGroup === "showDescription") {
      setShowTitle(false);
    }
  }

  return (
    <main>
      <Button onButtonClick={handleButtonClick}>Embaralhar Card</Button>

      <RadionButton
        id="radioButtonShowTitle"
        name="showInfo"
        nome="Mostrar Título"
        buttonChecked={showTitle ? "showTitle" : ""}
        onButtonClick={handleRadionButtonClick}
        buttonGroup="showTitle"
      />

      <RadionButton
        id="radioButtonShowDescription"
        name="showInfo"
        nome="Mostrar Descrição"
        buttonChecked={!showTitle ? "showDescription" : ""}
        onButtonClick={handleRadionButtonClick}
        buttonGroup="showDescription"
      />

      <FlashCards>
        {allCards.map(({ id, title, description }) => {
          return (
            <FlashCard
              key={id}
              title={title}
              description={description}
              showFlashCardTitle={showTitle}
            />
          );
        })}
      </FlashCards>
    </main>
  );
}
