import {  get_ls_resume, update_ls_resume } from '$lib/utils';
import { resume } from "$lib/store";

export const prerender = true;
export const ssr = false;
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	console.log('load called', { params });
	const id = Number(params.id);
	const resume_data = get_ls_resume(id);	
  console.log({"resume_with_id": resume_data})
	resume.set(resume_data);
}
