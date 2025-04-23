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
            image: "https://placehold.co/300x400",
            details:
                "Especialista em desenvolvimento infantil e adolescente, com foco em medicina preventiva e educação em saúde.",
            education: "Mestrado em Pediatria -",
            specialties: ["Pediatria", "Desenvolvimento Infantil", "Vacinação"],
            languages: ["Português", "Inglês", "Espanhol"],
        },
        {
            name: "Dra. Magda",
            role: "Especialista em Ginecologia",
            image: "https://placehold.co/300x400",
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

<section id="team" class="min-h-screen flex items-center bg-white">
    <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="relative px-12">
            <!-- Navigation Arrows -->
            <button
                class="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                on:click={previousTeamMember}
                aria-label="Previous team member"
            >
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
                class="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                on:click={nextTeamMember}
                aria-label="Next team member"
            >
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
                        class="bg-slate-100 rounded-xl overflow-hidden shadow-lg border-4"
                    >
                        <div class="md:flex">
                            <!-- Image and Basic Info -->
                            <div class="md:w-1/2">
                                <img
                                    src={teamMembers[currentTeamIndex].image}
                                    alt={teamMembers[currentTeamIndex].name}
                                    class="w-full h-96 object-cover"
                                />
                                <div class="p-4 text-black">
                                    <h3 class="text-xl font-bold">
                                        {teamMembers[currentTeamIndex].name}
                                    </h3>
                                    <p>{teamMembers[currentTeamIndex].role}</p>
                                </div>
                            </div>

                            <!-- Desktop Details Section -->
                            <div
                                class="hidden md:block md:w-1/2 p-6 text-black"
                            >
                                <h4 class="text-lg font-semibold mb-4">
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
                            >
                                <span>Ver Detalhes</span>
                                <svg
                                    class="w-6 h-6 transform transition-transform {isTeamDetailsExpanded
                                        ? 'rotate-180'
                                        : ''}"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
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
