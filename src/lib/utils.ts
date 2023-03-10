// import type {
// 	EducationItem,
// 	ExperienceItem,
// 	ProjectItem,
// 	Resume,
// 	sectionType,
// 	SkillItem,
// } from '../app';
import { all_resume, resume } from './store';
import { browser } from '$app/environment';

import {
	faBook,
	faEarth,
	faExpand,
	faFaceAngry,
	faWalkieTalkie,
	faWorm,
} from '@fortawesome/free-solid-svg-icons';

/**
 *
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
const blankEducation = {
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
export type EducationItem = typeof blankEducation;
const blankExperience = {
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
export type ExperienceItem = typeof blankExperience;
const blankSkill = {
	id: get_unique_id(),
	fields: {
		name: cf('Name'),
	},
	visible: Boolean(true),
};
export type SkillItem = typeof blankSkill;

const blankProject = {
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

const blankCertificate = {
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

const blankSocialProfile = {
	id: get_unique_id(),
	fields: {
		network: cf('Network'),
		username: cf('Username'),
		url: cf('URL'),
	},
	visible: Boolean(true),
};
const blankBasic = {
	id: get_unique_id(),
	fields: {},
};
export type ProjectItem = typeof blankProject;
const get_min_data = (name: string) => {
	return {
		name,
		type: name,
		id: name,
		visible: true,
	};
};
export const blank_resume = {
	id: get_unique_id(),
	name: 'untitled',
	settings: {
		font: 'Dosis',
	},
	sections: [
		{ ...get_min_data('Social Profile'), items: [blankSocialProfile] },
		{
			...get_min_data('Experience'),
			items: [blankExperience],
		},
		{
			...get_min_data('Education'),
			items: [blankEducation],
		},
		{
			...get_min_data('Projects'),
			items: [blankProject],
		},
		{
			...get_min_data('Certificate'),
			items: [blankCertificate],
		},
	],
};
export type Resume = typeof blank_resume;

export const get_icon_from_section_type = (type: sectionType) => {
	return {
		experience: faExpand,
		education: faBook,
		projects: faWorm,
		certificate: faWalkieTalkie,
		'social profile': faFaceAngry,
	}[type.toLowerCase()];
};
export const add_blank_resume = (): Resume => {
	const resume_data = get_all_resume_arr();
	resume_data.push(blank_resume);
	update_all_resume(resume_data);
	return blank_resume;
};

export const update_ls_resume = (resume: Resume) => {
	console.log('Update ls resume', { resume });
	if (!resume) {
		return;
	}
	if (browser) {
		const data = localStorage.getItem('all_resume');
		let resume_data: Resume[] = [];
		if (!data) {
			localStorage.setItem('all_resume', JSON.stringify({}));
			resume_data = [];
		} else {
			resume_data = JSON.parse(data);
		}
		console.log({ resume_data });
		const index = resume_data.findIndex((item) => item.id === resume.id);

		resume_data[index] = resume;
		update_all_resume(resume_data);
	}
};

export const update_all_resume = (data: Resume[]) => {
	localStorage.setItem('all_resume', JSON.stringify(data));
	all_resume.update(() => {
		return data;
	});
};
export const get_ls_resume = (id: number): Resume | undefined => {
	const resume_data = get_all_resume_arr();
	console.log({ all_reusme: resume_data, id });
	const resume = resume_data.find((item) => item.id === id);
	return resume;
};

export const remove_resume_from_ls = (id: number) => {
	console.log('removing resume from arr', id);
	if (browser) {
		let resume_data = get_all_resume_arr();
		resume_data = resume_data.filter((resume) => resume.id !== id);
		console.log({ resume_data });
		update_all_resume(resume_data);
	}
};
export const get_all_resume_arr = (): Resume[] => {
	let resume_data = [];
	if (browser) {
		const data = localStorage.getItem('all_resume');
		if (!data) {
			localStorage.setItem('all_resume', JSON.stringify([]));
			resume_data = [];
		} else {
			resume_data = JSON.parse(data);
		}
	}
	return resume_data;
};

export const removeItem = (section_id, item_id) => {
	console.log({ section_id, item_id });
	resume.update((val) => {
		const section_to_delete = val.sections.find((section) => section.id === section_id);
		console.log({ section_to_delete });
		section_to_delete.items = section_to_delete?.items.filter((item) => item.id != item_id);

		return val;
	});
};

export const get_blank_section_item = (type: sectionType) => {
	const item: Record<sectionType, Record<string, any>> = {
		education: blankEducation,
		experience: blankExperience,
		skills: blankSkill,
		projects: blankProject,
		'social profile': blankSocialProfile,
		basics: {},
		custom_info: {},
		custom_pills: {},
		certificates: {},
		interests: {},
	};
	const sectionItem = item[type.toLowerCase()];
	sectionItem.id = get_unique_id();
	return sectionItem;
};


// export const getComponent = (type: sectionType) => {
// 	return {
// 		experience: Experience,
// 		education: Education,
// 	}[type];
// };

// resume.update(() => {
// 	return blank_resume;
// });
