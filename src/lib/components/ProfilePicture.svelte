<script>
	import { imageCropWindowDisplay, profile_store } from '$lib/store';
	import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	let src = './default-pp.svg';
	let avatar, fileinput;
	let image;
	import MyWindowComponent from './MyWindowComponent.svelte';
	const onFileSelected = (e) => {
		let image1 = e.target.files[0];

		let reader = new FileReader();
		reader.onload = (e) => {
			image = e.target.result;
			$imageCropWindowDisplay = true;
		};
		reader.readAsDataURL(image1);
	};
</script>

{#if $imageCropWindowDisplay}
	<div class="relative">
		<div class="fixed w-1/2 h-1/2 top-32 left-80">
			<MyWindowComponent {image} />
		</div>
	</div>
{/if}
<div class="flex w-5/12">
	<div
		class=" flex items-center justify-center p-5 rounded-lg border border-solid border-gray-400  h-full w-full cursor-pointer text-4xl  active:shadow-lg"
		on:click={() => {
			fileinput.click();
		}}
	>
		<img class="upload w-16" {src} alt="Profile Picture" />
	</div>
	<input
		style="display:none"
		type="file"
		accept=".jpg, .jpeg, .png"
		on:click={(e) => (e.target.value = null)}
		on:change={(e) => onFileSelected(e)}
		bind:this={fileinput}
	/>
</div>
<div class="flex w-5/12">
	<button
		class="px-8 bg-blue-700 text-white rounded-md h-10 flex items-center gap-2 font-normal transition hover:bg-blue-600"
		on:click={async () => {
			profile_store.addImage({ image: undefined });
		}}
	>
		Reset
	</button>
</div>
