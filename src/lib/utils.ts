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

import Email from 'svelte-material-icons/Email.svelte';
import Phone from 'svelte-material-icons/Phone.svelte';
import MapMarker from 'svelte-material-icons/MapMarker.svelte';
import Facebook from 'svelte-material-icons/Facebook.svelte';

import Twitter from 'svelte-material-icons/Twitter.svelte';
import Google from 'svelte-material-icons/Google.svelte';
import Linkedin from 'svelte-material-icons/Linkedin.svelte';

import Youtube from 'svelte-material-icons/Youtube.svelte';
import Account from 'svelte-material-icons/Account.svelte';
import CertificateOutline from 'svelte-material-icons/CertificateOutline.svelte';
import School from 'svelte-material-icons/School.svelte';
import Briefcase from 'svelte-material-icons/Briefcase.svelte';
import Cellphone from 'svelte-material-icons/Cellphone.svelte';
import Lighblub from 'svelte-material-icons/Lightbulb.svelte';
import FolderStar from 'svelte-material-icons/FolderStar.svelte';

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
			degree: cf('Degree'),
			institution: cf('Institution'),
			//area: cf('Area of Study'),
			start_date: cf('Start Date'),
			end_date: cf('End Date'),
			grade: cf('Grade'),
			url: cf('URL'),
			summary: cf('Summary', 'Summary', 'textarea'),
		},
		visible: Boolean(true),
	};
};
export type EducationItem = ReturnType<typeof get_blank_education>;

const get_blank_experience = () => {
	return {
		id: get_unique_id(),
		fields: {
			job_title: cf('Job Title'),
			cname: cf('Company Name'),
			start_date: cf('Start Date'),
			end_date: cf('End Date'),
			url: cf('URL'),
			summary: cf('Summary', 'Summary', 'textarea'),
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
			issuer: cf('Issuer'),
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
			network: cf('Network', 'Network', 'dropdown'),
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

export const templates = ['Classic', 'Modern'];
export const themes = {
	Classic: {
		header: '#20232A',
		subheader: '#1d1d1d',
		content: '#828385',
		pills: '#20232A',
		link: '#427fed',
	},
	Elegant: {
		header: '#2E77A1',
		subheader: '#6C8FA3',
		content: '#333333',
		pills: '#2E77A1',
		link: '#FF7043',
	},
	Modern: {
		header: '#8b5cf6',
		subheader: '#4b5563',
		content: '#4b5563',
		pills: '#8b5cf6',
		link: '#8b5cf6',
	},
};
export const get_blank_resume = (resume_name) => {
	return {
		id: get_unique_id(),
		name: resume_name || 'untitled',
		settings: {
			font: 'inter',
			theme: 'Hyper Orange',
			template: 'Classic',
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

const social_icon = {
	facebook: Facebook,
	google: Google,
	linkedin: Linkedin,
	twitter: Twitter,
	youtube: Youtube,
	email: Email,
	phone: Phone,
	location: MapMarker,
	basic: Account,
	experience: Briefcase,
	certificates: CertificateOutline,
	education: School,
	'social profile': Cellphone,
	skills: Lighblub,
	projects: FolderStar,
};
export const get_social_icon = (name: keyof typeof social_icon) => {
	return social_icon[name];
};
/**
 * any value is empty then it returns true
 */
export const empty = (value) => {
	return !(value && value !== '');
};
export const ae = (...values) => {
	console.log('ae called', values);
	return !values.reduce((prev, next) => {
		return prev && next && next !== '';
	}, true);
};
export const is_value_in_arr = (items: any[]) => {
	console.log({ items_in_arr: items });
	return items.some((item) => {
		return is_value_in_obj(item);
	});
};
export const generate_url = (url: string) => {
	if (url.startsWith('http')) {
		return url;
	}
	return `https://${url}`;
};

export const is_value_in_obj = (obj: Record<string, any>) => {
	for (const key in obj) {
		if (!empty(obj[key])) {
			return true;
		}
	}
	return false;
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
