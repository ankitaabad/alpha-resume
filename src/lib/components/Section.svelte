<script lang="ts">
	import { get_blank_section_item, type Field, type Section } from '$lib/utils';
	import { faTrash, faAdd } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import {  removeItem } from '$lib/utils';
	// console.log({ resume: $resume });

	export let section: Section<any>;

	export const addItem = () => {
		const item_to_add = get_blank_section_item(section?.type);
    console.log([...section.items,item_to_add])
    section.items = [...section.items,item_to_add]
    console.log(section.items)
	};
	console.log({ section });
</script>

<div>
	<div class="m-5 bg-white rounded-xl border-solid border border-gray-300" id="Education">
		<h2 class="border-b border-solid border-gray-300 px-4 py-3 text-lg font-semibold">
			{section.name}
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
					on:click={() => removeItem(section.id, id)}
					{id}
					class=" mb-2 flex justify-center items-center gap-2 py-1 px-4 rounded-full text-red-700 border border-solid border-red-700 rb-button hover:text-white hover:bg-red-700 transition"
				>
					<Fa icon={faTrash} class=" text-red-700 " />Remove Education</button
				>
				<!-- {/if} -->
			{/each}

			<button
				class=" flex justify-center items-center gap-2 py-1 px-4 rounded-full text-blue-700 border border-solid border-blue-700 rb-button hover:text-white hover:bg-blue-700 transition"
				on:click={() => addItem()}
			>
				<Fa icon={faAdd} class="focus:text-blue-700  text-blue-700 " />Add Education</button
			>
		</div>
	</div>
</div>
