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
	const [educationData, setEducationData] = useState<EducationFormData[]>([]);
	const [workData, setWorkData] = useState<WorkExperienceFormData[]>([]);

	// I know I could've handled this like I handled educationData and workData states but
	// I wanted to try this approach using callbacks. It's not the best way to do it though.
	// I did learn some new stuff about typescript and also about the keyof operator which is 
	// really cool!
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
					<General 
						stateValue={generalFormData} 
						stateHandler={(item, key)=>handleGeneralFormData(item, key)} 
					/>
					<Work 
						stateValue={workFormData} 
						stateHandler={(item, key)=>handleWorkFormData(item, key)} 
						dataState={workData}
						setDataState={setWorkData} 
					/>
					<Education 
						stateValue={educationFormData} 
						stateHandler={(item, key)=>handleEducationFormData(item, key)} 
						dataState={educationData} 
						setDataState={setEducationData} 
					/>
				</div>
				<div className="section-preview">
					<Preview 
						generalDetails={generalFormData} 
						educationDetails={educationFormData} 
						workDetails={workFormData} 
						educationDetailsList={educationData}
						workDetailsList={workData} 
					/>
				</div>
			</main>
		</>
    );
}

export default App;
