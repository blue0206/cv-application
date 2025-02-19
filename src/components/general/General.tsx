import { ReactElement } from 'react';
import Input from '../Input';
import Label from '../Label';
import { GeneralInfoFormData } from '../../interfaces';

type SectionProps = {
    stateValue: GeneralInfoFormData;
    stateHandler: (data: string, key: keyof GeneralInfoFormData) => void;
}

function General(props: SectionProps): ReactElement {
    return (
        <div className="detail general">
            <h1>General Details</h1>
            <form>
                <div className="form-element">
                    <Label for="fullname">Full Name</Label>
                    <Input 
                        name="fullname" 
                        id="fullname" 
                        placeholder="Your Name..." 
                        value={props.stateValue.fullname} 
                        onChange={(e) => props.stateHandler(e.target.value, "fullname")} 
                    />
                </div>
                <div className="form-element">
                    <Label for="email">Email</Label>
                    <Input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="example@mail.com" 
                        value={props.stateValue.email} 
                        onChange={(e) => props.stateHandler(e.target.value, "email")} 
                    />
                </div>
                <div className="form-element">
                    <Label for="phone">Phone Number</Label>
                    <Input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        value={props.stateValue.phone} 
                        placeholder="Your phone number..." 
                        onChange={(e) => props.stateHandler(e.target.value, "phone")} 
                    />
                </div>
                <div className="form-element">
                    <Label for="location">Location</Label>
                    <Input 
                        name="location" 
                        id="location" 
                        placeholder="New York, US" 
                        value={props.stateValue.location} 
                        onChange={(e) => props.stateHandler(e.target.value, "location")} 
                    />
                </div>
            </form>
        </div>
    )
}

export default General;