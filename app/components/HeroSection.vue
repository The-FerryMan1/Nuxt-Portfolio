<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';

const link = ref<ButtonProps[]>([
  {
    label: "Download CV",
    icon: "i-lucide-download",
    onClick: () => {
      window.open('/documents/Roxy-Villalino-Merced-Resume-20260110.pdf', '_blank');
    },
  },
  {
    label: "Projects",
    icon: "i-lucide-folder",
    color: 'neutral',
    variant: 'outline',
     to: {hash: '#projects'}
  },
  {
    label: "Contact Me",
    icon: "i-lucide-mail",
    color: 'neutral',
    variant: 'outline',
    trailingIcon: "i-lucide-arrow-right",
     to: {hash: '#contact'}
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
    <template #title>
        <h1 class="font-['Inter']">I'M ROXO A <span class="font-['Poppins'] italic text-primary">FULL-STACK</span> WEB DEVELOPER</h1>
    </template>

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