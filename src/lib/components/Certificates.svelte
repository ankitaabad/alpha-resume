<script>
	import { preview_data } from '$lib/store';
	import { is_value_in_arr } from '$lib/utils';
	import Header from './Header.svelte';
	import LinkItem from './LinkItem.svelte';
</script>

<div class:hidden={!is_value_in_arr($preview_data.Certificates.data)}>
  <Header title="Certificates"/>

	<div class="mb-7">
		{#each $preview_data.Certificates.data as cer, index}
			<div class="mb-3 flex flex-col gap-2 w-full">
				<div class="flex justify-between">
					<div>
						<LinkItem value={cer.Name} url={cer.URL} />

						<span class="text-gray-500 text-sm">{cer.Issuer}</span>
					</div>
					<div class="text-sm">
						<span class="text-gray-500 text-xs">{cer.Date}</span>
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<p class="text-gray-500 text-justify prose summary">
						{@html cer.Summary}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
