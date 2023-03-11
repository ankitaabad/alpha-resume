<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Preview from '$lib/components/Preview.svelte';
</script>

<div class="flex flex-col h-screen ">
	<div class=" w-full ">
		<NavBar />
	</div>
	<div class="main-container flex w-full h-screen">
		<Sidebar />
		<Preview />
	</div>
</div>
