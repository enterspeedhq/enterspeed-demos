/** @type {Enterspeed.PartialSchema} */
export default {
  properties: function (input, context) {
    return {
      text: input.content.text,
      alias: input.contentType,
    }
  }
}