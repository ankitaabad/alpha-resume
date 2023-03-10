
import {get_all_resume_arr} from '$lib/utils'
import {all_resume} from "$lib/store"
export const prerender = true;
export const ssr = false;
/** @type {import('./$types').PageLoad} */
export function load() {
	const data = get_all_resume_arr()
	console.log({ "all_resume" : data });
	all_resume.set(data)
}
