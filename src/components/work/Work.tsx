import { ReactElement, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Label, Input, Button } from "..";
import { WorkExperienceFormData } from "../../interfaces";
import { errorDisplay } from "../../types";

type SectionProps = {
    stateValue: WorkExperienceFormData;
    stateHandler: (item: string | WorkExperienceFormData, key?: keyof WorkExperienceFormData) => void;
}

function Work({stateValue, stateHandler}: SectionProps): ReactElement {
    const [editMode, setEditMode] = useState(false);
    const [companyFormError, setCompanyFormError] = useState<errorDisplay>(errorDisplay.none);
    const [positionFormError, setPositionFormError] = useState<errorDisplay>(errorDisplay.none);
    const [data, setData] = useState<WorkExperienceFormData[]>([]);

    const saveButtonHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if (!stateValue.company.trim() || !stateValue.position.trim()) {
            setCompanyFormError(stateValue.company.trim() ? errorDisplay.none : errorDisplay.block);
            setPositionFormError(stateValue.position.trim() ? errorDisplay.none : errorDisplay.block);
            return;
        }
        if (!stateValue.id) {
            const newFormData: WorkExperienceFormData = {
                id: uuidv4(),
                company: stateValue.company,
                position: stateValue.position,
                startDate: stateValue.startDate,
                endDate: stateValue.endDate,
                location: stateValue.location,
                description: stateValue.description
            };

            setData([...data, newFormData]);
        } else {
            setData(data.map(item => item.id === stateValue.id ? stateValue : item));
        }

        setCompanyFormError(errorDisplay.none);
        setPositionFormError(errorDisplay.none);

        stateHandler({
            id: "",
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            location: "",
            description: ""
        });
        setEditMode(false);
    }

    const cancelButtonHandler = () => {
        setEditMode(false);
        setCompanyFormError(errorDisplay.none);
        setPositionFormError(errorDisplay.none);
        stateHandler({
            id: "",
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            location: "",
            description: ""
        });
    }

    const addButtonHandler = () => {
        setEditMode(true);
    }

    const editButtonHandler = (currentData: WorkExperienceFormData) => {
        stateHandler(currentData);
        setEditMode(true);
    }

    return (
        <>
            <h1>Work Experience</h1>
            {
                editMode ? (
                    <form>
                        <div className="form-element">
                            <Label for="company">Company</Label>
                            <Input 
                                id="company" 
                                name="company" 
                                placeholder="Company name" 
                                value={stateValue.company} 
                                onChange={(e) => stateHandler(e.target.value, "company")} 
                            />
                            <div style={{display: companyFormError}} className="form-error">*Company name is required.</div>
                        </div>
                        <div className="form-element">
                            <Label for="position">Position</Label>
                            <Input  
                                id="position" 
                                name="position" 
                                placeholder="Position/Job title" 
                                value={stateValue.position} 
                                onChange={(e) => stateHandler(e.target.value, "position")} 
                            />
                            <div style={{display: positionFormError}} className="form-error">*Position detail is required.</div>
                        </div>
                        <div className="form-element">
                            <div className="start-date">
                                <Label for="job-start">Start Date</Label>
                                <Input  
                                    type="date" 
                                    id="job-start" 
                                    name="job-start" 
                                    value={stateValue.startDate} 
                                    onChange={(e) => stateHandler(e.target.value, "startDate")} 
                                />
                            </div>
                            <div className="end-date">
                                <Label for="job-end">End Date</Label>
                                <Input  
                                    type="date" 
                                    id="job-end" 
                                    name="job-end" 
                                    value={stateValue.endDate} 
                                    onChange={(e) => stateHandler(e.target.value, "endDate")} 
                                />
                            </div>
                        </div>
                        <div className="form-element">
                            <Label for="company-location">Location</Label>
                            <Input 
                                id="company-location" 
                                name="company-location" 
                                placeholder="City or Country" 
                                value={stateValue.location} 
                                onChange={(e) => stateHandler(e.target.value, "location")}
                            />
                        </div>
                        <div className="form-element">
                            <Label for="job-description">Job Description</Label>
                            <Input 
                                id="job-description" 
                                name="job-description" 
                                placeholder="Describe your role and responsibilities." 
                                value={stateValue.description} 
                                onChange={(e) => stateHandler(e.target.value, "description")} 
                            />
                        </div>
                        <div className="form-element">
                            <Button type="submit" className="edu-save" onClick={saveButtonHandler}>Save</Button>
                            <Button type="reset" className="edu-cancel" onClick={cancelButtonHandler}>Cancel</Button>
                        </div>
                    </form>
                ) : (
                    <div className="work-list">
                        {
                            data && data.map(item => {
                                return (
                                    <Button 
                                        key={item.id} 
                                        className="work-item" 
                                        onClick={() => editButtonHandler(item)}
                                    >
                                        {item.company}
                                    </Button>
                                )
                            })
                        }
                        <Button className="work-add" onClick={addButtonHandler}>Add Work Experience</Button>
                    </div>
                )
            }
        </>
    );
}

export default Work;