import { ReactElement } from "react";
import { EducationFormData, GeneralInfoFormData, WorkExperienceFormData } from "../../interfaces";

type SectionProps = {
    generalDetails: GeneralInfoFormData;
    educationDetails: EducationFormData;
    workDetails: WorkExperienceFormData;
    educationDetailsList: EducationFormData[];
    workDetailsList: WorkExperienceFormData[];
}

function Preview({generalDetails, educationDetails, workDetails, educationDetailsList, workDetailsList}: SectionProps): ReactElement {
    return (
        <div className="preview">
            <header>
                <div className="heading">
                    <h1 className="name">{generalDetails.fullname}</h1>
                </div>
                <div className="personal-details">
                    <div className="phone-detail">{generalDetails.phone}</div>
                    <div className="email-detail">{generalDetails.email}</div>
                    <div className="locationDetail">{generalDetails.location}</div>
                </div>
            </header>
            <main>
                {
                    workDetailsList.length > 0 ? (
                        <section className="work">
                            <h2 className="heading-two">Work Experience</h2>
                            {
                                workDetailsList.map(detail => {
                                    return (
                                        detail.id === workDetails.id ? (
                                            <div className="experience-detail">
                                                <div className="left-detail">
                                                    <div className="company-name">{workDetails.company}</div>
                                                    <div className="position-name">{workDetails.position}</div>
                                                    <div className="position-details">{workDetails.description}</div>
                                                </div>
                                                <div className="right-detail">
                                                    <div className="term">
                                                        <div className="term-start">{workDetails.startDate}</div>
                                                        <div className="term-end">{workDetails.endDate}</div>
                                                    </div>
                                                    <div className="location-detail">{workDetails.location}</div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="experience-detail">
                                                <div className="left-detail">
                                                    <div className="company-name">{detail.company}</div>
                                                    <div className="position-name">{detail.position}</div>
                                                    <div className="position-details">{detail.description}</div>
                                                </div>
                                                <div className="right-detail">
                                                    <div className="term">
                                                        <div className="term-start">{detail.startDate}</div>
                                                        <div className="term-end">{detail.endDate}</div>
                                                    </div>
                                                    <div className="location-detail">{detail.location}</div>
                                                </div>
                                            </div>
                                        )
                                    )
                                })
                            }
                        </section>
                    ) : null
                }
                {
                    educationDetailsList.length > 0 ? (
                        <section className="education">
                            <h2 className="heading-two">Education Details</h2>
                            {
                                educationDetailsList.map(detail => {
                                    return (
                                        detail.id === educationDetails.id ? (
                                            <div className="education-detail">
                                                <div className="left-detail">
                                                    <div className="institute-name">{educationDetails.schoolName}</div>
                                                    <div className="degree-name">{educationDetails.degree}</div>
                                                </div>
                                                <div className="right-detail">
                                                    <div className="term">
                                                        <div className="term-start">{educationDetails.startDate}</div>
                                                        <div className="term-end">{educationDetails.endDate}</div>
                                                    </div>
                                                    <div className="location-detail">{educationDetails.location}</div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="education-detail">
                                                <div className="left-detail">
                                                    <div className="institute-name">{detail.schoolName}</div>
                                                    <div className="degree-name">{detail.degree}</div>
                                                </div>
                                                <div className="right-detail">
                                                    <div className="term">
                                                        <div className="term-start">{detail.startDate}</div>
                                                        <div className="term-end">{detail.endDate}</div>
                                                    </div>
                                                    <div className="location-detail">{detail.location}</div>
                                                </div>
                                            </div>
                                        )
                                    )
                                })
                            }
                            <div>{educationDetails.degree}</div>
                        </section>
                    ) : null
                }
            </main>
        </div>
    );
}

export default Preview;