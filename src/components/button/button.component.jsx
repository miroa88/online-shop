import { baseButton, GoogleButton, InvertedButton } from "./button.style";

const BUTTONS = {
    google: GoogleButton,
    inverted: InvertedButton,
    base : baseButton
}
export const BUTTON_TYPE_CLASSES = {
    google: "google",
    inverted:"inverted",
    base:"base"
}

const Button = ({ children, buttonType, ...otherProps }) => {
   
    const BUTTON =  buttonType ? BUTTONS[buttonType] : BUTTONS['base'];
    return(
        <BUTTON {...otherProps}>
            {children}
        </BUTTON>
    )

}
export default Button;