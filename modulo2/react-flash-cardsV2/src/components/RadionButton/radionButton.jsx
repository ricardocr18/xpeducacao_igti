import { getNewId } from "../../services/idService";

export function RadionButton({
  id = getNewId(),
  name = "radioButtonName",
  nome,
  buttonChecked,
  onButtonClick,
  buttonGroup = "",
}) {

  function handleRadioButtonChange() {
    if (onButtonClick) onButtonClick(buttonGroup);    
  }  

  return (
    <div>
      <input
        id={id}
        type="radio"
        name={name}
        checked={buttonChecked}
        onChange={handleRadioButtonChange}
      />
      <label htmlFor={id}>{nome}</label>
    </div>
  );
}
