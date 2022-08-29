<script>
  export let data;

  const post = data.content;
</script>

<svelte:head>
  <title>{post.title}</title>
  <meta name="description" content={post.excerpt} />
</svelte:head>

<div
  class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8"
>
  <div class="text-center">
    <h1
      class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
    >
      {post.title}
    </h1>
    <div>
      {post.author.name} - {post.date}
    </div>
  </div>
  <img
    src={post.featuredImage}
    alt={post.title}
    class="rounded shadow-lg my-8 mx-auto"
  />
  <article class="text-gray-700 text-lg blogpost">
    {@html post.content}
  </article>
  <div
    class="block mt-4 mb-8 text-lg font-bold text-gray-800 hover:text-blue-800"
  >
    <a href="/">👈 Go back</a>
  </div>
</div>
