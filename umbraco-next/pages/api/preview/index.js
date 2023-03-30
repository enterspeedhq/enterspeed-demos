export default function handler(req, res) {
  // If no token is provided an error will occur
  if (req.query.secret === undefined || null) {
    return res.status(401).json({ message: "No token provided" });
  }

  // If the token is invalid an error will occur
  if (req.query.secret !== process.env.ENTERSPEED_PREVIEW_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Set the Preview context to true, so we can access it via getStaticProps
  res.setPreviewData({});


  // If the token is invalid an error will occur
  let path = ""
  if (req.query.slug !== undefined) {
    path = `/${req.query.slug}`;
  }

  // Redirect to root. We set a query string parameter so we can check if the
  // preview is enabled. This is used in _app.js in getInitialProps.
  // Since CSR components can't access the Preview context,
  // we also manage preview state via session storage.
  res.redirect(
    `${path}/?preview=true&secret=${process.env.ENTERSPEED_PREVIEW_SECRET}`
  );
}
