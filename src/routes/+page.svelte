<script>
	import { faAdd, faEdit, faCopy, faTrashAlt, faDownload } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import NavBar from '$lib/components/NavBar.svelte';
	import { add_new_modal, store } from '$lib/store';

	import Modal, { bind } from 'svelte-simple-modal';

	const open = () => {
    add_new_modal.set(bind(Popup));
  }
	import Pencil from 'svelte-material-icons/Pencil.svelte';
	import Delete from 'svelte-material-icons/Delete.svelte';
	import Popup from '$lib/components/Popup.svelte';
	let src = './pattern.svg';
</script>

<div class="flex flex-col h-screen ">
	<div class=" w-full ">
		<NavBar />
	</div>
	<div class="main-container flex bg-gray-100 w-full h-full">
		<div class="content w-full ">
			<div class="flex h-full">
				<div
					class="w-8/12 h-full border-r border-solid border-gray-300 max-h-[91vh] overflow-auto relative"
				>
					<div
						class="flex items-center justify-between w-full sticky top-0 left-0 px-8 pt-8 pb-6 bg-gray-100"
					>
						<h1 class="text-2xl font-semibold text-gray-900">My Resume</h1>
						<Modal show={$add_new_modal}>
							<a
								on:click={() => open(Popup)}
								class="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer"
							>
								<Fa icon={faAdd} class="text-white " />
								Add New
							</a>
						</Modal>
					</div>
					<div class="grid grid-cols-2 gap-8 px-8 pb-8 lg:grid-cols-3 ">
						{#each $store as { name, id }}
							<div class="bg-white rounded-lg border border-solid border-gray-300">
								<div class="h-40 bg-gradient-to-tr bg-gray-200 rounded-t-lg ">
									<!-- <img {src} alt="default Image" class="h-full object-cover rounded-t-lg" /> -->
								</div>
								<div class="">
									<h3 class="px-6 pt-4 pb-4 text-gray-700 text-base font-semibold capitalize">
										{name}
									</h3>
									<div
										class="h-12 flex justify-between border-t border-solid border-gray-300 action"
									>
										<button
											class="border-r border-solid border-gray-300 flex items-center justify-center flex-1 gap-2 hover:bg-blue-700 hover:text-white  rounded-bl-lg transition text-gray-700"
											on:click={() => store.edit_resume(id)}
										>
											<Pencil class=" hover:fill-white text-xl" />

											<div class="">Edit</div>
										</button>
										<div
											class="h-12 flex items-center justify-center gap-2 flex-1 cursor-pointer hover:bg-red-700 hover:text-white rounded-br-lg transition"
											on:click={() => store.delete_resume(id)}
										>
											<Delete class=" hover:fill-white text-xl" />
											<a class="hover:text-white  ">Delete</a>
										</div>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
				<div class="w-4/12 flex-1 h-full bg-white p-8">
					<h2 class="text-xl font-semibold text-gray-900 mb-4">Build Your Resume Fast and Easy.</h2>
					<div class="">
						<iframe
							width="100%"
							height="248"
							src="https://www.youtube.com/embed/uC2NmfzD2ec"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						/>
					</div>
					<h2 class="text-xl font-semibold text-gray-900 mt-14 mb-4">Features</h2>
					<ul class="flex flex-col gap-2 list-disc pl-4">
						<li>Completely Free</li>
						<li>No Hidden Fees</li>
						<li>Live Content Feedback</li>
						<li>ATS-Friendly</li>
						<li>Edit Your Resume in Real Time</li>
						<li>Creative and Professional Resume Templates</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
