<script>
	import { ae, generate_url } from "$lib/utils";
	import OpenInNew from 'svelte-material-icons/OpenInNew.svelte';
  export let value="";
  export let url="";
  export let subheader = false
  $: text_color = subheader ? 'text-gray-500' : 'text-gray-700' 
  $: text_size = subheader ? 'font-sm': 'font-medium'
  $: console.log({url})
</script>
{#if !ae(url)}
<a
href= {generate_url(url)}
class="{text_color} {text_size} flex gap-1 items-center  transition"
class:hidden={ae(value,url)}
target="_blank"
>
<span 
  >{value}
  <OpenInNew  
    class="inline text-blue-700 hover:text-blue-600 {ae(value,url)}
      ? 'hidden'
      : ''}"
  />
</span></a
>
{:else}
<div class="{text_color}"
>{value}
</div>
{/if}

