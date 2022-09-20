<template>
  <div>
    <TheHeader />
    <EsHero />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { connect } from "../enterspeed-connect";
await useAsyncData("content", () => connect());
</script>
