import { writable } from 'svelte/store';
import type { Resume } from '../app';
export const resume = writable<Resume>();