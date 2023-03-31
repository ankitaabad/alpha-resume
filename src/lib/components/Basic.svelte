<script>
	import { get_resume_index, preview_data, profile_store, resume_id } from '$lib/store';
	import { get_social_icon } from '$lib/utils';
	import { get } from 'svelte/store';
	let avatar;
	let network;
	profile_store.subscribe((value) => {
		avatar = value[get(resume_id)];
		console.log('inside subscribe');
		console.log({ value });
		console.log({ reusme_index: get(resume_id) });
		console.log({ avatar });
	});
	$: console.log({ avatar });
	$: basic_data = $preview_data?.Basic?.data[0];
	$: social_profiles = $preview_data?.['Social Profile']?.data;
</script>

<div>
	<!-- <h1 class="text-2xl font-semibold ">{$preview_data?.['Social Profile']?.data[0]?.Network}</h1> -->

	<div class={basic_data.Name ? 'flex pb-6 gap-6 ' : 'flex'}>
		<div
			class="aspect-square w-28 h-28 bg-transparent flex items-center justify-center"
			class:hidden={avatar?.image === undefined}
		>
			<img src={avatar?.image} class:rounded-full={avatar?.type === 'round'} alt="profile" />
		</div>
		<div class="profile-details w-full flex justify-between">
			<div>
				<h1 class="text-2xl font-semibold ">{basic_data?.Name}</h1>
				<div class=" mb-4 text-gray-500" class:hidden={basic_data?.Designation === ''}>
					{basic_data?.Designation}
				</div>
			</div>
			<div class="flex gap-3 flex-col">
				<div class="flex flex-col gap-1">
					<p class="w-full" class:hidden={basic_data?.Email == ''}>
						<a href={basic_data?.Email} class="text-gray-500 flex items-center gap-1">
							<svelte:component this={get_social_icon('email')} class="inline" />
							<span>{basic_data?.Email}</span>
						</a>
					</p>
					<p class="w-full" class:hidden={$preview_data?.Basic?.data[0].Phone == ''}>
						<a href="/" class="text-gray-500 flex items-center gap-1"
							><svelte:component this={get_social_icon('phone')} class="inline" />{$preview_data
								?.Basic?.data[0].Phone}</a
						>
					</p>
					<p class="w-full flex items-center gap-1" class:hidden={basic_data?.Location == ''}>
						<svelte:component this={get_social_icon('location')} class="inline text-gray-500" />
						<span class="text-gray-500">{basic_data?.Location}</span>
					</p>
					{#each $preview_data?.['Social Profile']?.data as socialProfile}
						<p class="w-full flex items-center gap-1" class:hidden={socialProfile.Username == ''}>
							<svelte:component
								this={get_social_icon(socialProfile.Network)}
								class="inline text-gray-500"
							/>
							<a href={socialProfile.URL} class="text-gray-500">{socialProfile.Username}</a>
						</p>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<!-- container -->
	<div class="flex flex-col  ">
		<!-- profile -->
		<div class={basic_data?.Summary ? 'profile pb-5 ' : ''}>
			<h2 class="text-xl font-semibold " class:hidden={basic_data?.Summary === ''}>About Me</h2>
			<div class="mb-2  border-b border-solid border-gray-300" />
			<p class="text-gray-500 text-justify">
				{basic_data?.Summary}
			</p>
		</div>
	</div>
</div>
