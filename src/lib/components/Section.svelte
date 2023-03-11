<script lang="ts">
	import { faTrash, faAdd } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { store } from '$lib/store';
	import type { Section } from '$lib/utils';
	export let section_index: number;
	export let section: Section<any>;
	let resume_index = store.get_resume_index();
	let section_name = section.name;
</script>

<div>
	<div class="m-5 bg-white rounded-xl border-solid border border-gray-300" id="Education">
		<h2 class="border-b border-solid border-gray-300 px-4 py-3 text-lg font-semibold">
			{section_name}
		</h2>
		<div class="flex flex-col p-5">
			{#each section.items as { fields, id }}
				{#each Object.values(fields) as field}
					{#if field.type === 'text'}
						<div class="form-group flex flex-col gap-1 mb-4">
							<label for="" class="text-sm text-gray-700">{field.label}</label>
							<input
								type="text"
								class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
								placeholder={field.placeholder}
								bind:value={field.value}
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
							/>
						</div>
					{/if}
				{/each}
				<!-- {#if $resume.educations.length > 0}  -->
				<button
					on:click={() => store.remove_section_item(section.id,id)}
					class=" mb-2 flex justify-center items-center gap-2 py-1 px-4 rounded-full text-red-700 border border-solid border-red-700 rb-button hover:text-white hover:bg-red-700 transition"
				>
					<Fa icon={faTrash} class=" text-red-700 " />Remove {section_name}</button
				>
				<!-- {/if} -->
			{/each}

			<button
				class=" flex justify-center items-center gap-2 py-1 px-4 rounded-full text-blue-700 border border-solid border-blue-700 rb-button hover:text-white hover:bg-blue-700 transition"
				on:click={() => store.add_section_item(section.id)}
			>
				<Fa icon={faAdd} class="focus:text-blue-700  text-blue-700 " />Add {section_name}</button
			>
		</div>
	</div>
</div>
