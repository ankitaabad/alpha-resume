<script>
	import { preview_data } from '$lib/store';
</script>

<h2 class="text-xl font-semibold  ">Skills</h2>
<div class="mb-2  border-b border-solid border-gray-300" />
<div class="mb-12 flex gap-2 w-full">
	{#each $preview_data.Skills.data as Skill, index}
		<div class="flex justify-between items-center">
			<div class="text-sm text-white bg-gray-700 py-1 px-4 rounded ">{Skill.Name}</div>
		</div>
	{/each}
</div>
