<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';
useHead({
  title: 'Roxo - Full-Stack Web Developer',
  meta: [
    {
      name: 'description',
      content: 'Portfolio of Roxo, a full-stack web developer specializing in modern web applications.',
    },
  ],
});
const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: {path: '/', hash: '#hero'},
    active: route.hash === '#hero',
  },
  {
    label: 'About',
    to: {path: '/', hash: '#about'},
    active: route.hash === '#about',
  },
  {
    label: 'Projects',
    to: {path: '/', hash: '#projects'},
    active: route.hash === '#projects',
  },
  {
    label: 'Contact',
    to: {path: '/', hash: '#contact'},
    active: route.hash === '#contact',
  },
]);
</script>
<template>
    <UHeader>
        <template #title>
            <h1>Roxo</h1>
        </template>
        <UNavigationMenu :items="items"  />
        <template #right>
            <UColorModeButton/>
        </template>

        <template #body>
             <UNavigationMenu orientation="vertical" :items="items"  class="-max-2.5" />
        </template>
    </UHeader>

    <UMain>
        <slot/>
    </UMain>

    <UFooter>
    <template #left>
      <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/The-FerryMan1"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>