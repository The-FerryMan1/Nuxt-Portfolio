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
  {
    title: "Network Pulse",
    description:
      "Network Pulse, is a real-time service monitoring dashboard. It’s designed to track the health and latency of web services using a modern Full-Stack TypeScript approach.",
    img: "Pulse.png",
    stack: [
      "devicon:vuejs",
      "devicon:bun",
      "devicon:sqlite",
      "skill-icons:elysia-dark",
      "devicon:tailwindcss",
    ],
    source: "https://github.com/The-FerryMan1/pulse-web",
    link: "",
  },
  {
    title: "Chaterminal",
    description:
      "Charterminal is a real-time chat application, it uses Elysia for Backend and WebSocket, the application does not have Database, so all the messages only stored in the memory. The UI used in the application is NuxtUI with a custom style with TailwindCSS to achieved Terminal Looking chatbox.",
    img: "chaterminal.png",
    stack: [
      "devicon:vuejs",
      "devicon:bun",
      "skill-icons:elysia-dark",
      "devicon:tailwindcss",
    ],
    source: "https://github.com/The-FerryMan1/pulse-web",
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
  <UPageSection id="projects" title="PROJECTS" :links="proj_link"
    description="Here are my projects, including personal projects I made.">
    <UPageGrid>
      <UPageCard :to="card.link" spotlight v-for="(card, index) in cards" :key="index" v-bind="card">
        <template #header>
          <div class="flex gap-4">
            <UBadge v-if="card.isVibeCoded" variant="solid" color="secondary">VIBE CODED</UBadge>
            <UBadge v-if="!card.link" variant="subtle" color="info">No live preview</UBadge>
          </div>

        </template>

        <div class="inline-block space-x-5 mt-4">
          <UIcon v-for="(stack, index) in card.stack" :key="index" :name="stack" class="size-6" />
        </div>
        <NuxtImg :src="`/img/${card.img}`" :alt="card.title" class="w-full rounded-md" />
        <div class="z-50 mt-auto">
          <UButton :to="card.source" icon="i-lucide-github" color="primary" class="mt-4">View Source
          </UButton>
        </div>

      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>
