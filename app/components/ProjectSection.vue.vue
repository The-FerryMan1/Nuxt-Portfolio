<script lang="ts" setup>
  const cards = ref([
  {
    title: "LinkShortener",
    description:
      "A URL shortening service that allows users to create short, manageable links.",
    img: "LINKSHOTENER.png",
    stack: [
      "devicon:vuejs",
      "devicon:bun",
      "devicon:postgresql",
      "catppuccin:drizzle-orm",
      "skill-icons:elysia-light",
      "devicon:tailwindcss",
    ],
    source: "https://github.com/The-FerryMan1/short-link-api",
    link: "",
  },
  {
    title: "IP Calculator Tool",
    isVibeCoded: true,
    description:
      "A Python-based IP calculator tool that helps users perform subnetting and IP address calculations easily. It uses CustomTkinter for the GUI and ipaddress module for IP calculations.",
    img: "python_ip_calc.png",
    stack: ["devicon:python"],
    source: "https://github.com/The-FerryMan1/ip_calculator",
    link: "",
  },
]);

const proj_link = ref([
  {
    label: "View GitHub",
    to: "https://github.com/The-FerryMan1",
    icon: "i-lucide-github",
  },
]);
</script>

<template>
     <UPageSection
     id="projects"
    title="PROJECTS"
    :links="proj_link"
    description="Here are my projects, including personal projects I made."
  >
    <UPageGrid>
      <UPageCard
        
        :to="card.link"
        spotlight
        v-for="(card, index) in cards"
        :key="index"
        v-bind="card"
      >
        <template #header>
          <UBadge v-if="card.isVibeCoded" variant="solid">VIBE CODED</UBadge>
        </template>

        <div class="inline-block space-x-5 mt-4">
          <UIcon
            v-for="(stack, index) in card.stack"
            :key="index"
            :name="stack"
            class="size-6"
          />
        </div>
        <NuxtImg
          :src="`/img/${card.img}`"
          :alt="card.title"
          class="w-full rounded-md"
        />
        <div class="z-50">
          <UButton
            :to="card.source"
            icon="i-lucide-github"
            color="primary"
            class="mt-4"
            >View Source
          </UButton>
        </div>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>


