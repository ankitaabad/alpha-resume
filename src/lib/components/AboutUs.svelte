<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import Linkedin from 'svelte-material-icons/Linkedin.svelte';
	import Twitter from 'svelte-material-icons/Twitter.svelte';
	import Github from 'svelte-material-icons/Github.svelte';
	import Youtube from 'svelte-material-icons/Youtube.svelte';
	import ArrowLeft from 'svelte-material-icons/ArrowLeft.svelte';

	import { aboutus } from '$lib/store';

	let versha = './versha.webp';
	let arpita = './arpita.webp';
	let hemant = './hemant.webp';
	let pawan = './pawan.webp';
	let hitesh = './hitesh.webp';
	let ankit = './ankit.webp';
</script>

<div
	class="flex flex-col items-start justify-start w-full sticky top-0 left-0 px-6 pt-8 pb-6 bg-gray-100 gap-2"
>
	<button
		on:click={() => ($aboutus = !$aboutus)}
		class="flex items-center gap-2 text-blue-700 mb-4"
	>
		<ArrowLeft class="text-xl text-blue-700 hover:text-blue-700 transition" />
		<span class="font-medium">My Resume</span>
	</button>
	<h1 class="text-2xl font-semibold text-gray-900">Meet Our Team</h1>
	<p class="max-w-[75%] text-sm text-gray-500">
		We are a group of passionate and driven individuals who have come together to turn our vision
		into a reality.
	</p>
