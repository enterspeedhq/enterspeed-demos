<script setup>
import { getByUrl } from "../lib/enterspeed";

const route = useRoute();
const url = route.params.slug[0];

const data = await getByUrl(`/${url}`);
const post = data.content;
const status = data.status;

if (status === 404) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}
</script>

<template>
  <div
    class="
      px-4
      py-5
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-lg
      md:px-24
      lg:px-8
    "
  >
    <Head>
      <Title>{{ post.title }}</Title>
      <Meta name="description" :content="post.excerpt" />
    </Head>
    <div class="text-center">
      <h1
        class="
          max-w-lg
          mb-6
          font-sans
          text-3xl
          font-bold
          leading-none
          tracking-tight
          text-gray-900
          sm:text-4xl
          md:mx-auto
        "
      >
        {{ post.title }}
      </h1>
      <div>{{ post.author.name }} - {{ post.date }}</div>
    </div>
    <img
      :src="post.featuredImage"
      :alt="post.title"
      class="rounded shadow-lg my-8 mx-auto"
    />
    <article class="text-gray-700 text-lg blogpost" v-html="post.content" />
    <div
      class="
        inline-block
        mt-4
        mb-8
        text-lg
        font-bold
        text-gray-800
        hover:text-blue-800
      "
    >
      <a href="/">👈 Go back</a>
    </div>
  </div>
</template>