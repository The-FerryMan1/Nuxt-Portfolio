<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Projects',
    to: '/projects',
   
  },
  {
    label: 'Blog',
    to: '/blog',
  
  },
  {
    label: 'Contact',
    to: '/contact',
   
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
        icon="i-simple-icons-discord"
        color="neutral"
        variant="ghost"
        to="https://go.nuxt.com/discord"
        target="_blank"
        aria-label="Discord"
      />
      <UButton
        icon="i-simple-icons-x"
        color="neutral"
        variant="ghost"
        to="https://go.nuxt.com/x"
        target="_blank"
        aria-label="X"
      />
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/nuxt/nuxt"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>