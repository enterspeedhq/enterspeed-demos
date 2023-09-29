/** @type {Enterspeed.FullSchema} */
export default {
  triggers: function(context) {
    context.triggers('postman', ['blogPost'])
  },
  routes: function (sourceEntity, context) {
    context.url(sourceEntity.url)
  },
  actions: function (sourceEntity, context) {
    context.reprocess('blogList').parent()
  },
  properties: function (sourceEntity, context) {
    return {
      url: sourceEntity.url,
      title: sourceEntity.properties.title,
      thumbnail: sourceEntity.properties.featuredImage,
      content: sourceEntity.properties.content,
      excerpt: sourceEntity.properties.excerpt,
      date: sourceEntity.properties.date,
      author: {
        name: sourceEntity.properties.author.name
      }
    }
  }
}