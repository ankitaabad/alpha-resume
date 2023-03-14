import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { get, writable } from 'svelte/store';
import {
	get_all_profiles,
	get_all_resume_arr,
	get_blank_resume,
	get_blank_section_item,
	get_resume,
	type Section,
} from './utils';
export const resume_id = writable(0);

export type Profile = {
	image: string;
	type: 'round' | 'rect';
};

function create_profile_store() {
	const profiles = get_all_profiles();
	const { subscribe, update } = writable(profiles);
	const addImage = (profile: Profile) => {
		update((store) => {
			store[get(resume_id)] = profile;
			return store;
		});
	};
  
	return {
		subscribe,
		addImage,
	};
}

function create_all_resume() {
	const resumes = get_all_resume_arr();
	const { subscribe, update } = writable(resumes);

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
		resume_id.set(blank_resume.id);
		goto('/resume');
	};

	const edit_resume = (id) => {
		console.log('editing resume');
		resume_id.set(id);
		goto('/resume');
	};

	return {
		subscribe,
		add_section_item,
		remove_section_item,
		update_section_item,
		add_resume,
		delete_resume,
		edit_resume,
	};
}

export const store = create_all_resume();
export const profile_store = create_profile_store();
export const imageCropWindowDisplay = writable(false);
store.subscribe((data) => {
	if (browser) {
		localStorage.setItem('all_resume', JSON.stringify(data));
	}
});

profile_store.subscribe((data) => {
	if (browser) {
		localStorage.setItem('all_profiles', JSON.stringify(data));
	}
});
