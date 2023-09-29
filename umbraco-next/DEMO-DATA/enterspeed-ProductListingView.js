/** @type {Enterspeed.FullSchema} */
export default {
  triggers: function(context) {
    context.triggers('demoCMS', ['product'])
  },
  properties: function (sourceEntity, context) {
    return {
      href: sourceEntity.url,
      name: sourceEntity.properties.productName,
      description: sourceEntity.properties.description,
      price: sourceEntity.properties.price,
      currency: context.reference('currency').parent()
    }
  }
}