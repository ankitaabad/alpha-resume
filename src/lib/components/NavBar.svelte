<script>
	import { download, get_all_resume_arr, get_profile, profile_store, store } from '$lib/store';
	import {
		faUserNinja,
		faSignIn,
		faLink,
		faHome,
		faEye,
		faDownload,
		faFileImport,
		faFileExport,
	} from '@fortawesome/free-solid-svg-icons';

	import Fa from 'svelte-fa';
	import Import from 'svelte-material-icons/Import.svelte';
	import Export from 'svelte-material-icons/Export.svelte';
	import Eye from 'svelte-material-icons/Eye.svelte';
	import { page } from '$app/stores';

	import Download from 'svelte-material-icons/Download.svelte';
	const import_file_selected = (e) => {
		let resume_data = e.target.files[0];

		let reader = new FileReader();
		reader.onload = (e) => {
			const data = e.target.result;

			const { all_resume_data, all_images_data } = JSON.parse(data);

			const combined_resume = get_all_resume_arr();

			combined_resume.push(...all_resume_data);
			$store = combined_resume;

			Object.keys(all_images_data).forEach((key) => {
				$profile_store[key] = all_images_data[key];
			});
		};
		reader.readAsText(resume_data);
	};
	const exportData = () => {
		const all_resume = get_all_resume_arr();
		const all_images = $profile_store;
		const text = JSON.stringify({
			all_resume_data: all_resume,
			all_images_data: all_images,
		});
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', 'test.txt');

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	};
	let src = './logo.svg';
	let import_file_input;
	const isHome = () => {
		return $page.route.id === '/';
	};
	const navButtons = [
		{
			text: 'Import',
			icon: Import,
			on_click: () => import_file_input.click(),
		},
		{
			text: 'Export',
			icon: Export,
			on_click: exportData,
		},
	];
</script>

<input
	style="display:none"
	type="file"
	accept=".txt"
	on:click={(e) => (e.target.value = null)}
	on:change={(e) => import_file_selected(e)}
	bind:this={import_file_input}
/>
<div
	class=" h-16 bg-white border-b border-solid border-gray-300 px-6 flex text-base text-gray-700 items-center font-medium"
>
	<!-- <Fa icon={faUserNinja} class=" pl-8 pr-1 text-rose-600 " />
	<div class="text-2xl pl-2 ">
		<div>Resume<span class="text-rose-600">Fu</span></div>
	</div> -->
	<div class="logo flex items-center gap-2 ">
		<!-- <img {src} alt="Logo" /> -->
		{#if !isHome()}<a href="/">
				<Fa icon={faHome} class="pr-2 text-lg" />
			</a>
		{/if}
		<div>
			<a href="/"><img {src} alt="EZ Resume" width="124" /></a>
		</div>
	</div>

	<div class="grow" />

	<div class="h-full flex items-center gap-2">
		{#if isHome()}
			{#each navButtons as { text, icon, on_click }}
				<button
					class="bg-gray-100 py-1 px-4 rounded-md h-10 flex items-center gap-2 font-normal transition hover:bg-gray-50"
					on:click={on_click}
				>
					<svelte:component this={icon} class="text-xl" />
					{text}
				</button>
			{/each}
		{/if}

		<!-- <button
			class="bg-gray-100 py-1 px-4 rounded-md h-10 flex items-center gap-2 font-normal transition hover:bg-gray-50"
			><Eye class="text-lg" />Preview
		</button> -->
		{#if !isHome()}
			<button
				class="bg-blue-700 py-1 px-4 text-white rounded-md h-10 flex items-center gap-2 font-normal transition hover:bg-blue-600"
				on:click={() => download()}
				><Download class="text-lg" /> Download
			</button>
		{/if}
	</div>
</div>
