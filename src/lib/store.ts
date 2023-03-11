import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { get, writable } from 'svelte/store';
import {
	get_all_resume_arr,
	get_blank_resume,
	get_blank_section_item,
	type Resume,
	type Section,
} from './utils';
export const resume_id = writable(0);

function create_all_resume() {
	const resumes = get_all_resume_arr();
	const { subscribe, set, update } = writable(resumes);

	const add_section_item = (section_id) => {
		update((ar) => {
			const rid = get(resume_id);
			const resume = get_resume();
			const section = resume.sections.find((section) => section.id === section_id);
			const blank_item = get_blank_section_item(section.type);
			section.items.push(blank_item);
			ar[rid] = resume;
			return ar;
		});
	};
	const get_resume = () => {
		const rid = get(resume_id);
		return get(store).find((resume) => resume.id === rid) as Resume;
	};
	const no_of_sections = (): number => {
		return get_resume().sections.length;
	};

	const no_of_resumes = (): number => {
		return get(store).length;
	};
	const remove_section_item = (section_id, item_id) => {
		update((ar) => {
			const rid = get(resume_id);
			const resume = get_resume();
			const section = resume.sections.find((section) => section.id === section_id) as Section<any>;
			section.items = section.items.filter((item) => item.id !== item_id);
			ar[rid] = resume;
			return ar;
		});
	};

	// debounce it
	const update_section_item = (section_index, item_id, item) => {
		update((ar) => {
			const rid = get(resume_id);
			const resume = get_resume();
			const section = resume.sections[section_index];
			const item_index = section.items.findIndex((item) => item.id === item_id);
			section.items[item_index] = item;
			ar[rid] = resume;
			return ar;
		});
	};
	const delete_resume = (resume_id) => {
		update((ar) => {
			const updated_resume_list = ar.filter((resume) => resume.id !== resume_id);
			return updated_resume_list;
		});
	};
	const add_resume = () => {
		console.log('adding resume');
		const blank_resume = get_blank_resume();
		update((ar) => {
			ar.push(blank_resume);
			return ar;
		});
		const path = `/resume/${blank_resume.id}`;
		goto(path);
	};
	const get_resume_index = () => {
		return get(store).findIndex((resume) => resume.id === get(resume_id));
	};

	return {
		subscribe,
		add_section_item,
		remove_section_item,
		update_section_item,
		add_resume,
		delete_resume,
		no_of_resumes,
		no_of_sections,
		get_resume,
		get_resume_index,
	};
}

export const store = create_all_resume();

store.subscribe((data) => {
	if (browser) {
		localStorage.setItem('all_resume', JSON.stringify(data));
	}
});
