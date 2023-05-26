<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Preview from '$lib/components/Preview.svelte';
	import { page } from '$app/stores';
	import { resume_id } from '$lib/store';

	$resume_id = Number($page.url.searchParams.get('id'));
</script>

<div class="flex flex-col h-screen lg:w-full w-[1200px]">
	<div class=" w-full ">
		<NavBar />
	</div>
	<div class="main-container flex w-full h-screen">
		<Sidebar />
		<Preview />
	</div>
</div>
