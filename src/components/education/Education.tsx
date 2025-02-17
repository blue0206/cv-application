import React, { ReactElement, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Label, Input, Button } from "..";
import { EducationFormData } from "../../interfaces";

function Education(): ReactElement {
    const [editMode, setEditMode] = useState(false);
    const [data, setData] = useState<EducationFormData[]>([]);
    const [formData, setFormData] = useState<EducationFormData>({
        id: "",
        schoolName: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: ""
    });

    const saveButtonHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if (!formData.id) {
            const newFormData: EducationFormData = {
                id: uuidv4(),
                schoolName: formData.schoolName,
                degree: formData.degree,
                startDate: formData.startDate,
                endDate: formData.endDate,
                location: formData.location
            };
    
            setData([...data, newFormData]);
        } else {
            setData(data.map(item => item.id === formData.id ? formData : item));
        }

        setFormData({
            id: "",
            schoolName: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: ""
        });
        setEditMode(false);
    }

    const cancelButtonHandler = (e:  React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setEditMode(false);
        setFormData({
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
        setFormData(currentData);
        setEditMode(true);
    }

    return (
        <>
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
                                value={formData.schoolName} 
                                onChange={(e) => setFormData({...formData, schoolName: e.target.value})} 
                            />
                        </div>
                        <div className="form-element">
                            <Label for="degree">Degree</Label>
                            <Input 
                                id="degree" 
                                name="degree" 
                                placeholder="Degree / Study field" 
                                value={formData.degree} 
                                onChange={(e) => setFormData({...formData, degree: e.target.value})}
                            />
                        </div>
                        <div className="form-element dates">
                            <div className="start-date">
                                <Label for="school-start">Start Date</Label>
                                <Input 
                                    type="date" 
                                    id="school-start" 
                                    name="school-start" 
                                    value={formData.startDate} 
                                    onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                                />
                            </div>
                            <div className="end-date">
                                <Label for="school-end">End Date</Label>
                                <Input 
                                    type="date" 
                                    id="school-end" 
                                    name="school-end" 
                                    value={formData.endDate} 
                                    onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="form-element">
                            <Label for="school-location">Location</Label>
                            <Input 
                                id="school-location" 
                                name="school-location" 
                                placeholder="School / University location" 
                                value={formData.location} 
                                onChange={(e) => setFormData({...formData, location: e.target.value})} 
                            />
                        </div>
                        <div className="form-element">
                            <Button type="submit" children="Save" className="edu-save" onClick={saveButtonHandler} />
                            <Button type="reset" children="Cancel" className="edu-cancel" onClick={cancelButtonHandler} />
                        </div>
                    </form>
                ) : (
                    <div className="edu-list">
                        {
                            data && data.map(item => {
                                return (
                                    <Button 
                                        key={item.schoolName + item.degree} 
                                        type="button" 
                                        className="edu-item" 
                                        onClick={() => editButtonHandler(item)} 
                                    >
                                        {item.schoolName}
                                    </Button>
                                )
                            })
                        }
                        <Button type="button" children="Add" className="edu-add" onClick={addButtonHandler} />
                    </div>
                )
                
            }
        </>
    );
}

export default Education;