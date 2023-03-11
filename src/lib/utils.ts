
import { browser } from '$app/environment';

import {
	faBook,
	faExpand,
	faFaceAngry,
	faWalkieTalkie,
	faWorm,
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

export type CertificateItem = ReturnType<typeof get_blank_certificate>

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
const blankBasic = {
	id: get_unique_id(),
	fields: {},
};
const get_min_data = (name: string) => {
	return {
		name,
		type: name,
		id: name,
		visible: true,
	};
};
export const get_blank_resume = () => {
	return {
		id: get_unique_id(),
		name: 'untitled',
		settings: {
			font: 'Dosis',
		},
		sections: [
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
				...get_min_data('Certificate'),
				items: [get_blank_certificate()],
			},
		],
	};
};
export type Resume = ReturnType<typeof get_blank_resume>;

export const get_icon_from_section_type = (type: sectionType) => {
	return {
		experience: faExpand,
		education: faBook,
		projects: faWorm,
		certificate: faWalkieTalkie,
		'social profile': faFaceAngry,
	}[type.toLowerCase()];
};

export const get_ls_resume = (id: number): Resume | undefined => {
	const resume_data = get_all_resume_arr();
	console.log({ all_reusme: resume_data, id });
	const resume = resume_data.find((item) => item.id === id);
	return resume;
};


export const get_all_resume_arr = (): Resume[] => {
	let resume_data = [];
	if (browser) {
		const data = localStorage.getItem('all_resume');
		if (!data) {
			localStorage.setItem('all_resume', JSON.stringify([]));
		} else {
			resume_data = JSON.parse(data);
		}
	}
	return resume_data;
};

export const get_blank_section_item = (type: sectionType) => {
	const item: Record<sectionType, Record<string, any>> = {
		education: get_blank_education(),
		experience: get_blank_certificate(),
		skills: get_blank_skill(),
		projects: get_blank_project(),
		'social profile': get_blank_social_profile(),
		basics: {},
		custom_info: {},
		custom_pills: {},
		certificates: get_blank_certificate(),
		interests: {},
	};
	const sectionItem = item[type.toLowerCase()];
	sectionItem.id = get_unique_id();
	return { ...sectionItem };
};

