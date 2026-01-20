<script lang="ts" setup>
  const items = [
  '/img/lazybot.png',
  '/img/lazybotfatsu.png'
]
</script>

<template>
  <UPageSection
    title="ABOUT ME"
    id="about"
    description="Here is my publicy available information."
  >
    <div class="flex flex-col sm:flex-row gap-10">
      <UCarousel
        v-slot="{ item }"
        loop
         :autoplay="{ delay: 2000 }"
        :items="items"
        class="w-full max-w-xs mx-auto rounded-lg"
      >
        <NuxtImg :src="item" width="320" height="400" class="rounded-lg" />
      </UCarousel>
      <USeparator
        orientation="vertical"
        class="h-full"
        type="solid"
        color="primary"
        size="md"
      />
      <div class="flex flex-col gap-6">
        <div>
          <h3 class="text-xl font-semibold mb-2">Who I Am</h3>
          <p class="text-gray-300 leading-relaxed">
            I'm a passionate full-stack web developer with a strong foundation
            in modern web technologies. I specialize in building responsive,
            scalable applications that combine beautiful user interfaces with
            robust backend systems.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-2">My Skills</h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-primary font-medium mb-1">Frontend</p>
              <p class="text-sm text-gray-400">
                Vue.js, TypeScript, Tailwind CSS, Nuxt
              </p>
            </div>
            <div>
              <p class="text-primary font-medium mb-1">Backend</p>
              <p class="text-sm text-gray-400">
                Node.js, Bun, Elysia, Drizzle ORM
              </p>
            </div>
            <div>
              <p class="text-primary font-medium mb-1">Database</p>
              <p class="text-sm text-gray-400">PostgreSQL, SQL Design</p>
            </div>
            <div>
              <p class="text-primary font-medium mb-1">Tools</p>
              <p class="text-sm text-gray-400">Docker, Git, Python</p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-2">What Drives Me</h3>
          <p class="text-gray-300 leading-relaxed">
            I'm constantly learning and experimenting with new technologies. I
            enjoy solving complex problems and creating solutions that make a
            real impact. When I'm not coding, you can find me exploring
            open-source projects or contributing to the developer community.
          </p>
        </div>
      </div>
    </div>
  </UPageSection>
</template>

<style></style>
