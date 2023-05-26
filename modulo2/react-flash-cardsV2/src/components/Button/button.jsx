import styles from "./Button.module.css"

export function Button({children: description = "Descrição do botão", onButtonClick = null}){

    function handleButtonClick(){
        if(onButtonClick){
            onButtonClick()
        }
    }
    return (
        <div>
            <button className={styles.button}onClick={handleButtonClick}>{description}</button>
        </div>
    )

}