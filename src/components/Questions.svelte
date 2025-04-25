<script>
	import { onMount } from 'svelte';

	let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<section id="questions" class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Parallax Background -->
    <div
        class="parallax-bg absolute inset-0 z-0 bg-cover bg-center"
       style="background-image: url('https://github.com/Rodrivilas/Photos/blob/main/bg2.png?raw=true'); transform: translateY({(y-2700) * 0.3}px);"
    ></div>

    <!-- Content Overlay -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 py-12 w-full">
        <div class="bg-white bg-opacity-80 p-6 md:p-10 rounded-xl shadow-xl space-y-8">
            <!-- Two Column Layout: Image and Text -->
            <div class="grid md:grid-cols-2 gap-8 items-center">
                <!-- Left Column: Image -->
                <div>
                    <img
                        src="https://github.com/Rodrivilas/Photos/blob/main/dbd.png?raw=true" 
                        alt="Explicação do App"
                        class="w-full rounded-lg "
                    />
                </div>
                <!-- Right Column: Text -->
                <div class="space-y-4">
                    <h2 class="text-3xl font-nunito-sans text-primary">Sobre o Nosso Aplicativo</h2>
                    <p class="text-gray-700 font-roboto-flex">
                        Este aplicativo foi desenhado para ajudar você a alcançar seus objetivos de forma eficiente e organizada. Oferecemos uma variedade de ferramentas e recursos para otimizar sua rotina de estudos e preparação.
                    </p>
                    <p class="text-gray-700 font-roboto-flex">
                        Explore nossos planos, acompanhe seu progresso e utilize nossos simulados para testar seus conhecimentos. Nossa plataforma é intuitiva e fácil de usar, permitindo que você foque no que realmente importa: aprender.
                    </p>
                    <!-- WhatsApp Button -->
                    <a
                        href="https://wa.me/5521983786198?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es!" 
                        class="inline-flex items-center bg-green-500 hover:bg-green-700 text-white font-bold text-xl2 py-3 px-6 rounded-full shadow-lg transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Obtenha acesso via WhatsApp"
                    >
                    <i class="fab fa-whatsapp mr-2"></i>
                        Obtenha acesso
                    </a>
                </div>
            </div>

            <!-- YouTube Video Section -->
            <div class="aspect-video w-full">
                 <h3 class="text-2xl font-nunito-sans text-center text-primary mb-4">Veja Como Funciona</h3>
                <iframe
                    class="w-full h-[500px] rounded-lg shadow-lg"
                    src="https://www.youtube.com/embed/your-video-id" 
                    title="YouTube video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
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
        background-color: rgba(0, 0, 0, 0.2); /* Adjust opacity as needed */
        z-index: 1;
    }

    /* Ensure content is above the overlay */
    .relative.z-10 {
        position: relative;
        z-index: 2;
    }
</style>
