<script>
	import { get_icon_from_section_type } from '$lib/utils';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import { quintOut, elasticOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { faUser } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { resume } from '$lib/store';
	import Section from './Section.svelte';
	onMount(() => {
		document.onkeydown = (e) => {
			const len = Object.keys($resume.sections).length;
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
	$: console.log({ index, resume: $resume });
	$: focused = $resume.sections[index];
	$: console.log({ focused: focused.id });
	// const changeIndex = (i) => {
	// 	console.log('changing index');
	// 	index = i;
	// };
</script>

<div class="flex w-2/5 border-solid border-r border-gray-300 h-screen" id="sidebar">
	<div class=" w-2/5 border-2 bg-gray-100 ">
		<ul>
			{#each $resume.sections as section, i}
				<li class:bg-blue-100={index === i}>
					<a
						class=" flex btn btn-ghost w-full  gap-4 py-2    hover:text-blue-700 hover:bg-blue-200  focus:text-blue-700 focus:bg-blue-900 font-medium text-gray-700 "
						on:click={() => (index = i)}
						><Fa
							icon={get_icon_from_section_type(section.type)}
							class="focus:text-blue-700 text-sm text-gray-700 self-center pl-4"
						/>
						<div class=" ">{section.name}</div></a
					>
				</li>
			{/each}
		</ul>
	</div>
	<!-- {#each Object.keys(resume.sections) as section, i}
			<button class="px-4 py-3 border-2 block w-full">{section}</button
			>
		{/each} -->

	<div class="flex-grow border-2 ring overflow-scroll">
		{#key focused.id}
			<div
				class=" w-full"
				out:fly={{ y: -20, duration: 400 }}
				in:fly={{ delay: 410, duration: 400, y: 50, easing: quintOut }}
			>
				<Section bind:section={$resume.sections[index]} />
			</div>
		{/key}
	</div>
</div>
