<script>
	import { get_icon_from_section_type } from '$lib/utils';
	import { fade, blur, fly, slide, scale,draw } from 'svelte/transition';
	import { quintOut, elasticOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { faUser } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { store } from '$lib/store';
	import Section from './Section.svelte';
	onMount(() => {
		document.onkeydown = (e) => {
			const len = store.no_of_sections()
			var activeElement = document.activeElement;

			if (
				activeElement &&
				(activeElement.tagName.toLowerCase() === 'input' ||
					activeElement.tagName.toLowerCase() === 'textarea' ||
					activeElement.tagName.toLowerCase() === 'select')
			) {
				return;
			}
			const pressedKey = e.key.toLowerCase();
			if (pressedKey === 'n') {
				index = (index + 1) % len;
			} else if (pressedKey === 'p') {
				index = (len + index - 1) % len;
			}
			console.log({ index });
		};
	});
	let index = 0;
  let resume_index = store.get_resume_index()
	$: focused = $store[resume_index].sections[index];

</script>

<div class="flex w-5/12 overflow-y-auto " id="sidebar">
	<div class=" w-2/5 border-r border-solid border-gray-300 bg-white max-h-[91vh]">
		<ul class="py-5 px-2 flex flex-col gap-2">
			{#each $store[resume_index].sections as section, i}
				<li class="rounded" class:bg-blue-100={index === i}>
					<a
						class="rounded cursor-pointer w-full flex items-center gap-3 py-3 px-4  focus:text-blue-700 focus:bg-blue-50 focus:rounded  hover:text-blue-700 hover:bg-blue-50 hover:rounded text-gray-700 font-normal"
						on:click={() => (index = i)}
						><Fa
							icon={get_icon_from_section_type(section.type)}
							class="focus:text-blue-700 text-sm text-gray-700 self-center "
						/>
						<div class=" ">{section.name}</div></a
					>
				</li>
			{/each}
		</ul>
	</div>

	<div
		class="flex-grow border-r border-solid border-gray-300 overflow-auto max-h-[91vh] bg-gray-50"
	>
		{#key focused.id}
			<div
				class=" w-full"
				out:fly={{ y: -20, duration: 400 }}
				in:fly={{ delay: 410, duration: 400, y: 50, easing: quintOut }}
			>
				<Section bind:section={focused}/>
			</div>
		{/key}
	</div>
</div>
