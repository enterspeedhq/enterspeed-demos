const { RemixBrowser } = require("@remix-run/react");

const { hydrateRoot } = require("react-dom/client");

hydrateRoot(document, <RemixBrowser />);
