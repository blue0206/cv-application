import './styles/app.style.css';
import { General, Education, Work, Preview } from './components';
import { EducationFormData, GeneralInfoFormData, WorkExperienceFormData } from './interfaces';
import { useState } from 'react';

function App() {
	const [generalFormData, setGeneralFormData] = useState<GeneralInfoFormData>({
		fullname: "",
		email: "",
		phone: "",
		location: ""
	});
    const [educationFormData, setEducationFormData] = useState<EducationFormData>({
        id: "",
        schoolName: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: ""
    });
    const [workFormData, setWorkFormData] = useState<WorkExperienceFormData>({
        id: "",
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description: ""
    });

	const handleGeneralFormData = (data: string, key: keyof GeneralInfoFormData) => {
        setGeneralFormData({...generalFormData, [key]: data});
    };
    const handleEducationFormData = (data: string | EducationFormData, key?: keyof EducationFormData) => {
        if (typeof data === "string") {
			if (key) setEducationFormData({...educationFormData, [key]: data});
		} 
        else setEducationFormData(data);
    }
    const handleWorkFormData = (data: string | WorkExperienceFormData, key?: keyof WorkExperienceFormData) => {
        if (typeof data === "string") {
			if (key) setWorkFormData({...workFormData, [key]: data});
		}
        else setWorkFormData(data);
    }
    return (
		<>
			<main>
				<div className="section-details">
					<General stateValue={generalFormData} stateHandler={(item, key)=>handleGeneralFormData(item, key)} />
					<Education stateValue={educationFormData} stateHandler={(item, key)=>handleEducationFormData(item, key)} />
					<Work stateValue={workFormData} stateHandler={(item, key)=>handleWorkFormData(item, key)} />
				</div>
				<div className="section-preview">
					<Preview></Preview>
				</div>
			</main>
		</>
    );
}

export default App;
