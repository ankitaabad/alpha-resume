<script>
	import { store } from '$lib/store';
</script>

<div>
	<div class="popup-header border-b border-solid border-gray-200 pt-1 pb-5 font-medium text-lg">
		Create a new resume
	</div>
	<div class="popup-body py-6">
		<div class="form-group flex flex-col gap-2">
			<label class="text-sm text-gray-700" for=""
				>Start building your resume by giving it a name. It could be in reference to the role you
				are applying for, or just your favorite snack.</label
			>
			<input class="border border-solid border-gray-400 rounded-md py-2 px-4" type="text" />
		</div>
	</div>
	<div class="popup-footer border-t border-solid border-gray-200 pt-5 pb-1 flex justify-end">
		<a
			on:click={() => store.add_resume()}
			class=" bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer"
			>Create Resume</a
		>
	</div>
</div>
