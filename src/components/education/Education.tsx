import React, { ReactElement, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Label, Input, Button } from "..";
import { EducationFormData } from "../../interfaces";
import { errorDisplay } from "../../types";

type SectionProps = {
    stateValue: EducationFormData;
    stateHandler: (item: string | EducationFormData, key?: keyof EducationFormData) => void;
    dataState: EducationFormData[];
    setDataState: (data: EducationFormData[]) => void;
}

function Education({stateValue, stateHandler, dataState, setDataState}: SectionProps): ReactElement {
    const [editMode, setEditMode] = useState(false);
    const [schoolFormError, setSchoolFormError] = useState<(errorDisplay)>(errorDisplay.none);
    const [degreeFormError, setDegreeFormError] = useState<(errorDisplay)>(errorDisplay.none);

    const saveButtonHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if (!stateValue.schoolName.trim() || !stateValue.degree.trim()) {
            setSchoolFormError(stateValue.schoolName.trim() ? errorDisplay.none : errorDisplay.block);
            setDegreeFormError(stateValue.degree.trim() ? errorDisplay.none : errorDisplay.block);
            return;
        }
        if (!stateValue.id) {
            const newFormData: EducationFormData = {
                id: uuidv4(),
                schoolName: stateValue.schoolName,
                degree: stateValue.degree,
                startDate: stateValue.startDate,
                endDate: stateValue.endDate,
                location: stateValue.location
            };

            setDataState([...dataState, newFormData]);
        } else {
            setDataState(dataState.map(item => item.id === stateValue.id ? stateValue : item));
        }

        setSchoolFormError(errorDisplay.none);
        setDegreeFormError(errorDisplay.none);
        stateHandler({
            id: "",
            schoolName: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: ""
        });
        setEditMode(false);
    }

    const cancelButtonHandler = (): void => {
        setEditMode(false);
        setSchoolFormError(errorDisplay.none);
        setDegreeFormError(errorDisplay.none);
        stateHandler({
            id: "",
            schoolName: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: ""
        });
    }

    const addButtonHandler = (): void => {
        setEditMode(true);
    }

    const editButtonHandler = (currentData: EducationFormData): void => {
        stateHandler(currentData);
        setEditMode(true);
    }

    return (
        <div className="detail education">
            <h1>Education Details</h1>
            {
                editMode ? (
                    <form>
                        <div className="form-element">
                            <Label for="school">School / University</Label>
                            <Input 
                                id="school" 
                                name="school" 
                                placeholder="School / University name" 
                                value={stateValue.schoolName} 
                                onChange={(e) => stateHandler(e.target.value, "schoolName")} 
                            />
                            <div style={{display: schoolFormError}} className="form-error">*School name is required.</div>
                        </div>
                        <div className="form-element">
                            <Label for="degree">Degree</Label>
                            <Input 
                                id="degree" 
                                name="degree" 
                                placeholder="Degree / Study field" 
                                value={stateValue.degree} 
                                onChange={(e) => stateHandler(e.target.value, "degree")} 
                            />
                            <div style={{display: degreeFormError}} className="form-error">*Degree detail is required.</div>
                        </div>
                        <div className="form-element dates">
                            <div className="start-date">
                                <Label for="school-start">Start Date</Label>
                                <Input 
                                    type="date" 
                                    id="school-start" 
                                    name="school-start" 
                                    value={stateValue.startDate} 
                                    onChange={(e) => stateHandler(e.target.value, "startDate")} 
                                />
                            </div>
                            <div className="end-date">
                                <Label for="school-end">End Date</Label>
                                <Input 
                                    type="date" 
                                    id="school-end" 
                                    name="school-end" 
                                    value={stateValue.endDate}  
                                    onChange={(e) => stateHandler(e.target.value, "endDate")} 
                                />
                            </div>
                        </div>
                        <div className="form-element">
                            <Label for="school-location">Location</Label>
                            <Input 
                                id="school-location" 
                                name="school-location" 
                                placeholder="School / University location" 
                                value={stateValue.location}  
                                onChange={(e) => stateHandler(e.target.value, "location")} 
                            />
                        </div>
                        <div className="form-element">
                            <Button type="submit" className="edu-save" onClick={saveButtonHandler}>Save</Button>
                            <Button type="reset" className="edu-cancel" onClick={cancelButtonHandler}>Cancel</Button>
                        </div>
                    </form>
                ) : (
                    <div className="edu-list">
                        {
                            dataState && dataState.map(item => {
                                return (
                                    <Button 
                                        key={item.id} 
                                        className="edu-item" 
                                        onClick={() => editButtonHandler(item)} 
                                    >
                                        {item.schoolName}
                                    </Button>
                                )
                            })
                        }
                        <Button className="edu-add" onClick={addButtonHandler}>Add Education Details</Button>
                    </div>
                )
            }
        </div>
    );
}

export default Education;