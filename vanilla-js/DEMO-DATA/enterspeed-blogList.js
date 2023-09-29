/** @type {Enterspeed.FullSchema} */
export default {
  triggers: function(context) {
    context.triggers('postman', ['blog'])
  },
  routes: function (sourceEntity, context) {
    context.handle('blogList')
  },
  properties: function (sourceEntity, context) {
    return {
      content: context.reference('blogPost').children()
    }
  }
}