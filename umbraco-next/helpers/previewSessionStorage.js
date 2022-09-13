export function checkPreviewSessionStorage() {
  // Check if we have access to the window object, so we can access session storage.
  const ISSERVER = typeof window === "undefined";

  if (!ISSERVER && sessionStorage.getItem("previewMode") === "enabled") {
    return true;
  }
}

export function managePreviewSessionStorage(previewMode) {
  // Check if we have access to the window object, so we can access session storage.
  const ISSERVER = typeof window === "undefined";

  if (previewMode === "enabled") {
    if (!ISSERVER) sessionStorage.setItem("previewMode", "enabled");
  }

  if (previewMode === "clear") {
    if (!ISSERVER) sessionStorage.removeItem("previewMode");
  }
}
