<script lang="ts">
	import { faTrash, faAdd } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import {  get_resume_index, store } from '$lib/store';
	import { get_resume,  } from '$lib/store';
  import type { Section } from '$lib/utils';
	export let section_index:number;
  $: console.log({section_index})
	// import { quill } from 'svelte-quill';
	import ProfilePicture from './ProfilePicture.svelte';
	let toolbarOptions = [
		['link'],
		['bold', 'italic'],
		[{ list: 'ordered' }, { list: 'bullet' }],
		['clean'],
	];
	let options = {
		modules: {
			toolbar: toolbarOptions,
		},
		placeholder: 'Professional Summary',
	};
	let content = { html: '', text: '' };

	let avatar, fileinput;
	let src = './default-pp.svg';

  let resume = get_resume()
  console.log({resume})
  $: section = resume.sections[section_index]
	$: section_name = section.name;
  console.log({section_name})
  let resume_index = get_resume_index()
</script>

<div>
	<div class="m-5 bg-white rounded-xl border-solid border border-gray-300" id="Education">
		<h2 class="border-b border-solid border-gray-300 px-4 py-3 text-lg font-semibold">
			{section_name}
		</h2>
		<div class="flex flex-col p-5">
			{#each $store[resume_index].sections[section_index].items as { fields, id }}
				{#each Object.entries(fields) as [key,field]}
					{#if field.type === 'image'}
						<label for="" class="text-sm text-gray-700">{field.label}</label>

						<ProfilePicture />
					{:else if field.type === 'text'}
						<div class="form-group flex flex-col gap-1 mb-4">
							<label for="" class="text-sm text-gray-700">{field.label}</label>
							<input
								type="text"
								class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
								placeholder={field.placeholder}
								bind:value={field.value}
                on:keyup = {() =>fields = fields}

							/>
						</div>
					{:else if field.type === 'textarea'}
						<div class="form-group flex flex-col gap-1 mb-4">
							<label for="" class="text-sm text-gray-700">Summary</label>
							<textarea
								id=""
								cols="15"
								rows="4"
								class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
								placeholder={field.label}
								bind:value={field.value}
                on:keyup = {() =>fields = fields}

							/>
						</div>
						<!-- <div class="form-group flex flex-col gap-1 mb-4">
							<label for="" class="text-sm text-gray-700">{field.label}</label>
							<div
								class="editor "
								use:quill={options}
								on:text-change={(e) => (field.value = e.detail.html)}
							/>
						</div> -->
					{/if}
				{/each}
				{#if section.items.length > 1}
					<button
						on:click={() => store.remove_section_item(section.id, id)}
						class=" mb-2 flex justify-center items-center gap-2 py-1 px-4 rounded-full text-red-700 border border-solid border-red-700 rb-button hover:text-white hover:bg-red-700 transition"
					>
						<Fa icon={faTrash} class=" text-red-700 " />Remove {section_name}</button
					>
				{/if}
			{/each}
			{#if section.max.toLowerCase() !== 'one'}
				<button
					class=" flex justify-center items-center gap-2 py-1 px-4 rounded-full text-blue-700 border border-solid border-blue-700 rb-button hover:text-white hover:bg-blue-700 transition"
					on:click={() => store.add_section_item(section.id)}
				>
					<Fa icon={faAdd} class="focus:text-blue-700  text-blue-700 " />Add {section_name}</button
				>
			{/if}
		</div>
	</div>
</div>
