<script>
	import { preview_data } from '$lib/store';
	import { is_value_in_arr } from '$lib/utils';
</script>

<div class:hidden={!is_value_in_arr($preview_data.Education.data)}>
	<h2 class="text-xl font-semibold  ">Education</h2>
	<div class="mb-2  border-b border-solid border-gray-300" />
	<div class="mb-7">
		{#each $preview_data.Education.data as edu, index}
			<div class="mb-3 flex flex-col gap-2 w-full">
				<div class="flex justify-between">
					<div>
						<div class="font-medium">{edu.Degree}</div>
						<span class="text-gray-500 text-sm">{edu.Institution} </span>
					</div>
					<div class="text-sm flex flex-col gap-1">
						<div class="text-gray-700  flex justify-end font-medium">{edu.Grade}</div>
						<div>
							<span class="text-gray-500 text-xs">{edu['Start Date']}</span>&nbsp;-&nbsp;<span
								class="text-gray-500 text-xs">{edu['End Date']}</span
							>
						</div>
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<p class="text-gray-500 text-justify">
						{edu.Summary}
					</p>
					<div class="text-sm">
						<a href="\\{edu.URL}" class="text-blue-700" target="_blank">{edu.URL}</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
