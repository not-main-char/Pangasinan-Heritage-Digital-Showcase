export const SITE_URL = "https://not-main-char.github.io/Pangasinan-Heritage-Digital-Showcase";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const PAGE_PATHS = ["/", "/sites", "/field-notes"];

export function withBasePath(path: string): string {
  if (!path.startsWith("/") || (BASE_PATH && path.startsWith(BASE_PATH))) {
    return path;
  }
  return `${BASE_PATH}${path}`;
}