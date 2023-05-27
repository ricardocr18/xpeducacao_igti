import { useEffect, useState } from "react";
import { Button } from "../Button/button";
import { FlashCard } from "../FlashCard/flashCard";
import { FlashCards } from "../FlashCards/flashCards";
import { helperShuffleArray } from "../arrayHelpers/arrayHelpers";
import { RadionButton } from "../RadionButton/radionButton";
import { apiGetAllFlashCards } from "../../services/apiService";

export function Main() {

  const [loading, setLoading] = useState(true)

  // Back End
  const [allCards, setAllCards] = useState([]);

  //Exclusivo para "Estudo"
  const [studyCards, setStudyCards] = useState([]);

  //rever esse useState, pois ele deixou de existir
  const [showTitle, setShowTitle] = useState(true);

  const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true);


  useEffect(() =>{
    apiGetAllFlashCards().then(allFlashCards => {
      // console.log(allFlashCards) Aqui eu pego toda as informações dos cards que estão na pasta backend-aula
      setAllCards(allFlashCards)
      setLoading(false)
    })
  },[])

  useEffect(() =>{
    setStudyCards(allCards.map(card => ({ ...card, showTitle: true })))
  }, [allCards])

  function handleButtonClick() { // Aqui eu embaralho os
    const shuffLedCards = helperShuffleArray(studyCards);

    setStudyCards(shuffLedCards);
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
        {studyCards.map(({ id, title, description, showTitle }) => {
          return (
            <FlashCard
              key={id}
              id={id}
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
