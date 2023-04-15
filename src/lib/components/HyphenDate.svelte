<script>
	import { ae, empty } from '$lib/utils';

	export let date_obj = {};
	$: start = date_obj['Start Date'];
	$: end = date_obj['End Date'];
</script>

<span class="text-gray-500 text-xs" class:hidden = {empty(start)}>{start}</span>
<span class:hidden={ae(start,end)}> &nbsp;-&nbsp; </span>
<span class="text-gray-500 text-xs" class:hidden = {empty(end)}>{end}</span>
