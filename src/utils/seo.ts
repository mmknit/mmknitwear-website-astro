export const siteUrl = 'https://www.mmknitwear.com';

export function ld(obj: unknown): string {
  return `<script type="application/ld+json">${JSON.stringify(obj)}</script>`;
}

export function breadcrumb(name: string, path: string): unknown {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name, item: siteUrl + path },
    ],
  };
}
