<script>
	import { preview_data } from '$lib/store';
</script>

<h2 class="text-xl font-semibold ">Certificates</h2>
<div class="mb-2  border-b border-solid border-gray-300" />
<div class="mb-7">
	{#each $preview_data.Certificates.data as cer, index}
		<div class="mb-3 flex flex-col gap-2 w-full">
			<div class="flex justify-between">
				<div>
					<div class="font-medium">{cer.Name}</div>
					<span class="text-gray-500 text-sm">{cer.Issuer}</span>
				</div>
				<div class="text-sm">
					<span class="text-gray-500 text-xs">{cer.Date}</span>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<p class="text-gray-500 text-justify">
					{cer.Summary}
				</p>
				<div class="text-sm">
					<a href="\\{cer.URL}" class="text-blue-700" target="_blank">{cer.URL}</a>
				</div>
			</div>
		</div>
	{/each}
</div>
