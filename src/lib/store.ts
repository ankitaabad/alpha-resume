import { writable } from 'svelte/store';
// import type { Resume } from '../app';
import { update_ls_resume, type Resume } from './utils';
export const resume = writable<Resume>();
export const all_resume = writable<Resume[]>();
let initial = true;

resume.subscribe((value) => {
	console.log('subscribe called');
	if (initial) {
		initial = false;
		return;
	}
	update_ls_resume(value);
});
