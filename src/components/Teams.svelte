<script>
    let currentTeamIndex = 0;
    let isTeamDetailsExpanded = false;

    function toggleTeamDetails() {
        isTeamDetailsExpanded = !isTeamDetailsExpanded;
    }

    const teamMembers = [
        {
            name: "Dr. Anoar De Lima Jezini",
            role: "Especialista em Pediatria",
            image: "https://github.com/Rodrivilas/Photos/blob/main/A.png?raw=true",
            details:
                "Especialista em desenvolvimento infantil e adolescente, com foco em medicina preventiva e educação em saúde.",
            education: "Mestrado em Pediatria -",
            specialties: ["Pediatria", "Desenvolvimento Infantil", "Vacinação"],
            languages: ["Português", "Inglês", "Espanhol"],
        },
        {
            name: "Dra. Magda",
            role: "Especialista em Ginecologia",
            image: "https://github.com/Rodrivilas/Photos/blob/main/M.png?raw=true",
            details:
                "Especializada em saúde da mulher, com foco em tratamentos hormonais e reprodução assistida.",
            education: "Mestrado em Ginecologia",
            specialties: ["Ginecologia", "Obstetrícia", "Reprodução Humana"],
            languages: ["Português", "Espanhol"],
        },
    ];

    function previousTeamMember() {
        currentTeamIndex =
            (currentTeamIndex - 1 + teamMembers.length) % teamMembers.length;
    }

    function nextTeamMember() {
        currentTeamIndex = (currentTeamIndex + 1) % teamMembers.length;
    }
</script>

<section id="team" class="min-h-screen flex items-center bg-gradient-to-t from-white via-primary to-white">
    <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="relative px-12">
            <!-- Navigation Arrows -->
            <button
                class="absolute left-0 top-1/2 -translate-y-1/2 bg-amber-400 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                on:click={previousTeamMember}
                aria-label="Membro anterior da equipe"
            >
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                     aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>

            <button
                class="absolute right-0 top-1/2 -translate-y-1/2 bg-amber-400 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                on:click={nextTeamMember}
                aria-label="Próximo membro da equipe"
            >
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                     aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>

            <!-- Team Member Card -->
            <div class="flex justify-center">
                <div
                    class="w-full max-w-4xl transform transition-transform duration-300"
                >
                    <div
                        class="bg-amber-500 rounded-xl overflow-hidden shadow-lg border-4 border-amber-500"
                    >
                        <div class="md:flex">
                            <!-- Image and Basic Info -->
                            <div class="md:w-1/2">
                                <img
                                    src={teamMembers[currentTeamIndex].image}
                                    alt={teamMembers[currentTeamIndex].name}
                                    class="w-full object-cover rounded-xl shadow-xl"
                                />
                                <div class="p-4 text-white">
                                    <h3 class="text-xl font-nunito-sans">
                                        {teamMembers[currentTeamIndex].name}
                                    </h3>
                                    <p class="font-roboto-flex">{teamMembers[currentTeamIndex].role}</p>
                                </div>
                            </div>

                            <!-- Desktop Details Section -->
                            <div
                                class="hidden md:block md:w-1/2 p-6 text-white font-roboto-flex"
                            >
                                <h4 class="text-lg font-nunito-sans mb-4 text-white ">
                                    Detalhes Profissionais
                                </h4>
                                <div class="space-y-4">
                                    <p>
                                        {teamMembers[currentTeamIndex].details}
                                    </p>
                                    <div>
                                        <h5 class="font-semibold mb-2">
                                            Formação
                                        </h5>
                                        <p>
                                            {teamMembers[currentTeamIndex]
                                                .education}
                                        </p>
                                    </div>
                                    <div>
                                        <h5 class="font-semibold mb-2">
                                            Especialidades
                                        </h5>
                                        <ul class="list-disc list-inside">
                                            {#each teamMembers[currentTeamIndex].specialties as specialty}
                                                <li>{specialty}</li>
                                            {/each}
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 class="font-semibold mb-2">
                                            Idiomas
                                        </h5>
                                        <ul class="list-disc list-inside">
                                            {#each teamMembers[currentTeamIndex].languages as language}
                                                <li>{language}</li>
                                            {/each}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Mobile Expandable Details -->
                        <div class="md:hidden">
                            <button
                                class="w-full p-4 text-black bg-white hover:bg-amber-100 transition-colors flex justify-between items-center"
                                on:click={toggleTeamDetails}
                                aria-label={isTeamDetailsExpanded ? 'Ocultar detalhes do membro da equipe' : 'Mostrar detalhes do membro da equipe'}
                                aria-expanded={isTeamDetailsExpanded}
                            >
                                <span>Ver Detalhes</span>
                                <svg
                                    class="w-6 h-6 transform transition-transform {isTeamDetailsExpanded
                                        ? 'rotate-180'
                                        : ''}"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {#if isTeamDetailsExpanded}
                                <div class="p-4 text-black bg-white">
                                    <div class="space-y-4">
                                        <p>
                                            {teamMembers[currentTeamIndex]
                                                .details}
                                        </p>
                                        <div>
                                            <h5 class="font-semibold mb-2">
                                                Formação
                                            </h5>
                                            <p>
                                                {teamMembers[currentTeamIndex]
                                                    .education}
                                            </p>
                                        </div>
                                        <div>
                                            <h5 class="font-semibold mb-2">
                                                Especialidades
                                            </h5>
                                            <ul class="list-disc list-inside">
                                                {#each teamMembers[currentTeamIndex].specialties as specialty}
                                                    <li>{specialty}</li>
                                                {/each}
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 class="font-semibold mb-2">
                                                Idiomas
                                            </h5>
                                            <ul class="list-disc list-inside">
                                                {#each teamMembers[currentTeamIndex].languages as language}
                                                    <li>{language}</li>
                                                {/each}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            {/if}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>