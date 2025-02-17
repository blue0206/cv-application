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
        name,
        id,
        type="text",
        placeholder="",
        pattern="",
        required=false,
        value="",
        onChange=()=>{}
    }: InputProps
): ReactElement {
    return (
        <>
            <input 
                name={name} 
                id={id} 
                type={type} 
                placeholder={placeholder} 
                pattern={pattern} 
                required={required} 
                value={value} 
                onChange={onChange} 
            />
        </>
    )
}

export default Input;