<template>
  <div>
    <TheHeader />
    <component v-if="$content().route" :is="$content().route.type" />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { connect } from "../enterspeed-connect";
await useAsyncData("content", () => connect());
</script>
