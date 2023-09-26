/** @type {Enterspeed.FullSchema} */
export default {
  triggers: function(context) {
    context.triggers('demoCMS', ['contentPage', 'products'])
  },
  actions: function (sourceEntity, context) {
    context.reprocess('navigation').parent()
    context.reprocess('navigationItem').parent()
  },
  properties: function (sourceEntity, context) {
    return {
      type: sourceEntity.type,
      href: sourceEntity.url,
      label: sourceEntity.properties.pageTitle,
      sortOrder: sourceEntity.properties.metaData.sortOrder,
      children: context.reference('navigationItem').children()
    }
  }
}