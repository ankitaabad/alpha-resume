<script>
	import { get_resume_index, preview_data, profile_store, resume_id } from '$lib/store';
	import { get_social_icon } from '$lib/utils';
	import { get } from 'svelte/store';
	let avatar;
	profile_store.subscribe((value) => {
		avatar = value[get(resume_id)];
		console.log('inside subscribe');
		console.log({ value });
		console.log({ reusme_index: get(resume_id) });
		console.log({ avatar });
	});
	$: console.log({ avatar });
</script>

<div class="mx-5">
	<!-- <h1 class="text-2xl font-semibold ">{$preview_data?.['Social Profile']?.data[0]?.Network}</h1> -->

	<div
		class={$preview_data?.Basic?.data[0]?.Name
			? 'flex pb-6 gap-6 border-b border-solid border-gray-300'
			: 'flex'}
	>
		<div
			class="aspect-square w-32 h-32 bg-transparent flex items-center justify-center"
			class:hidden={avatar?.image === undefined}
		>
			<img src={avatar?.image} class:rounded-full={avatar?.type === 'round'} alt="profile" />
		</div>
		<div class="profile-details w-full flex justify-between">
			<div>
				<h1 class="text-2xl font-semibold ">{$preview_data?.Basic?.data[0]?.Name}</h1>
				<div class=" mb-4" class:hidden={$preview_data?.Basic?.data[0].Designation === ''}>
					{$preview_data?.Basic?.data[0].Designation}
				</div>
			</div>
			<div class="flex gap-3 flex-col">
				<div class="flex flex-col ">
					<p class="w-full" class:hidden={$preview_data?.Basic?.data[0].Email == ''}>
						<a href={$preview_data?.Basic?.data[0].Email} class="text-gray-500"
							><svelte:component class="inline" this ={get_social_icon('email')}/>
							{$preview_data?.Basic?.data[0].Email}</a
						>
					</p>
					<p class="w-full" class:hidden={$preview_data?.Basic?.data[0].Phone == ''}>
						<a href="/" class="text-gray-500"
							><svelte:component class="inline" this ={get_social_icon('phone')}/>{$preview_data?.Basic?.data[0].Phone}</a
						>
					</p>
					<p class="w-full" class:hidden={$preview_data?.Basic?.data[0].Location == ''}>
            <svelte:component class="inline text-gray-500" this ={get_social_icon('location')}/>	
						<span class="text-gray-500">{$preview_data?.Basic?.data[0].Location}</span>
					</p>
          <p class="w-full" class:hidden={$preview_data?.['Social Profile']?.data[0].Username == ''}>
            <svelte:component class="inline text-gray-500" this ={get_social_icon('linkedin')}/>	
						<a href = {$preview_data?.['Social Profile']?.data[0].URL} class="text-gray-500">{$preview_data?.['Social Profile']?.data[0].Username}</a>
					</p>
				</div>
			</div>
		</div>
	</div>
	<!-- container -->
	<div class="flex flex-col pb-5  ">
		<!-- profile -->
		<div
			class={$preview_data?.Basic?.data[0].Summary
				? 'profile py-6 border-b border-solid border-gray-300'
				: ''}
		>
			<h2
				class="text-xl font-semibold mb-2"
				class:hidden={$preview_data?.Basic?.data[0].Summary === ''}
			>
				About Me
			</h2>
			<p class="text-gray-500 text-justify">
				{$preview_data?.Basic?.data[0].Summary}
			</p>
		</div>
	</div>
</div>
