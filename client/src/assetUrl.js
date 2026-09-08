// Root-relative asset paths in eventConfigs.js ('/slides.html',
// '/showcase/foo.png') are written as if the app were served from the domain
// root. On GitHub Pages it is served from /vibe-coding-workshop/ instead, and
// Vite only rewrites imports and index.html — never runtime string literals.
// Rebase them here, at the point of use.
export function assetUrl(path) {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}
