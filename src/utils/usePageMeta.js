import { useEffect } from 'react';

function updateMetaTag(attribute, attributeValue, content) {
  let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

export function usePageMeta({ title, description, pathname = '/' }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      updateMetaTag('property', 'og:title', title);
    }

    if (description) {
      updateMetaTag('name', 'description', description);
      updateMetaTag('property', 'og:description', description);
    }

    const currentOrigin = typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : 'https://synapse-iris.vercel.app';
    const canonicalUrl = `${currentOrigin}${pathname === '/' ? '' : pathname}`;

    updateMetaTag('property', 'og:url', canonicalUrl);
    updateCanonical(canonicalUrl);
  }, [title, description, pathname]);
}
