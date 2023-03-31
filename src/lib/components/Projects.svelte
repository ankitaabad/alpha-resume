<script>
	import { preview_data } from '$lib/store';
</script>

<h2 class="text-xl font-semibold ">Projects</h2>
<div class="mb-2  border-b border-solid border-gray-300" />
<div class="mb-7">
	{#each $preview_data.Projects.data as pro, index}
		<div class="mb-3 flex flex-col gap-2 w-full">
			<div class="flex justify-between">
				<div>
					<div class="font-medium">{pro.Name}</div>
					<span class="text-gray-500 text-sm">{pro.Description}</span>
				</div>
				<div class="text-sm">
					<span class="text-gray-500 text-xs">{pro['Start Date']}</span>&nbsp;-&nbsp;<span
						class="text-gray-500 text-xs">{pro['End Date']}</span
					>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<p class="text-gray-500 text-justify">
					{pro.Summary}
				</p>
				<div class="text-sm">
					<a href={pro.URL} class="text-blue-700" target="_blank">{pro.URL}</a>
				</div>
			</div>
		</div>
	{/each}
</div>
