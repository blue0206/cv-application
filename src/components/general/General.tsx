import { ReactElement } from 'react';
import { DetailSubmitButtonStyle } from '../../types';
import Input from '../Input';
import Label from '../Label';

function General(): ReactElement {
    const buttonStyle: DetailSubmitButtonStyle = {
        height: "0px",
        width: "0px",
        display: "none"
    }

    return (
        <div className="detail general">
            <h1>General Details</h1>
            <form>
                <div className="form-element">
                    <Label for="fullname" children="Full Name"  />
                    <Input type="text" name="fullname" id="fullname" placeholder="Your Name..." />
                </div>
                <div className="form-element">
                    <Label for="email" children="Email" />
                    <Input type="email" name="email" id="email" placeholder="example@mail.com" />
                </div>
                <div className="form-element">
                    <Label for="phone" children="Phone Number" />
                    <Input type="tel" name="phone" id="phone" pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$" />
                </div>
                <div className="form-element">
                    <Label for="location" children="Location" />
                    <Input type="text" name="location" id="location" placeholder="New York, US" />
                </div>
                <div className="form-element">
                    <button type="submit" id="submit-general" style={buttonStyle}></button>
                </div>
            </form>
        </div>
    )
}

export default General;