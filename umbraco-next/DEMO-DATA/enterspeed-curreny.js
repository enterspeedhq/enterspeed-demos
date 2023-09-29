/** @type {Enterspeed.FullSchema} */
export default {
  triggers: function(context) {
    context.triggers('demoCMS', ['products'])
  },
  properties: function (sourceEntity, context) {
    return {
      defaultCurrency: sourceEntity.properties.defaultCurrency[0]
    }
  }
}