<script>
	import { ae, generate_url, themes } from '$lib/utils';
	import { theme } from '$lib/store';
	import OpenInNew from 'svelte-material-icons/OpenInNew.svelte';
	export let value = '';
	export let url = '';
	export let subheader = false;
	$: text_color = subheader ? themes[$theme]?.content : themes[$theme]?.subheader;
	$: text_size = subheader ? 'font-sm' : 'font-medium';
	$: console.log({ url });
</script>

{#if !ae(url)}
	<a
		href={generate_url(url)}
		class="{text_color} {text_size} flex gap-1 items-center  transition"
		style="color:{text_color}"
		class:hidden={ae(value, url)}
		target="_blank"
	>
		<span
			>{value}
			<OpenInNew
				class="inline text-blue-700 hover:text-blue-600 {ae(value, url)}
      ? 'hidden'
      : ''}"
				color={themes[$theme]?.link}
			/>
		</span></a
	>
{:else}
	<div style="color:{text_color}">{value}</div>
{/if}
