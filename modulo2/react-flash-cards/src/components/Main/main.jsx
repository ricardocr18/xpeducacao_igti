import { useState } from "react";
import { allFlashCards } from "../../data/allFlashCards";
import { Button } from "../Button/button";
import { FlashCard } from "../FlashCard/flashCard";
import { FlashCards } from "../FlashCards/flashCards";
import { helperShuffleArray } from "../arrayHelpers/arrayHelpers";

export function Main() {

  const [allCards, setAllCards] = useState(allFlashCards)

  function handleButtonClick() {
    const shuffLedCards = helperShuffleArray(allCards)

    setAllCards(shuffLedCards)
  }

  return (
    <main>
      <Button onButtonClick={handleButtonClick}>Embaralhar Card</Button>
      <FlashCards>
        {allCards.map(({ id, title, description }) => {
          return <FlashCard key={id} title={title} description={description} />;
        })}
      </FlashCards>
    </main>
  );
}
