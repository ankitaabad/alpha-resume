<script>
	import { getContext } from 'svelte';
	import Popup from './popup.svelte';
	const { open } = getContext('simple-modal');
	const showSurprise = () => open(Popup);
</script>

<p>
	<button on:click={showSurprise}>Add New</button>
</p>
