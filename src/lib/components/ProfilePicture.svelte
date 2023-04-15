<script>
	import { get_profile, imageCropWindowDisplay, profile_store, resume_id } from '$lib/store';
	import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
  	import Delete from 'svelte-material-icons/Delete.svelte';

	let src = './default-pp.svg';
  let isRound = true
  let profileAdded = false
  profile_store.subscribe((value) => {
    const profile = value[get(resume_id)]
		src = profile?.image || './default-pp.svg';
    isRound = profile?.type ==='round' 
    profileAdded = profile?.image ? true : false
	});
	let avatar, fileinput;
	let image;
	import MyWindowComponent from './MyWindowComponent.svelte';
	import { get } from 'svelte/store';
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
		class=" flex {isRound?'rounded-full':'rounded-lg'} border border-solid border-gray-400  h-full w-full cursor-pointer text-4xl  active:shadow-lg"
		on:click={() => {
			fileinput.click();
		}}
	>
		<img class="upload w-full h-full {isRound?'rounded-full':''}"   {src} alt="Profile Picture" />
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
<div class="flex w-5/12" class:hidden={!profileAdded}>
	<button
		class="px-8 bg-blue-700 text-white rounded-md h-10 flex items-center gap-2 font-normal transition hover:bg-blue-600"
		on:click={async () => {
			profile_store.addImage({ image: undefined });
      isRound = false
		}}
	>
  <!-- <Delete></Delete> -->
		Reset
	</button>
</div>
