<script>
	import { preview_data } from '$lib/store';
</script>

<h2 class="text-xl font-semibold  ">Education</h2>
<div class="mb-2  border-b border-solid border-gray-300" />
<div class="mb-7">
	{#each $preview_data.Education.data as edu, index}
		<div class="mb-3 flex flex-col gap-2 w-full">
			<div class="flex justify-between">
				<div>
					<div class="font-medium">{edu.Institution}</div>
					<span class="text-gray-500 text-sm">{edu.Area}</span>
				</div>
				<div class="text-sm flex flex-col gap-1">
					<div>
						<span class="text-gray-500 text-xs">{edu['Start Date']}</span>&nbsp;-&nbsp;<span
							class="text-gray-500 text-xs">{edu['End Date']}</span
						>
					</div>
					<div class="text-gray-700 text-xs flex justify-end">{edu.Grade}</div>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<p class="text-gray-500 text-justify">
					{edu.Summary}
				</p>
				<div class="text-sm">
					<a href={edu.URL} class="text-blue-700" target="_blank">{edu.URL}</a>
				</div>
			</div>
		</div>
	{/each}
</div>
