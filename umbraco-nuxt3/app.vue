<template>
  <div>
    <Html lang="en-US">
      <Head>
        <Title>
          {{ $content().route.headline || $content().route.heroHeader }}
        </Title>
        <Meta
          name="description"
          :content="$content().route.seoMetaDescription"
        />
        <Link rel="manifest" href="/site.webmanifest" />
      </Head>
    </Html>

    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import "@fontsource/henny-penny";
import "@fontsource/gentium-book-basic";
</script>
