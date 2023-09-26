/** @type {Enterspeed.FullSchema} */
export default {
  triggers: function(context) {
    context.triggers('demoCMS', ['contentPage'])
  },
  routes: function (sourceEntity, context) {
    context.url(sourceEntity.url)
  },
  properties: function (sourceEntity, context) {
    return {
      type: sourceEntity.type,
      headline: sourceEntity.properties.pageTitle,
      seoMetaDescription: sourceEntity.properties.seoMetaDescription,
      blocks: sourceEntity.properties.contentBlocks.map((contentBlock) =>
        context.partial(`umbraco-${contentBlock.contentType}`, contentBlock)
      )
    }
  }
}