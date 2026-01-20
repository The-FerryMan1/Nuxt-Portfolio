<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui';

const contactLinks = ref<ButtonProps[]>([
  {
    label: "Email",
    icon: "i-lucide-mail",
    color: "primary",
    to: "mailto:mercedroxy@gmail.com"
  },
  {
    label: "GitHub",
    icon: "i-lucide-github",
    to: 'https://github.com/The-FerryMan1'
  },
]);

const contactMethods = ref([
  {
    title: "Email",
    value: "mercedroxy@gmail.com",
    icon: "i-lucide-mail",
  },
  {
    title: "Location",
    value: "Trece Martires City, PH",
    icon: "i-lucide-map-pin",
  },
  {
    title: "Response Time",
    value: "Usually within 24 hours",
    icon: "i-lucide-clock",
  },
]);
</script>

<template>
  <UPageSection
    id="contact"
    title="GET IN TOUCH"
    description="Feel free to reach out. I'm always open to new opportunities and collaborations."
  >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
      <div v-for="method in contactMethods" :key="method.title" class="flex flex-col items-center text-center">
        <Icon :name="method.icon" class="w-8 h-8 text-primary mb-3" />
        <h3 class="font-semibold mb-2">{{ method.title }}</h3>
        <p class="text-gray-400 text-sm">{{ method.value }}</p>
      </div>
    </div>

    <div class="flex justify-center gap-4">
      <UButton
        v-for="link in contactLinks"
        :key="link.label"
        :icon="link.icon"
        :color="link.color || 'neutral'"
        variant="soft"
        :to="link.to"
      >
        {{ link.label }}
      </UButton>
    </div>
  </UPageSection>
</template>
