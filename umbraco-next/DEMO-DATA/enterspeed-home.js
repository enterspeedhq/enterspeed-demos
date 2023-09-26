/** @type {Enterspeed.FullSchema} */
export default {
  triggers: function(context) {
    context.triggers('demoCMS', ['home'])
  },
  routes: function (sourceEntity, context) {
    context.url(sourceEntity.url)
  },
  properties: function (sourceEntity, context) {
    return {
      type: sourceEntity.type,
      heroHeader: sourceEntity.properties.heroHeader,
      heroDescription: sourceEntity.properties.heroDescription,
      heroCTACaption: sourceEntity.properties.heroCTACaption,
      heroCTALink: context.reference('link').byOriginId(sourceEntity.properties.HeroCtalink)
    }
  }
}