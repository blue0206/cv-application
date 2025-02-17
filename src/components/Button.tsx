import { MouseEventHandler, ReactElement } from "react";

type ButtonProps = {
    children: string | ReactElement;
    type?: "submit" | "reset" | "button";
    className?: string;
    id?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    key?: string;
}

function Button({
    type="button",
    ...props
}: ButtonProps): ReactElement {
    return (
        <>
            <button 
                key={props.key} 
                type={type} 
                className={props.className} 
                id={props.id} 
                onClick={props.onClick} 
            >
                {props.children}
            </button>
        </>
    );
}

export default Button;