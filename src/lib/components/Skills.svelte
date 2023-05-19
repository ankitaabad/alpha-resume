<script>
	import {  preview_data, theme } from '$lib/store';
	import {  empty, is_value_in_arr, themes } from '$lib/utils';
	import Header from './Header.svelte';
</script>
<div class="pb"></div>
<div class:hidden={!is_value_in_arr($preview_data.Skills.data)}>
  <Header title="Skills"/>

<div class="flex gap-2 w-full flex-wrap">
	{#each $preview_data.Skills.data as Skill, index}
		<div class="flex justify-between items-center" class:hidden= {empty(Skill.Name)}>
			<div class="text-sm text-white py-1 px-4 rounded " style="background-color:{themes[$theme]?.pills}">{Skill.Name}</div>
		</div>
	{/each}
</div>
</div>