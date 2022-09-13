export default function handler(req, res) {
  // Clears the preview context.
  res.clearPreviewData();

  // We set the query string to "preview=clear" so we can remove the preview
  // state used that is set session storage. This is used in _app.js in getInitialProps.
  res.redirect("/?preview=clear");
}
