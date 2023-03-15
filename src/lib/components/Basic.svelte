<script>
	import { get_resume_index, preview_data, profile_store, resume_id } from "$lib/store";
	import { get } from "svelte/store";
  let avatar
  profile_store.subscribe(value => {

    avatar = value[get(resume_id)]
    console.log("inside subscribe")
    console.log({value})
    console.log({"reusme_index":get(resume_id)})
    console.log({avatar})
  })
  $: console.log({avatar})
</script>
<div>
	<div class="flex border-b border-solid border-gray-300 pb-6 gap-6">
		<div
			class="aspect-square w-36 h-36 bg-transparent flex items-center justify-center"
			class:hidden={avatar?.image === undefined}
		>
			<img src={avatar?.image} class:rounded-full={avatar?.type === 'round'} alt="profile" />
		</div>
		<div class="profile-details w-full">
			<h1 class="text-2xl font-bold ">{$preview_data?.Basic?.data[0]?.Name}</h1>
			<div class=" mb-4" class:hidden={$preview_data?.Basic?.data[0].Headline===""}>{$preview_data?.Basic?.data[0].Headline}</div>
			<div class="flex gap-3 flex-col">
				<div class="flex  gap-6">
					<p class="w-1/2" class:hidden={$preview_data?.Basic?.data[0].Email == ''}>
						<a href={$preview_data?.Basic?.data[0].Email} class="text-gray-500"
							><span class="text-gray-900">Email:</span>
							{$preview_data?.Basic?.data[0].Email}</a
						>
					</p>
					<p class="w-1/2" class:hidden={$preview_data?.Basic?.data[0].Phone == ''}>
						<a href="/" class="text-gray-500"
							><span class="text-gray-900">Phone:</span> {$preview_data?.Basic?.data[0].Phone}</a
						>
					</p>
				</div>
				<div class="flex  gap-6">
					
					<p class="w-1/2" class:hidden={$preview_data?.Basic?.data[0].Location == ''}>
						<span class="text-gray-900">Location:</span>
            <span class="text-gray-500">{$preview_data?.Basic?.data[0].Location}</span>
					</p>
				</div>
			</div>
		</div>
	</div>
	<!-- container -->
	<div class="flex flex-col p-5  ">
		<!-- profile -->
		<div class="profile border-b border-solid border-gray-300 py-6">
			<h2 class="text-xl font-bold mb-3" class:hidden ={$preview_data?.Basic?.data[0].Summary===""}>About Me</h2>
			<p class="text-gray-500" >
				{$preview_data?.Basic?.data[0].Summary}
			</p>
		</div>
	</div>
</div>
