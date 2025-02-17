import { MouseEventHandler, ReactElement } from "react";

type ButtonProps = {
    children: string;
    type: "submit" | "reset" | "button";
    className?: string;
    id?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    key?: string;
}

function Button(props: ButtonProps): ReactElement {
    return (
        <>
            <button 
                key={props.key} 
                type={props.type} 
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