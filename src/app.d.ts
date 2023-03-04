
export interface section<type, item> {
	id: string;
	name: string;
	type: type;
	items: item[];
	visible: true;
}
export interface EducationItem {
	institution: string;
	degree: string;
	area: string;
	grade: string;
	start_date: string;
	end_date: string;
	url: string;
	summary: string;
	id: string;
}
export type Education = section<'education', EducationItem>;

export interface ExperienceItem {
	id: string;
	url: string;
	start_date: string;
	end_date: string;
	name: string;
	summary: string;
	position: string;
}

export type Experience = section<'education', EducationItem>;
export interface SkillItem {
	name: string;
	id: string;
}

export type Skill = section<'skill', SkillItem>;
export interface SocialProfileItem {
  network: string;
  username: string;
  url: string;
  id: string;
}
export type SocialProfile = section<'profile',SocialProfileItem>
export interface ProjectItem {
	name: string;
	description: string;
	start_date: string;
	end_date: string;
	url: string;
	summary: string;
	id: string;
}
export type Project = section<'project', ProjectItem>;

export interface InterestItem {
	name: string;
	id: string;
}

export type Interest = section<'interest', InterestItem>;
export interface CertificateItem {
	name: string;
	issuer: string;
	date: string;
	url: string;
	summary: string;
	id: string;
}

interface Resume {
	id: number;
	name: string;
	settings: {
		font: string;
	};
	sections: {
		basics: {
			name: string;
			email: string;
			phone: string;
			photo: {
				url: string;
				shape: 'circle' | 'rectangle';
			};
			summary: string;
			headline: string;
			location: {
				city: string;
				region: string;
				address: string;
				country: string;
				postalCode: string;
			},
		};

    social_profile: SocialProfile,
		experience: Experience;
		skills: Skill;
		projects: Project;
		education: Education;
		interests: Interest;
		certifications: Certificate;
	};
}
