import { ReactElement, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Label, Input, Button } from "..";
import { WorkExperienceFormData } from "../../interfaces";
import { errorDisplay } from "../../types";

function Work(): ReactElement {
    const [editMode, setEditMode] = useState(false);
    const [companyFormError, setCompanyFormError] = useState<errorDisplay>(errorDisplay.none);
    const [positionFormError, setPositionFormError] = useState<errorDisplay>(errorDisplay.none);
    const [data, setData] = useState<WorkExperienceFormData[]>([]);
    const [formData, setFormData] = useState<WorkExperienceFormData>({
        id: "",
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description: ""
    });

    const saveButtonHandler = () => {}
    const cancelButtonHandler = () => {}
    const addButtonHandler = (item: WorkExperienceFormData) => {}

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
                                value={formData.company} 
                                onChange={(e) => setFormData({...formData, company: e.target.value})} 
                            />
                            <div style={{display: companyFormError}} className="form-error">*Company name is required.</div>
                        </div>
                        <div className="form-element">
                            <Label for="position">Position</Label>
                            <Input  
                                id="position" 
                                name="position" 
                                placeholder="Position/Job title" 
                                value={formData.position} 
                                onChange={(e) => setFormData({...formData, position: e.target.value})} 
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
                                    value={formData.startDate} 
                                    onChange={(e) => setFormData({...formData, startDate: e.target.value})} 
                                />
                            </div>
                            <div className="end-date">
                                <Label for="job-end">End Date</Label>
                                <Input  
                                    type="date" 
                                    id="job-end" 
                                    name="job-end" 
                                    value={formData.endDate} 
                                    onChange={(e) => setFormData({...formData, endDate: e.target.value})} 
                                />
                            </div>
                        </div>
                        <div className="form-element">
                            <Label for="company-location">Location</Label>
                            <Input 
                                id="company-location" 
                                name="company-location" 
                                placeholder="City or Country" 
                                value={formData.location} 
                                onChange={(e) => setFormData({...formData, location: e.target.value})}
                            />
                        </div>
                        <div className="form-element">
                            <Label for="job-description">Job Description</Label>
                            <Input 
                                id="job-description" 
                                name="job-description" 
                                placeholder="Describe your role and responsibilities." 
                                value={formData.description} 
                                onChange={(e) => setFormData({...formData, description: e.target.value})} 
                            />
                        </div>
                        <div className="form-element">
                            <Button type="submit" className="edu-save" >Save</Button>
                            <Button type="reset" className="edu-cancel" >Cancel</Button>
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
                                        onClick={() => addButtonHandler(item)}
                                    >
                                        {item.company}
                                    </Button>
                                )
                            })
                        }
                        <Button className="work-add">Add Work Experience</Button>
                    </div>
                )
            }
        </>
    );
}

export default Work;