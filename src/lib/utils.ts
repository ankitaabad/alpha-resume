// import { browser } from '$app/environment';

import {
	faBook,
	faExpand,
	faF,
	faFaceAngry,
	faFaceGrinSquint,
	faL,
	faLink,
	faLocation,
	faPhone,
	faWalkieTalkie,
	faWorm,
	faUser,
} from '@fortawesome/free-solid-svg-icons';

/**
 * create field
 */
export const cf = (label: string, placeholder = '', type = 'text', validation = undefined) => {
	placeholder = placeholder.length === 0 ? label : placeholder;
	return {
		label,
		placeholder,
		type,
		validation,
		value: '',
	};
};

export type sectionType =
	| 'education'
	| 'experience'
	| 'skills'
	| 'projects'
	| 'interests'
	| 'certificates'
	| 'location'
	| 'basics'
	| 'custom_pills'
	| 'custom_info'
	| 'social profile';
export type item = {
	id: string;
	fields: Field[];
};
export interface Section<sType> {
	id: string;
	name: string;
	type: sType;
	items: item[];
	visible: boolean;
	max_length: 'one' | 'many';
}
export type Field = ReturnType<typeof cf>;
const get_unique_id = () => {
	return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
};
const get_blank_education = () => {
	return {
		id: get_unique_id(),
		fields: {
			area: cf('Area'),
			degree: cf('Degree'),
			institution: cf('Institution'),
			start_date: cf('Start Date'),
			end_date: cf('End Date'),
			grade: cf('End Date'),
			summary: cf('Summary', 'Summary', 'textarea'),
			url: cf('URL'),
		},
		visible: Boolean(true),
	};
};
export type EducationItem = ReturnType<typeof get_blank_education>;
const get_blank_experience = () => {
	return {
		id: get_unique_id(),
		fields: {
			name: cf('Name'),
			position: cf('Position'),
			start_date: cf('Start Date'),
			end_date: cf('End Date'),
			summary: cf('Summary', 'Summary', 'textarea'),
			url: cf('URL'),
		},
		visible: Boolean(true),
	};
};
export type ExperienceItem = ReturnType<typeof get_blank_experience>;
const get_blank_skill = () => {
	return {
		id: get_unique_id(),
		fields: {
			name: cf('Name'),
		},
		visible: Boolean(true),
	};
};
export type SkillItem = ReturnType<typeof get_blank_skill>;

const get_blank_project = () => {
	return {
		id: get_unique_id(),
		fields: {
			name: cf('Name'),
			description: cf('Description'),
			start_date: cf('Start Date'),
			end_date: cf('End Date'),
			url: cf('URL'),
			summary: cf('Summary', 'Summary', 'textarea'),
		},
		visisble: Boolean(true),
	};
};
export type ProjectItem = ReturnType<typeof get_blank_project>;

export const get_blank_certificate = () => {
	return {
		id: get_unique_id(),
		fields: {
			name: cf('Name'),
			issuer: cf('issuer'),
			date: cf('Date'),
			url: cf('URL'),
			summary: cf('Summary', 'Summary', 'textarea'),
		},
		visisble: Boolean(true),
	};
};

export type CertificateItem = ReturnType<typeof get_blank_certificate>;

const get_blank_social_profile = () => {
	return {
		id: get_unique_id(),
		fields: {
			network: cf('Network'),
			username: cf('Username'),
			url: cf('URL'),
		},
		visible: Boolean(true),
	};
};
export type SocialProfileItem = ReturnType<typeof get_blank_social_profile>;

const get_blank_basic = () => {
	return {
		id: get_unique_id(),
		fields: {
			photo: cf('Profile Picture', 'Image', 'image'),
			name: cf('Name'),
			designation: cf('Designation'),
			email: cf('Email'),
			phone: cf('Phone'),
			location: cf('Location'),
			summary: cf('Summary', 'Summary', 'textarea'),
		},
		visible: Boolean(true),
	};
};
export type BasicItem = ReturnType<typeof get_blank_basic>;

export const get_blank_location = () => {
	return {
		id: get_unique_id(),
		fields: {
			city: cf('City'),
			region: cf('Region'),
			address: cf('Address'),
			country: cf('Country'),
			postalCode: cf('Postal Code'),
		},
	};
};
export type LocationItem = ReturnType<typeof get_blank_location>;

const get_min_data = (name: string, max = 'Many') => {
	return {
		name,
		type: name,
		id: name,
		visible: true,
		max,
	};
};
export const get_blank_resume = () => {
	return {
		id: get_unique_id(),
		name: 'untitled',
		settings: {
			font: 'inter',
		},
		sections: [
			{ ...get_min_data('Basic', 'One'), items: [get_blank_basic()] },
			// {...get_min_data('Location','One'),items: [get_blank_location()]},
			{ ...get_min_data('Social Profile'), items: [get_blank_social_profile()] },
			{
				...get_min_data('Experience'),
				items: [get_blank_experience()],
			},
			{
				...get_min_data('Education'),
				items: [get_blank_education()],
			},
			{
				...get_min_data('Projects'),
				items: [get_blank_project()],
			},
			{
				...get_min_data('Certificates'),
				items: [get_blank_certificate()],
			},
			{ ...get_min_data('Skills'), items: [get_blank_skill()] },
		],
	};
};
export type Resume = ReturnType<typeof get_blank_resume>;

export const get_icon_from_section_type = (type: sectionType) => {
	return (
		{
			basic: faUser,
			experience: faExpand,
			education: faBook,
			projects: faWorm,
			certificate: faWalkieTalkie,
			'social profile': faFaceAngry,
			location: faLocation,
		}[type.toLowerCase()] || faFaceGrinSquint
	);
};

export const get_blank_section_item = (type: sectionType) => {
	const item: Record<sectionType, Record<string, any>> = {
		education: get_blank_education(),
		experience: get_blank_experience(),
		skills: get_blank_skill(),
		projects: get_blank_project(),
		'social profile': get_blank_social_profile(),
		basics: get_blank_basic(),
		// location: get_blank_location(),
		certificates: get_blank_certificate(),
		custom_info: {},
		custom_pills: {},
		interests: {},
	};
	const sectionItem = item[type.toLowerCase()];
	sectionItem.id = get_unique_id();
	return { ...sectionItem };
};

export const social_icon = {
	facebook: faF,
	linkedin: faLink,
	email: faLink,
	phone: faPhone,
};

// export const get_resume_data_for_preview() => {
//   const resume = get_resume();
//   const result = {}
//   resume.sections.forEach(section => {
//     if(section.type === "custom") {

//     }else {
//       result[section.type] = section.items.map(item => {
//         const data = {}
//         Object.values(item.fields).forEach(k=> {
//           data[k.label] = k.value
//         })
//       })
//     }
//   })
// }
