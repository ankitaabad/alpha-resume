<script>
	import { preview_data,theme } from '$lib/store';
	import { ae, themes, is_value_in_arr } from '$lib/utils';
	import OpenInNew from 'svelte-material-icons/OpenInNew.svelte';
	import LinkItem from './LinkItem.svelte';
	import HyphenDate from './HyphenDate.svelte';
	import Header from './Header.svelte';
</script>

<div class:hidden={!is_value_in_arr($preview_data.Experience.data)}>
  <Header title="Experience"/>
	<div class="mb-7">
		{#each $preview_data.Experience.data as exp, index}
			<div class="mb-3 flex flex-col gap-2 w-full">
				<div class="flex justify-between">
					<div>
						<div class="font-medium" style = "color: {themes[$theme].subheader}">
							{exp['Job Title']}
						</div>
						<div>
							<LinkItem value={exp['Company Name']} url={exp['URL']} subheader={true} />
						</div>
					</div>
					<div class="text-sm">
            <HyphenDate
							date_obj = {exp}
						/>
						
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<p class="text-gray-500 text-justify summary">
						{@html exp.Summary}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
