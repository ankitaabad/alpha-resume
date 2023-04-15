<script>
	import { preview_data } from '$lib/store';
	import { ae } from '$lib/utils';
	import OpenInNew from 'svelte-material-icons/OpenInNew.svelte';
	import LinkItem from './LinkItem.svelte';
</script>

<h2 class="text-xl font-semibold ">Experience</h2>
<div class="mb-2  border-b border-solid border-gray-300" />
<div class="mb-7">
	{#each $preview_data.Experience.data as exp, index}
		<div class="mb-3 flex flex-col gap-2 w-full">
			<div class="flex justify-between">
				<div>
					<div class="font-medium">
						{exp['Job Title']}
					</div>
					<div>
            <LinkItem value = {exp['Company Name']} url = {exp['URL']}/>
					</div>
				</div>
				<div class="text-sm">
					<span class="text-gray-500 text-xs">{exp['Start Date']}</span>&nbsp;-&nbsp;<span
						class="text-gray-500 text-xs">{exp['End Date']}</span
					>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<p class="text-gray-500 text-justify">
					{exp.Summary}
				</p>
			</div>
		</div>
	{/each}
</div>
