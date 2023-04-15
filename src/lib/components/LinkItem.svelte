<script>
	import { ae } from "$lib/utils";
	import OpenInNew from 'svelte-material-icons/OpenInNew.svelte';
  export let value="";
  export let url="";
</script>
{#if !ae(url)}
<a
href="\\{url}"
class="text-gray-700 flex gap-1 items-center  transition"
class:hidden={ae(value,url)}
target="_blank"
>
<span class="text-gray-500 text-sm"
  >{value}
  <OpenInNew  
    class="inline text-blue-700 hover:text-blue-600 {ae(value,url)}
      ? 'hidden'
      : ''}"
  />
</span></a
>
{:else}
<span class="text-gray-500 text-sm"
>{value}
</span>
{/if}

