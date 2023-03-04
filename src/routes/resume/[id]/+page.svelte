<script>
	import { get_blank_resume } from '$lib/utils';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import { quintOut, elasticOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	onMount(() => {
		document.onkeydown = (e) => {
			const len = Object.keys(resume.sections).length;
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
	const resume = get_blank_resume();
	let index = 0;
	$: focused = resume.sections[Object.keys(resume.sections)[index]];
</script>

<div class="flex w-2/5 border-2 h-screen" id="sidebar">
	<div class=" w-2/5 border-2 ">
		{#each Object.keys(resume.sections) as section, i}
			<button class="px-4 py-3 border-2 block w-full" on:click={() => (index = i)}>{section}</button
			>
		{/each}
	</div>

	<div class="flex-grow border-2 ring">
		{#if focused.name === 'experience'}
			<div
				class=" w-20"
				out:fly={{ y: -20, duration: 200 }}
				in:fly={{ delay: 300, duration: 300, y: 50, easing: quintOut }}
			>
				<input type="text" class="border-2" placeholder={focused.name} />
			</div>
		{:else}
			<div
				class=" w-20"
				out:fly={{ y: -20, duration: 200 }}
				in:fly={{ delay: 300, duration: 300, y: 50, easing: quintOut }}
			>
				{focused.name}
			</div>
		{/if}
	</div>
</div>
