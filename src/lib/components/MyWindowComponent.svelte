<script>
	import { imageCropWindowDisplay, profile_store } from '../store';
	import getCroppedImg from '../canvasUtils';
	import Cropper from 'svelte-easy-crop';
	import { faClose } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	export let image;
	let avatar;
	let crop = { x: 0, y: 0 };
	let zoom = 1;
	let pixelCrop;
	let profilePicture, style;
	let crop_shape = 'rect';
	function previewCrop(e) {
		pixelCrop = e.detail.pixels;
		const { x, y, width } = e.detail.pixels;
		const scale = 200 / width;
		profilePicture.style = `margin: ${-y * scale}px 0 0 ${-x * scale}px; width: ${
			profilePicture.naturalWidth * scale
		}px;`;
	}
	function reset() {
		avatar = null;
		// $resume.personalDetails.avatar="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png";
		image = null;
		$imageCropWindowDisplay = false;
	}
	function shape() {
		var s = document.getElementById('cropper-shape');
		var st = document.getElementById('wrap');
		if (crop_shape == 'rect') {
			crop_shape = 'round';
			s.innerHTML = 'Rectangle';
			st.style.borderRadius = '50%';
		} else {
			crop_shape = 'rect';
			s.innerHTML = 'Round';
			st.style.borderRadius = '0%';
		}
	}
</script>

<div class="flex  border-2 border-indigo-700 flex-col shadow-lg relative z-50">
	<div class="bg-indigo-700 px-5 h-10  flex ">
		<div class="self-center  text-slate-200 text-xl">Crop Window</div>
		<div class="grow" />
		<button
			class="self-center px-5 h-full  text-white hover:text-slate-300 rounded-md"
			on:click={() => ($imageCropWindowDisplay = false)}
		>
			<Fa icon={faClose} class="text-2xl " />
		</button>
	</div>
	<div class="flex flex-col bg-white overflow-scroll">
		<div class="mt-3 w-full h-96 relative border-2 self-center">
			<Cropper
				cropShape={crop_shape}
				{image}
				bind:crop
				bind:zoom
				on:cropcomplete={previewCrop}
				aspect={1}
			/>
		</div>
		<!-- <h2>Preview</h2> -->
		<div id="wrap" class="prof-pic-wrapper hidden">
			<img bind:this={profilePicture} class="prof-pic" src={image} alt="Profile example" {style} />
		</div>

		<div class="flex mb-5 mt-3 self-center">
			<button
				type="button"
				class="px-4   py-2 bg-slate-200 hover:bg-slate-300 rounded-md shadow-sm"
				on:click={async () => {
					avatar = await getCroppedImg(image, pixelCrop);
					console.log('avatar type', typeof avatar);
					// var profileImage=document.getElementById("pp")
					// var profileImageDiv=document.getElementById("imagediv")
					// if(crop_shape=="rect"){
					// 	profileImage.style.borderRadius="0%"
					// 	profileImageDiv.style.borderRadius="0%"
					// }else{
					// 	profileImage.style.borderRadius="50%"
					// 	profileImageDiv.style.borderRadius="50%"
					// }
					// $resume.personalDetails.avatar = avatar;
					profile_store.addImage({ image: avatar, type: crop_shape });
					$imageCropWindowDisplay = false;
				}}>Use this image</button
			>
			<div class="w-5" />
			<button
				class="px-4 py-2 rounded-md bg-slate-200 border-2 hover:bg-slate-300 shadow-sm"
				type="button"
				on:click={reset}>Reset</button
			>
			<div class="w-5" />
			<button
				id="cropper-shape"
				class="px-4 py-2 rounded-md bg-slate-200 border-2 hover:bg-slate-300 shadow-sm"
				type="button"
				on:click={shape}>Rounded</button
			>
		</div>
	</div>
</div>

<style>
	.prof-pic-wrapper {
		height: 200px;
		width: 200px;
		position: relative;
		border: solid;
		overflow: hidden;
	}

	.prof-pic {
		position: absolute;
	}
</style>
