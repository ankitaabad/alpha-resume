<script>
	import { clickOutside } from '$lib/outclick';
	import {
		font,
		get_resume,
		get_resume_index,
		profile_store,
		resume_id,
		store,
		template,
		theme,
	} from '$lib/store';
	import { get } from 'svelte/store';
	import Basic from './Basic.svelte';
	import Experience from './Experience.svelte';
	import Education from './Education.svelte';
	import Projects from './Projects.svelte';
	import Certificates from './Certificates.svelte';
	import Skills from './Skills.svelte';
	import Pencil from 'svelte-material-icons/Pencil.svelte';
	import { onMount, tick } from 'svelte';
	import { templates, themes } from '$lib/utils';
	import Basic2 from './Basic2.svelte';
	import { element } from 'svelte/internal';
	$: profile = $profile_store[get(resume_id)];

	let src = './favicon.png';
	let preview_data = {};
	// export let settings;
	let hideFontSelectBox = true;
	let hideColorSelectBox = true;
	let hideTemplateSelectBox = true;
	let fonts = ['Dosis', 'Inter', 'Roboto', 'Patrick Hand', 'Montaga', 'Poppins'];

	$: currentFont = fonts.find((item) => item === $font) || 'Inter';
	$: console.log({ editing_name });
	let resume_index = get_resume_index();
	let edit_resume_name_input;

	const selectFont = (font) => {
		store.update_font(font);
		currentFont = font;
		hideFontSelectBox = true;
	};
	onMount(() => {
		console.log('Preview mounted');
		let elements = document.querySelectorAll('.pb');
		for (let i of elements) {
			console.log({ clientHeight: i });
		}
	});
	const select_theme = (theme) => {
		store.update_theme(theme);
	};
	const select_template = (template) => {
		store.update_template(template);
	};
	let editing_name = false;
	const start_editing = async () => {
		editing_name = true;
		await tick();
		edit_resume_name_input.onkeydown = function (e) {
			console.log('enter event called');
			e = e || window.event;
			switch (e.which || e.keyCode) {
				case 13: //Your Code Here (13 is ascii code for 'ENTER')
					console.log('enter pressed');
					editing_name = false;
					break;
			}
		};
		edit_resume_name_input.focus();
	};
	let clickUpdate = () => {
		console.log('clickupdate called');
		document.querySelector('#update_resume_name_btn')?.click();
		editing_name = false;
	};
</script>

<div class="w-7/12 ">
	<!--Action header-->
	<div
		class="h-14
	 bg-white  px-5 flex  text-base text-gray-700 items-center font-medium border-b border-solid border-gray-300"
	>
		{#if editing_name}
			<input
				type="text"
				bind:this={edit_resume_name_input}
				class="border px-3 m-0 w-40"
				on:focusout={() => clickUpdate()}
				bind:value={$store[resume_index].name}
			/>
			<input
				type="hidden"
				id="update_resume_name_btn"
				class="px-3 bg-gray-200 rounded hover:bg-gray-100 transition"
			/>
		{:else}
			<div class="flex">
				<div class="px-2 bg-white rounded-md">{$store[resume_index].name}</div>
				<button
					on:click={() => start_editing()}
					class="px-2 bg-gray-200 rounded hover:bg-gray-100 transition"
				>
					<Pencil class="text-gray-700" />
				</button>
			</div>
		{/if}
		<div class="grow" />
		<div class="flex gap-4">
			<div class="relative flex ">
				<div class="">
					<button
						type="button"
						class="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
						id="menu-button"
						aria-expanded="true"
						aria-haspopup="true"
						use:clickOutside
						on:outclick={() => (hideFontSelectBox = true)}
						on:click={() => (hideFontSelectBox ^= true)}
					>
						Font ({currentFont})
						<svg
							class="-mr-1 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</div>
				<div
					class="absolute right-0 z-10 mt-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
					class:hidden={hideFontSelectBox}
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button"
					tabindex="-1"
				>
					<div class="py-1" role="none">
						{#each fonts as font}
							<button
								on:click={() => selectFont(font)}
								class="text-gray-700 block px-4 py-2 text-sm w-full text-left"
								class:bg-blue-100={font === currentFont}
								role="menuitem"
								tabindex="-1"
								id="menu-item-0">{font}</button
							>
						{/each}
					</div>
				</div>
			</div>
			<div class="relative flex  ">
				<div class="">
					<button
						type="button"
						class="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
						id="menu-button"
						aria-expanded="true"
						aria-haspopup="true"
						use:clickOutside
						on:outclick={() => (hideColorSelectBox = true)}
						on:click={() => (hideColorSelectBox ^= true)}
					>
						Theme ({$theme})
						<svg
							class="-mr-1 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</div>
				<div
					class="absolute right-0 z-10 mt-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
					class:hidden={hideColorSelectBox}
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button"
					tabindex="-1"
				>
					<div class="py-1" role="none">
						{#each Object.keys(themes) as themeKey}
							<button
								on:click={() => select_theme(themeKey)}
								class="text-gray-700 block px-4 py-2 text-sm w-full text-left"
								class:bg-blue-100={themeKey === $theme}
								role="menuitem"
								tabindex="-1"
								id="menu-item-0">{themeKey}</button
							>
						{/each}
					</div>
				</div>
			</div>
			<div class="relative flex ">
				<div class="">
					<button
						type="button"
						class="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
						id="menu-button"
						aria-expanded="true"
						aria-haspopup="true"
						use:clickOutside
						on:outclick={() => (hideTemplateSelectBox = true)}
						on:click={() => (hideTemplateSelectBox ^= true)}
					>
						Template ({$template})
						<svg
							class="-mr-1 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</div>
				<div
					class="absolute right-0 z-10 mt-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
					class:hidden={hideTemplateSelectBox}
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button"
					tabindex="-1"
				>
					<div class="py-1" role="none">
						{#each templates as templateKey}
							<button
								on:click={() => select_template(templateKey)}
								class="text-gray-700 block px-4 py-2 text-sm w-full text-left"
								class:bg-blue-100={templateKey === $template}
								role="menuitem"
								tabindex="-1"
								id="menu-item-0">{templateKey}</button
							>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--Template HTML-->
	<div class="overflow-auto max-h-[83vh] bg-gray-50 py-4 " style={`font-family: ${currentFont}`}>
		<div
			class="bg-white flex flex-col max-w-3xl min-h-screen mx-auto  shadow border border-solid border-gray-100"
		>
			<div id="preview" class="page p-8">
				{#if $template === 'Classic'}
					<Basic />
				{:else}
					<Basic2 />
				{/if}
				<Experience />
				<Education />
				<Projects />
				<Certificates />
				<Skills />

				<!-- </div>  -->
			</div>
		</div>
	</div>
</div>

<style>
	.page {
		/* width: 210mm; */
		/* height: 297mm; */
	}
</style>
