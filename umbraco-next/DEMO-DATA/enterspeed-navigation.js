/** @type {Enterspeed.FullSchema} */
export default {
  triggers: function(context) {
    context.triggers('demoCMS', ['home'])
  },
  routes: function (sourceEntity, context) {
    context.handle('navigation')
  },
  properties: function (sourceEntity, context) {
    return {
      navigationItems: context.reference('navigationItem').children()
    }
  }
}