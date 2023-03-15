<script>
	import { imageCropWindowDisplay } from '$lib/store';
	import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	let avatar, fileinput;
  let image
	import MyWindowComponent from './MyWindowComponent.svelte';
	const onFileSelected = (e) => {
    console.log("File selected")
		let image1 = e.target.files[0];

		let reader = new FileReader();
		reader.onload = (e) => {
			image = e.target.result;
      $imageCropWindowDisplay = true;
      console.log({"image crop window":$imageCropWindowDisplay})
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
<div class="form-group flex flex-col gap-1 mb-4 w-5/12">
	<div
		class=" flex items-center justify-center p-5 rounded-lg border border-solid border-gray-400  h-full w-full cursor-pointer text-4xl  active:text-3xl shadow-lg"
		on:click={() => {
			fileinput.click();
		}}
	>	
    <Fa icon={  faArrowUpFromBracket    } class=""/>
	</div>
	<input
		style="display:none"
		type="file"
		accept=".jpg, .jpeg, .png"
    on:click = {(e)=> e.target.value = null}
		on:change={(e) => onFileSelected(e)}
		bind:this={fileinput}
	/>
</div>
