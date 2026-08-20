/** Static-export configuration for deployment to GitHub Pages (or any static host). */
// This must match your GitHub repository name exactly (case-sensitive).
// Example: if your repo is github.com/Taluban-Rico/pangasinan-heritage,
// set repoName = "pangasinan-heritage".
const repoName = "pangasinan-heritage-digital-showcase";

// Only apply the "/repo-name" subpath when building for GitHub Pages deployment
// (the GitHub Actions workflow sets GITHUB_PAGES=true). Local `npm run dev` and
// local `npm run build` stay at the root, so nothing changes for local testing.
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
};

export default nextConfig;
