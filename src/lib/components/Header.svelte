<script>
	import { theme } from "$lib/store";
	import { themes } from "$lib/utils";



export let title="";
</script>
<h2 class="text-xl font-semibold " style="color:{themes[$theme]?.header}">{title}</h2>
<div class="mb-2  border-b border-solid border-gray-300" />
