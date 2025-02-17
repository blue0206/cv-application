import { ChangeEventHandler, ReactElement } from "react";

type InputProps = {
    name: string;
    id: string;
    type?: string;
    placeholder?: string;
    pattern?: string;
    required?: boolean;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

function Input(
    {
        type="text",
        ...props
    }: InputProps
): ReactElement {
    return (
        <>
            <input 
                name={props.name} 
                id={props.id} 
                type={type} 
                placeholder={props.placeholder} 
                pattern={props.pattern} 
                required={props.required} 
                value={props.value} 
                onChange={props.onChange} 
            />
        </>
    )
}

export default Input;