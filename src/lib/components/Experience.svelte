<script>
	import { preview_data } from "$lib/store";




</script>


{#each $preview_data.Experience.data as exp, index}
<div class="mb-8">
  <div class="mb-1 flex justify-start items-center gap-6">
    <div class="text-sm">
      <span class="text-gray-500">{exp["Start Date"]}</span>
      -
      <span class="text-gray-500">{exp["End Date"]}</span>
    </div>
    <div class="font-semibold">{exp.Name}</div>
  </div>
  <p class="text-gray-500">{exp.Summary}</p>
</div>
{/each}