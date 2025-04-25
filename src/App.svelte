<script lang="ts">
  import { fly } from "svelte/transition";
  import Home from "./components/Home.svelte";
  import Plans from "./components/Plans.svelte";
  import Teams from "./components/Teams.svelte";
  import Questions from "./components/Questions.svelte";

  let isMenuOpen = false;
  let activeSection = "home";

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function updateActiveSection() {
    const sections = ["home", "plans", "team", "questions"];
    const scrollPosition = window.scrollY;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          activeSection = section;
          break;
        }
      }
    }
  }
</script>

<svelte:window on:scroll={updateActiveSection} />

<main class="min-h-screen bg-gray-50">
  <!-- Header -->
  <nav class="fixed w-full bg-primary text-white shadow-lg z-50 py-5">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img src="src/assets/logo.svg" alt="Logo" class="h-14 w-14" />
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-4">
          <a
            href="#home"
            class="transition-colors duration-200 font-nunito {activeSection ===
            'home'
              ? 'text-red-600 font-bold'
              : 'text-white hover:text-orange-600'}"
          >
            Home
          </a>
          <a
            href="#plans"
            class="transition-colors duration-200 font-nunito {activeSection ===
            'plans'
              ? 'text-red-600 font-bold'
              : 'text-white hover:text-orange-600'}"
          >
            Planos
          </a>
          <a
            href="#team"
            class="transition-colors duration-200 font-nunito {activeSection ===
            'team'
              ? 'text-red-600 font-bold'
              : 'text-white hover:text-orange-600'}"
          >
            Equipe
          </a>
          <a
            href="#questions"
            class="transition-colors duration-200 font-nunito {activeSection ===
            'questions'
              ? 'text-red-600 font-bold'
              : 'text-white hover:text-orange-600'}"
          >
            Dúvidas
          </a>
          <a
            href="revmed.app"
            class="bg-white text-amber-500 px-4 py-2 rounded-full hover:bg-orange-600 hover:text-white"
            aria-label="Acessar plataforma"
          >
            Acesso
         </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            on:click={toggleMenu}
            class="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-orange-600"
            aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={isMenuOpen}
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true" 
            >
              {#if isMenuOpen}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              {:else}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              {/if}
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      {#if isMenuOpen}
        <div class="md:hidden">
          <div class="px-2 pt-3 pb-3 space-y-1">
            <a
              href="#home"
              class="block px-3 py-2 rounded-md {activeSection === 'home'
                ? 'bg-orange-600 text-white'
                : 'text-white hover:bg-orange-500'}"
              on:click={() => (isMenuOpen = false)}
            >
              Home
            </a>
            <a
              href="#plans"
              class="block px-3 py-2 rounded-md {activeSection === 'plans'
                ? 'bg-orange-600 text-white'
                : 'text-white hover:bg-orange-500 '}"
              on:click={() => (isMenuOpen = false)}
            >
              Planos
            </a>
            <a
              href="#team"
              class="block px-3 py-2 rounded-md {activeSection === 'team'
                ? 'bg-orange-600 text-white'
                : 'text-white hover:bg-orange-500 '}"
              on:click={() => (isMenuOpen = false)}
            >
              Equipe
            </a>
            <a
              href="#questions"
              class="block px-3 py-2 rounded-md {activeSection === 'questions'
                ? 'bg-orange-600 text-white'
                : 'text-white hover:bg-orange-500'}"
              on:click={() => (isMenuOpen = false)}
            >
              Dúvidas
            </a>
            <button
              class="w-full text-left px-3 py-2 bg-white text-primary rounded-md hover:bg-orange-500 hover:text-white"
              on:click={() => (isMenuOpen = false)}
              aria-label="Acessar plataforma"
            >
              Acesso
            </button>
          </div>
        </div>
      {/if}
    </div>
  </nav>

  <!-- Content Sections -->
  <div class="pt-16">
    <!-- Home Section -->
    <div transition:fly={{ y: 200, duration: 500 }}>
      <Home />
    </div>
    <!-- Plans Section -->
    <div transition:fly={{ y: 200, duration: 500 }}>
      <Plans />
    </div>
    <!-- Team Section -->
    <div transition:fly={{ y: 200, duration: 500 }}>
      <Teams />
    </div>
    <!-- Questions Section -->
    <div transition:fly={{ y: 200, duration: 500 }}>
      <Questions />
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-nunito-sans mb-4 text-primary">REV MED</h3>
            <p class="text-gray-300 font-roboto-flex">
              Sua jornada para o sucesso no Revalida começa aqui.
            </p>
          </div>
          <div class="space-y-5">
            <div class="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Revmed-Mentoria/61552880525731/#"
                class="text-2xl hover:text-primary"
                aria-label="Visite nossa página no Facebook"
                ><i class="fab fa-facebook"></i></a
              >
              <a
                href="https://www.instagram.com/revmedmentoria/"
                class="text-2xl hover:text-primary"
                 aria-label="Visite nossa página no Instagram"
                ><i class="fab fa-instagram"></i></a
              >
              <a
                href="https://beacons.ai/revmedmentoria?fbclid=PAZXh0bgNhZW0CMTEAAafpMWRmEncqufciCFhScEUPxyxcrJz8WmJK9Va09yTzndSJZRz8YnfF9km1cw_aem_jED4vD30CSQkU4oF4VlrVg"
                class="text-2xl hover:text-primary"
                 aria-label="Visite nosso Beacons"
                ><i class="fa-solid fa-link"></i></a
              >
               <a
                href="https://www.tiktok.com/@revmedmentoria"
                class="text-2xl hover:text-primary"
                aria-label="Visite nossa página no TikTok"
                ><i class="fa-brands fa-tiktok"></i></a
              >
            </div>
            <a
              href="mailto:revmedmentoria@gmail.com"
              class="text-gray-300 hover:text-primary font-roboto-flex"
              ><p>Contato: revmedmentoria@gmail.com</p></a
            >
            <p class="text-gray-300 font-roboto-flex">
              © 2024 REVMED. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</main>
