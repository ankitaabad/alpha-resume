<script>
	import { preview_data, theme } from '$lib/store';
	import { is_value_in_arr, themes } from '$lib/utils';
	import Header from './Header.svelte';
	import HyphenDate from './HyphenDate.svelte';
	import Hyphen from './HyphenDate.svelte';
	import LinkItem from './LinkItem.svelte';
</script>

<div class:hidden={!is_value_in_arr($preview_data.Education.data)}>
  <Header title="Education"/>
	
	<div class="mb-7">
		{#each $preview_data.Education.data as edu, index}
			<div class="mb-3 flex flex-col gap-2 w-full" >
				<div class="flex justify-between">
					<div>
						<div class="font-medium" style = "color:{themes[$theme].subheader}">{edu.Degree}</div>
            <LinkItem value={edu.Institution} url={edu.URL} subheader={true}/>
					</div>
					<div class="text-sm flex flex-col gap-1" >
						<div class="  flex justify-end font-medium" style = "color:{themes[$theme]?.content}">{edu.Grade}</div>
						<div>
              <HyphenDate
							date_obj = {edu}
						/>	
						</div>
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<p class="text-gray-500 text-justify summary">
						{@html edu.Summary}
					</p>
					
				</div>
			</div>
		{/each}
	</div>
</div>
