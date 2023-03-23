<script>
	import { download } from '$lib/store';
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
	import Download from 'svelte-material-icons/Download.svelte';
	let src = './logo.svg';
	const navButtons = [
		{
			text: 'Export',
			icon: Export,
		},
		{
			text: 'Import',
			icon: Import,
		},
	];
</script>

<div
	class=" h-16 bg-white border-b border-solid border-gray-300 px-6 flex text-base text-gray-700 items-center font-medium"
>
	<!-- <Fa icon={faUserNinja} class=" pl-8 pr-1 text-rose-600 " />
	<div class="text-2xl pl-2 ">
		<div>Resume<span class="text-rose-600">Fu</span></div>
	</div> -->
	<div class="logo flex items-center gap-2 ">
		<!-- <img {src} alt="Logo" /> -->
		<a href="/">
			<Fa icon={faHome} class="pr-2" />
		</a>
		<div>EZ-Resume</div>
	</div>

	<div class="grow" />

	<div class="h-full flex items-center gap-2">
		{#each navButtons as { text, icon }}
			<button
				class="bg-gray-100 py-1 px-4 rounded-md h-10 flex items-center gap-2 font-normal transition hover:bg-gray-50"
			>
				<svelte:component this={icon} class="text-xl" />
				{text}
			</button>
		{/each}
		<button
			class="bg-gray-100 py-1 px-4 rounded-md h-10 flex items-center gap-2 font-normal transition hover:bg-gray-50"
			><Eye class="text-lg" />Preview
		</button>
		<button
			class="bg-blue-700 py-1 px-4 text-white rounded-md h-10 flex items-center gap-2 font-normal transition hover:bg-blue-600"
			on:click={() => download()}
			><Download class="text-lg" /> Download
		</button>
	</div>
</div>
