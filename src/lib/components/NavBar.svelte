<script>
	import { faUserNinja, faSignIn, faLink, faHome } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	let src = './logo.svg';
	const navButtons = [
		{
			text: 'Export',
		},
		{
			text: 'Import',
		},
	];
</script>

<div class=" h-12 bg-white shadow px-6 flex text-base text-gray-700 items-center font-medium">
	<!-- <Fa icon={faUserNinja} class=" pl-8 pr-1 text-rose-600 " />
	<div class="text-2xl pl-2 ">
		<div>Resume<span class="text-rose-600">Fu</span></div>
	</div> -->
	<div class="logo flex items-center gap-2 border-r border-gray-500 border-solid pr-6">
		<!-- <img {src} alt="Logo" /> -->
		<a href="/">
			<Fa icon={faHome} class="pr-2" />
		</a>
		<div>EZ-Resume</div>
	</div>

	<div class="grow" />
	{#each navButtons as { text }}
		<div class="h-full flex items-center">
			<button class=" btn btn-ghost px-5 py-2 h-full flex items-center hover:text-primary capitalize text-base rounded-none" >{text}</button>
		</div>
	{/each}

</div>
