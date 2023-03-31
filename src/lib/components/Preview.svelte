<script>
	import { clickOutside } from '$lib/outclick';
	import { font, profile_store, resume_id, store } from '$lib/store';
	import { get } from 'svelte/store';
	import Basic from './Basic.svelte';
	import Experience from './Experience.svelte';
	import Education from './Education.svelte';
	import Projects from './Projects.svelte';
	import Certificates from './Certificates.svelte';
	import Skills from './Skills.svelte';
	$: profile = $profile_store[get(resume_id)];
	$: console.log({ Profile_type: profile?.image });
	let src = './favicon.png';
	let preview_data = {};
	// export let settings;
	let hideFontSelectBox = true;
	let fonts = ['Dosis', 'Inter', 'Roboto', 'Patrick Hand'];
	$: currentFont = fonts.find((item) => item === $font) || 'Inter';
	$: console.log({ currentFont });
	const selectFont = (font) => {
		store.update_font(font);
		currentFont = font;
		hideFontSelectBox = true;
	};
</script>

<div class="w-7/12 ">
	<!--Action header-->
	<div
		class="h-14
	 bg-white  px-5 flex justify-between text-base text-gray-700 items-center font-medium border-b border-solid border-gray-300"
	>
		<div>Hitesh Kumawat</div>

		<div class="relative flex gap-2 ">
			<div class="">
				<button
					type="button"
					class="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					id="menu-button"
					aria-expanded="true"
					aria-haspopup="true"
					use:clickOutside
					on:outclick={() => (hideFontSelectBox = true)}
					on:click={() => (hideFontSelectBox ^= true)}
				>
					Font ({currentFont})
					<svg
						class="-mr-1 h-5 w-5 text-gray-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
			<div
				class="absolute right-0 z-10 mt-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
				class:hidden={hideFontSelectBox}
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabindex="-1"
			>
				<div class="py-1" role="none">
					{#each fonts as font}
						<button
							on:click={() => selectFont(font)}
							class="text-gray-700 block px-4 py-2 text-sm w-full text-left"
							class:bg-blue-100={font === currentFont}
							role="menuitem"
							tabindex="-1"
							id="menu-item-0">{font}</button
						>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<!--Template HTML-->
	<div class="overflow-auto max-h-[83vh] bg-gray-50 py-4 " style={`font-family: ${currentFont}`}>
		<div
			class="bg-white flex flex-col max-w-3xl min-h-screen mx-auto  shadow border border-solid border-gray-100"
		>
			<div id="preview" class="page p-5">
				<Basic />
				<Experience />
				<Education />
				<Projects />
				<Certificates />
				<Skills />
				<div class="hidden">
					<div class="profile border-b border-solid border-gray-300 py-6">
						<h2 class="text-xl font-bold mb-3">Profile</h2>
						<p class="text-gray-500">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat tempore ducimus
							accusantium aut numquam maxime. Similique blanditiis ullam, laudantium debitis nostrum
							dolore dolores deleniti nobis. Odio veniam obcaecati ipsa eos.
						</p>
					</div>
					<!-- inner container -->
					<div class="flex pt-6">
						<!-- container -->
						<div class="w-8/12 border-r border-solid border-gray-300 pr-4">
							<h2 class="text-xl font-bold mb-3">Education</h2>
							<div class="mb-8">
								<div class="mb-1 flex justify-start items-center gap-6">
									<div class="text-sm">
										<span class="text-gray-500">2009</span>
										-
										<span class="text-gray-500">2014</span>
									</div>
									<div class="font-semibold ">JEC Jaipur</div>
								</div>
								<p class="text-gray-500">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</p>
							</div>
							<div>
								<div class="mb-1 flex justify-start items-center gap-6">
									<div class="text-sm">
										<span class="text-gray-500">2009</span>
										-
										<span class="text-gray-500">2014</span>
									</div>
									<div class="font-semibold">Arya Jaipur</div>
								</div>
								<p class="text-gray-500">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</p>
							</div>

							<h2 class="text-xl font-bold mb-3 mt-12">Employment</h2>
							<div class="mb-8">
								<div class="mb-1 flex justify-start items-center gap-6">
									<div class="text-sm">
										<span class="text-gray-500">2011</span>
										-
										<span class="text-gray-500">2018</span>
									</div>
									<div class="font-semibold">Google</div>
								</div>
								<p class="text-gray-500">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</p>
							</div>
							<div class="mb-8">
								<div class="mb-1 flex justify-start items-center gap-6">
									<div class="text-sm">
										<span class="text-gray-500">2018</span>
										-
										<span class="text-gray-500">2022</span>
									</div>
									<div class="font-semibold">Amazon</div>
								</div>
								<p class="text-gray-500">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</p>
							</div>
							<div>
								<div class="mb-1 flex justify-start items-center gap-6">
									<div class="text-sm">
										<span class="text-gray-500">2022</span>
										-
										<span class="text-gray-500">2023</span>
									</div>
									<div class="font-semibold">Flipkart</div>
								</div>
								<p class="text-gray-500">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</p>
							</div>
						</div>
						<!-- sidebar -->
						<div class="w-4/12 pl-4">
							<h2 class="text-xl font-bold mb-3">Skills</h2>
							<div class="flex flex-wrap gap-1">
								<label
									for=""
									class="bg-gray-900 text-white px-2 py-1 text-xs rounded-full"
									style="line-height: normal;">HTMl</label
								>
								<label for="" class="bg-gray-900 text-white px-2 py-1 text-xs rounded-full"
									>CSS3</label
								>
								<label for="" class="bg-gray-900 text-white px-2 py-1 text-xs rounded-full"
									>SCSS</label
								>
								<label for="" class="bg-gray-900 text-white px-2 py-1 text-xs rounded-full"
									>Tailwind.css</label
								>
								<label for="" class="bg-gray-900 text-white px-2 py-1 text-xs rounded-full"
									>LESS</label
								>
								<label for="" class="bg-gray-900 text-white px-2 py-1 text-xs rounded-full"
									>Javascript</label
								>
								<label for="" class="bg-gray-900 text-white px-2 py-1 text-xs rounded-full"
									>Typescript</label
								>
								<label for="" class="bg-gray-900 text-white px-2 py-1 text-xs rounded-full"
									>Node.js</label
								>
								<label for="" class="bg-gray-900 text-white px-2 py-1 text-xs rounded-full"
									>JSX</label
								>
								<label for="" class="bg-gray-900 text-white px-2 py-1 text-xs rounded-full"
									>React</label
								>
								<label for="" class="bg-gray-900 text-white px-2 py-1 text-xs rounded-full"
									>React-Router</label
								>
								<label for="" class="bg-gray-900 text-white px-2 py-1 text-xs rounded-full"
									>Next.js</label
								>
								<label for="" class="bg-gray-900 text-white px-2 py-1 text-xs rounded-full"
									>Redux</label
								>
								<label for="" class="bg-gray-900 text-white px-2 py-1 text-xs rounded-full"
									>Vue</label
								>
							</div>
							<h2 class="text-xl font-bold mb-3 mt-12">Certification</h2>
							<div class="flex flex-col gap-2">
								<div class="flex items-center justify-between">
									<div class="font-medium">Design School</div>
									<div class="text-gray-500">2015</div>
								</div>
								<div class="flex items-center justify-between">
									<div class="font-medium">Design School</div>
									<div class="text-gray-500">2017</div>
								</div>
								<div class="flex items-center justify-between">
									<div class="font-medium">Design School</div>
									<div class="text-gray-500">2019</div>
								</div>
								<div class="flex items-center justify-between">
									<div class="font-medium">Design School</div>
									<div class="text-gray-500">2021</div>
								</div>
							</div>
							<h2 class="text-xl font-bold mb-3 mt-12">Hobbies</h2>
							<div class="flex flex-col gap-2">
								<div class="flex gap-1 text-gray-500">
									<div>Writing</div>
									<div>Blogging</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- </div>  -->
			</div>
		</div>
	</div>
</div>

<style>
	.page {
		/* width: 210mm; */
		/* height: 297mm; */
	}
</style>
