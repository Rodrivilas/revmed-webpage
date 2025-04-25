<script>
	import { onMount } from 'svelte';

	let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<section id="plans" class="relative min-h-screen flex items-center overflow-hidden">
	<!-- Parallax Background -->
	<div
		class="parallax-bg absolute inset-0 z-0 bg-cover"
		style="background-image: url('https://github.com/Rodrivilas/Photos/blob/main/bg1.png?raw=true'); transform: translateY({(y-700) * 0.3}px); background-position: center -50px;"
	></div>

	<!-- Content Overlay -->
	<div class="relative z-10 max-w-7xl mx-auto px-4 py-12 w-full">
		<div class="grid md:grid-cols-2 gap-8">
			<!-- Basic Plan -->
			<div class="bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden">
				<div class="bg-primary p-6">
					<h3 class="text-2xl font-nunito-sans text-white">Basic</h3>
				</div>
				<div class="p-6">
					<img
						src="https://github.com/Rodrivilas/Photos/blob/main/bot.PNG?raw=true"
						alt="Basic plan"
						class="w-full rounded-lg mb-4"
					/>
					<p class="text-gray-700 font-roboto-flex">
						Curso individual de estudo para o Revalida com preparação virtual completa, focada nos conteúdos essenciais do exame.
					</p>
				</div>
			</div>

			<!-- Med Plan -->
			<div class="bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden">
				<div class="bg-primary p-6">
					<h3 class="text-2xl font-nunito-sans text-white">Med</h3>
				</div>
				<div class="p-6">
					<img
						src="https://github.com/Rodrivilas/Photos/blob/main/pro.PNG?raw=true"
						alt="Med plan"
						class="w-full rounded-lg mb-4"
					/>
					<p class="text-gray-700 font-roboto-flex">
						Inclui todos os recursos do Plano Básico, além de acesso à plataforma com checklists cooperativos e enquetes do INEP, para uma preparação ainda mais colaborativa e completa.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* Ensure the background doesn't scroll with the content initially */
	.parallax-bg {
		background-attachment: fixed; /* Creates the basic fixed effect */
		/* The transform style attribute handles the parallax motion */
	}

    /* Optional: Add a subtle overlay to make text more readable */
    .parallax-bg::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.01); /* Adjust opacity as needed */
        z-index: 1;
    }

    /* Ensure content is above the overlay */
    .relative.z-10 {
        position: relative;
        z-index: 2;
    }
</style>
