<script>
	import { preview_data } from '$lib/store';
	import { empty, is_value_in_arr } from '$lib/utils';
</script>
<div class:hidden={!is_value_in_arr($preview_data.Skills.data)}>
<h2 class="text-xl font-semibold  ">Skills</h2>
<div class="mb-2  border-b border-solid border-gray-300" />
<div class="flex gap-2 w-full flex-wrap">
	{#each $preview_data.Skills.data as Skill, index}
		<div class="flex justify-between items-center" class:hidden= {empty(Skill.Name)}>
			<div class="text-sm text-white bg-gray-700 py-1 px-4 rounded " >{Skill.Name}</div>
		</div>
	{/each}
</div>
</div>