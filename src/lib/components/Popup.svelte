<script>
	import { add_new_modal, store } from '$lib/store';
	import { onMount } from 'svelte';
	let resume_name = '';
	const add_resume = () => {
		add_new_modal.set(null);
		store.add_resume(resume_name);
	};
	onMount(() => {
		document.querySelector('#create_new_resume_modal')?.focus();
	});
</script>

<div>
	<div class="popup-header border-b border-solid border-gray-200 pt-1 pb-5 font-medium text-lg">
		Create a new resume
	</div>
	<div class="popup-body py-6">
		<div class="form-group flex flex-col gap-2">
			<label class=" text-gray-700 text-sm" for="">Resume Name</label>
			<input
				id="create_new_resume_modal"
				bind:value={resume_name}
				class="border border-solid border-gray-400 rounded-md py-2 px-4"
				type="text"
			/>
		</div>
	</div>
	<div class="popup-footer border-t border-solid border-gray-200 pt-5 pb-1 flex justify-end">
		<a
			on:click={() => add_resume()}
			class=" bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer"
			>Create Resume</a
		>
	</div>
</div>
