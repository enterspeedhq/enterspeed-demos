/** @type {Enterspeed.FullSchema} */
export default {
  triggers: function(context) {
    context.triggers('demoCMS', ['products'])
  },
  routes: function (sourceEntity, context) {
    context.url(sourceEntity.url)
  },
  properties: function (sourceEntity, context) {
    return {
      type: sourceEntity.type,
      headline: sourceEntity.properties.pageTitle,
      seoMetaDescription: sourceEntity.properties.seoMetaDescription,
      products: context.reference('productListingView').children("type eq 'product'")
    }
  }
}