
import { 
    FormInputLabel,
    GroupContainer,
    Input

} from "./form-input.style";

const FormInput = ({ label, ...otherProps }) => {
    return(
        <GroupContainer>
            <Input {...otherProps} />
            { label && 
                <FormInputLabel shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            }
        </GroupContainer>
    )
}
export default FormInput;