</div>
<div class="px-8">
	<div class="grid grid-cols-4 gap-8 ">
		<div
			class="bg-white shadow p-5 rounded-md flex flex-col items-center border border-solid border-white hover:border-blue-700 transition"
		>
			<div class="profile mb-4">
				<img src={ankit} alt="Ankit Aabad" class="rounded-full w-28" />
			</div>
			<div class="name mb-2 font-medium text-base text-gray-500">Ankit Aabad</div>
			<div>
				<ul class="flex gap-3">
					<li>
						<a
							href="https://medium.com/@ankit-aabad"
							class="block"
							title="Medium"
							rel="noreferrer"
							target="_blank"
						>
							<svg
								viewBox="0 0 1043.63 592.71"
								class="text-xl text-gray-500 hover:text-blue-700 transition w-5 h-5"
								><g data-name="Layer 2"
									><g data-name="Layer 1"
										><path
											class="fill-gray-500 hover:fill-blue-700 "
											d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"
										/></g
									></g
								></svg
							>
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/ankit-aabad/"
							class="block"
							title="Linkedin"
							rel="noreferrer"
							target="_blank"
						>
							<Linkedin class="text-xl text-gray-500 hover:text-blue-700 transition" />
						</a>
					</li>
					<li>
						<a
							href="https://www.youtube.com/@ankit8268"
							rel="noreferrer"
							target="_blank"
							title="Youtube"
						>
							<Youtube class="text-xl text-gray-500 hover:text-blue-700 transition" />
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div
			class="bg-white shadow p-5 rounded-md flex flex-col items-center border border-solid border-white hover:border-blue-700 transition"
		>
			<div class="profile mb-4">
				<img src={arpita} alt="Arpita Garg" class="rounded-full w-28" />
			</div>
			<div class="name mb-2 font-medium text-base text-gray-500">Arpita Garg</div>
			<div>
				<ul class="flex gap-3">
					<li>
						<a
							href="https://www.linkedin.com/in/gargarpita4"
							class="block"
							title="Linkedin"
							rel="noreferrer"
							target="_blank"
						>
							<Linkedin class="text-xl text-gray-500 hover:text-blue-700 transition" />
						</a>
					</li>
					<li>
						<a
							href="https://github.com/Arpita1311-cts"
							class=""
							title="Github"
							rel="noreferrer"
							target="_blank"
						>
							<Github class="text-xl text-gray-500 hover:text-blue-700 transition" />
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div
			class="bg-white shadow p-5 rounded-md flex flex-col items-center border border-solid border-white hover:border-blue-700 transition"
		>
			<div class="profile mb-4">
				<img
					src={hemant}
					alt="Hemant Manwani
                                    "
					class="rounded-full w-28"
				/>
			</div>
			<div class="name mb-2 font-medium text-base text-gray-500">Hemant Manwani</div>
			<div>
				<ul class="flex gap-3">
					<li>
						<a
							href="https://www.linkedin.com/in/hemant-manwani-1a035478"
							class="block"
							title="Linkedin"
							rel="noreferrer"
							target="_blank"
						>
							<Linkedin class="text-xl text-gray-500 hover:text-blue-700 transition" />
						</a>
					</li>
					<li>
						<a
							href="https://twitter.com/Hemant404"
							class="block"
							title="Twitter"
							rel="noreferrer"
							target="_blank"
						>
							<Twitter class="text-xl text-gray-500 hover:text-blue-700 transition" />
						</a>
					</li>
					<li>
						<a
							href="https://github.com/hemant404"
							class=""
							title="Github"
							rel="noreferrer"
							target="_blank"
						>
							<Github class="text-xl text-gray-500 hover:text-blue-700 transition" />
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div
			class="bg-white shadow p-5 rounded-md flex flex-col items-center border border-solid border-white hover:border-blue-700 transition"
		>
			<div class="profile mb-4">
				<img src={hitesh} alt="ankit" class="rounded-full w-28" />
			</div>
			<div class="name mb-2 font-medium text-base text-gray-500">Hitesh Kumawat</div>
			<div>
				<ul class="flex gap-3">
					<li>
						<a
							href="https://www.linkedin.com/in/hitesh-kumawat-01548466/"
							class="block"
							title="Linkedin"
							rel="noreferrer"
							target="_blank"
						>
							<Linkedin class="text-xl text-gray-500 hover:text-blue-700 transition" />
						</a>
					</li>
					<li>
						<a
							href="https://twitter.com/hiteshkrkumawat"
							class="block"
							title="Twitter"
							rel="noreferrer"
							target="_blank"
						>
							<Twitter class="text-xl text-gray-500 hover:text-blue-700 transition" />
						</a>
					</li>
					<li>
						<a
							href="https://github.com/Hiteshkumawat"
							class=""
							title="Github"
							rel="noreferrer"
							target="_blank"
						>
							<Github class="text-xl text-gray-500 hover:text-blue-700 transition" />
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div
			class="bg-white shadow p-5 rounded-md flex flex-col items-center border border-solid border-white hover:border-blue-700 transition"
		>
			<div class="profile mb-4">
				<img src={pawan} alt="Pawan Dixit" class="rounded-full w-28" />
			</div>
			<div class="name mb-2 font-medium text-base text-gray-500">Pawan Dixit</div>
			<div>
				<ul class="flex gap-3">
					<li>
						<a
							href="https://www.linkedin.com/in/pawan-dixit-04532782"
							class="block"
							title="Linkedin"
							rel="noreferrer"
							target="_blank"
						>
							<Linkedin class="text-xl text-gray-500 hover:text-blue-700 transition" />
						</a>
					</li>
					<li>
						<a
							href="https://twitter.com/ImPawanDixit"
							class="block"
							title="Twitter"
							rel="noreferrer"
							target="_blank"
						>
							<Twitter class="text-xl text-gray-500 hover:text-blue-700 transition" />
						</a>
					</li>
					<li>
						<a
							href="https://github.com/PawanDixit23"
							class=""
							title="Github"
							rel="noreferrer"
							target="_blank"
						>
							<Github class="text-xl text-gray-500 hover:text-blue-700 transition" />
						</a>
					</li>
					<li>
						<a
							href="https://medium.com/@e.pawandixit"
							class="block"
							title="Medium"
							rel="noreferrer"
							target="_blank"
						>
							<svg
								viewBox="0 0 1043.63 592.71"
								class="text-xl text-gray-500 hover:text-blue-700 transition w-5 h-5"
								><g data-name="Layer 2"
									><g data-name="Layer 1"
										><path
											class="fill-gray-500 hover:fill-blue-700 "
											d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"
										/></g
									></g
								></svg
							>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div
			class="bg-white shadow p-5 rounded-md flex flex-col items-center border border-solid border-white hover:border-blue-700 transition"
		>
			<div class="profile mb-4">
				<img src={versha} alt="Versha Gupta" class="rounded-full w-28" />
			</div>
			<div class="name mb-2 font-medium text-base text-gray-500">Versha Gupta</div>
			<div>
				<ul class="flex gap-3">
					<li>
						<a
							href="https://www.linkedin.com/in/versha-gupta-4865b339/"
							class="block"
							title="Linkedin"
							rel="noreferrer"
							target="_blank"
						>
							<Linkedin class="text-xl text-gray-500 hover:text-blue-700 transition" />
						</a>
					</li>
					<li>
						<a
							href="https://twitter.com/Vershaa_Gupta"
							class="block"
							title="Twitter"
							rel="noreferrer"
							target="_blank"
						>
							<Twitter class="text-xl text-gray-500 hover:text-blue-700 transition" />
						</a>
					</li>
					<li>
						<a
							href="https://github.com/VershaGupta"
							class=""
							title="Github"
							rel="noreferrer"
							target="_blank"
						>
							<Github class="text-xl text-gray-500 hover:text-blue-700 transition" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
