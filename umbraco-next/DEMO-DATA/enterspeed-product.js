/** @type {Enterspeed.FullSchema} */
export default {
  triggers: function(context) {
    context.triggers('demoCMS', ['product'])
  },
  routes: function (sourceEntity, context) {
    context.url(sourceEntity.url)
  },
  properties: function (sourceEntity, context) {
    return {
      type: sourceEntity.type,
      href: sourceEntity.url,
      name: sourceEntity.properties.productName,
      description: sourceEntity.properties.description,
      price: sourceEntity.properties.price,
      currency: context.reference('currency').parent()
    }
  }
}