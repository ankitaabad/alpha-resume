<script>
	import { preview_data } from '$lib/store';
	import { is_value_in_arr } from '$lib/utils';
	import Header from './Header.svelte';
	import HyphenDate from './HyphenDate.svelte';
	import Hyphen from './HyphenDate.svelte';
	import LinkItem from './LinkItem.svelte';
</script>

<div class:hidden={!is_value_in_arr($preview_data.Projects.data)}>
  <Header title="Projects"/>

	<div class="mb-7">
		{#each $preview_data.Projects.data as pro, index}
			<div class="mb-3 flex flex-col gap-2 w-full">
				<div class="flex justify-between">
					<div>
            <LinkItem value={pro.Name} url={pro.URL} />

					</div>
					<div class="text-sm">
				<HyphenDate  date_obj={pro}/>	
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<p class="text-gray-500 text-justify summary">
						{@html pro.Summary}
					</p>
					
				</div>
			</div>
		{/each}
	</div>
</div>
