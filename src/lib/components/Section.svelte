<script lang="ts">
	import { faTrash, faAdd } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { get_resume_index, store } from '$lib/store';
	import { get_resume } from '$lib/store';
	import type { Section } from '$lib/utils';
	export let section_index: number;
	$: console.log({ section_index });
	// import { quill } from 'svelte-quill';
	import ProfilePicture from './ProfilePicture.svelte';
	import Delete from 'svelte-material-icons/Delete.svelte';
	import Eye from 'svelte-material-icons/Eye.svelte';
	import ArrowUp from 'svelte-material-icons/ArrowUp.svelte';
	import ArrowDown from 'svelte-material-icons/ArrowDown.svelte';
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

	let resume = get_resume();
	console.log({ resume });
	$: section = resume.sections[section_index];
	$: section_name = section.name;
	console.log({ section_name });
	let resume_index = get_resume_index();
</script>

<div>
	<div class="m-5" id="Education">
		<!-- <h2 class="py-3 text-lg font-semibold ">
			{section_name}
		</h2> -->
		<!-- p-5 bg-white  rounded-lg border-solid border border-gray-300 -->
		<div class="flex flex-col gap-4">
			{#each $store[resume_index].sections[section_index].items as { fields, id }}
				<div class="bg-white rounded-lg border-solid border border-gray-300">
          <div
          class="bg-gray-100 rounded-t-lg flex justify-between items-center border-solid border-b border-gray-300 pl-5 pr-2 h-12 gap-1"
          >
          <div>{section.id}</div>
					{#if section.type!=="Basic"}
							<div class="flex items-center">
								<button
									on:click={() => store.move_section_item(section.id, id,'up')}
									class="flex justify-center items-center rounded-full  h-10 w-10 hover:bg-gray-200 transition "
									class:bg-gray-200={store.get_item_index(section.id,id)==0}
									disabled={store.get_item_index(section.id,id)==0}
													
								>
									<ArrowUp class=" text-gray-700  text-2xl" /></button
								>
								<button
									on:click={() => store.move_section_item(section.id, id,'down')}
									class="flex justify-center items-center rounded-full  h-10 w-10 hover:bg-gray-200 transition  font-bold"
									class:bg-gray-200={store.get_item_index(section.id,id)==section.items.length-1}
									disabled={store.get_item_index(section.id,id)==section.items.length-1}
								>
									<ArrowDown class=" text-gray-700   text-2xl" /></button
								>
								<button	
									class="flex justify-center items-center rounded-full  h-10 w-10 hover:bg-gray-200  transition "
								>
									<Eye class=" text-gray-700  text-xl" /></button
								>
								<button
									on:click={() => store.remove_section_item(section.id, id)}
									class="flex justify-center items-center rounded-full  h-10 w-10 hover:bg-gray-200 transition  "
								>
									<Delete class="text-gray-700  text-xl" /></button
								>
							</div>
              {/if}
						</div>
					<div class="pt-5 px-5 pb-1  ">
						{#each Object.entries(fields) as [key, field]}
							{#if field.type === 'image'}
								<div class="form-group flex flex-col gap-1 mb-4">
									<label for="" class="text-sm text-gray-700">{field.label}</label>

									<ProfilePicture />
								</div>
							{:else if field.type === 'text'}
								<div class="form-group flex flex-col gap-1 mb-4">
									<label for="" class="text-sm text-gray-700">{field.label}</label>
									<input
										type="text"
										class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
										placeholder={field.placeholder}
										bind:value={field.value}
										on:keyup={() => (fields = fields)}
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
										on:keyup={() => (fields = fields)}
									/>
								</div>
								{:else if field.type === 'dropdown'}
								<div class="form-group flex flex-col gap-1 mb-4">
									<label for="" class="text-sm text-gray-700">Network</label>
									<select 
										class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
										placeholder={field.label}
										bind:value={field.value}
										on:keyup={() => (fields = fields)}
										on:change={() => (fields = fields)}
									>
									<option value="" selected disabled>Choose Network</option>
									<option value="linkedin">LinkedIn</option>
  									<option value="google">Google</option>
  									<option value="facebook">Facebook</option>
									</select>
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
					</div>
				</div>
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
