export interface GeneralInfoFormData {
    fullname: string;
    email: string;
    phone: string;
    location: string;
}

export interface EducationFormData {
    id: string;
    schoolName: string;
    degree: string;
    startDate?: string;
    endDate?: string;
    location?: string;
}

export interface WorkExperienceFormData {
    id: string;
    company: string;
    position: string;
    startDate?: string;
    endDate?: string;
    location?: string;
    description?: string;
}