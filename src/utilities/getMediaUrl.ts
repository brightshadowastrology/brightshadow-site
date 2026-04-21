// Returns the media URL with an optional cache-busting query param.
// Vercel Blob URLs are absolute (https://); local fallbacks are relative (/media/...).
// Both pass through unchanged — next/image handles them via remotePatterns or localPatterns.
export const getMediaUrl = (
  url: string | null | undefined,
  cacheTag?: string | null,
): string => {
  if (!url) return "";

  if (cacheTag && cacheTag !== "") {
    cacheTag = encodeURIComponent(cacheTag);
  }

  return cacheTag ? `${url}?${cacheTag}` : url;
};
