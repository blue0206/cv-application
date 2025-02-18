import { ChangeEventHandler, ReactElement } from 'react';

type TextareaProps = {
    name: string;
    id: string;
    placeholder?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

function Textarea(props: TextareaProps): ReactElement {
    return (
        <textarea 
            name={props.name} 
            id={props.id} 
            placeholder={props.placeholder} 
            value={props.value} 
            onChange={props.onChange} 
        >
        </textarea>
    )
}

export default Textarea;