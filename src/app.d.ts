
// export type sectionType =
// | 'education'
// | 'experience'
// | 'skills'
// | 'projects'
// | 'interests'
// | 'certificates'
// | 'basics'
// | 'custom_pills'
// | 'custom_info';
// export interface section<stype, item> {
// 	id: string;
// 	name: string;
// 	type: sType;
// 	items: item[];
// 	visible: boolean;
// }



// export type Education = section<'education', EducationItem>;

// export type Experience = section<'experience', ExperienceItem>;

// export type Skill = section<'skill', SkillItem>;

// export type SocialProfile = section<'profile',SocialProfileItem>

// export type Project = section<'project', ProjectItem>;


// export type Interest = section<'interest', InterestItem>;
// export interface CertificateItem {
// 	name: string;
// 	issuer: string;
// 	date: string;
// 	url: string;
// 	summary: string;
// 	id: string;
// }

// export interface Resume {
// 	id: number;
// 	name: string;
// 	settings: {
// 		font: string;
// 	};
// 	sections: {
// 		basics: {
// 			name: string;
//       id: "basics",
//       name: "basics",
//       type: "basics"
// 			email: string;
// 			phone: string;
// 			photo: {
// 				url: string;
// 				shape: 'circle' | 'rectangle';
// 			};
// 			summary: string;
// 			headline: string;
// 			location: {
// 				city: string;
// 				region: string;
// 				address: string;
// 				country: string;
// 				postalCode: string;
// 			},
// 		};

//     social_profile: SocialProfile,
// 		experience: Experience;
// 		skills: Skill;
// 		projects: Project;
// 		education: Education;
// 		interests: Interest;
// 		certificates: Certificate;
// 	};
// }
