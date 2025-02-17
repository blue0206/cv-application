import { ReactElement } from 'react';

type LabelProps = {
    for: string,
    children: string | ReactElement
}

function Label(props: LabelProps): ReactElement {
    return (
        <>
            <label htmlFor={props.for}>
                {props.children}
            </label>
        </>
    )
}

export default Label;