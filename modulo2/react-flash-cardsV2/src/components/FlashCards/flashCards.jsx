import styles from "./flashCards.module.css"

export function FlashCards({children: flashcards}){
    console.log(flashcards)
    return(
        <div className={styles.cards}>
            {flashcards}
        </div>
    )
}