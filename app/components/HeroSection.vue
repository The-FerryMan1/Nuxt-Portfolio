<script setup lang="ts">
const link = ref([
  {
    label: "Download CV",
    icon: "i-lucide-download",
  },
  {
    label: "Projects",
    icon: "i-lucide-folder",
    trailingIcon: "i-lucide-arrow-right",
  },
]);

</script>

<template>
    <UPageHero
    id="hero"
    :links="link"
    title="I'M ROXO A FULL-STACK WEB DEVELOPER"
    description="I build responsive and interactive web applications using modern technologies like Vue.js, and Node.js/Bun.js."
    orientation="vertical"
  >
    <UPageLogos
      orientation="horizontal"
      marquee
      title=""
      :items="[
        'devicon:vuejs',
        'devicon:nodejs',
        'devicon:bun',
        'devicon:postgresql',
        'devicon:typescript',
        'devicon:tailwindcss',
        'devicon:python',
        'devicon:podman',
        'devicon:docker',
        'devicon:git',
        'devicon:sqlite',
        'skill-icons:elysia-light',
        'logos:hono',
        'logos:bash',
        'catppuccin:drizzle-orm',
        'devicon:redis',
        'devicon:supabase',
      ]"
    />
  </UPageHero>
</template>