import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('insights'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());

  return rss({
    title: 'Kanon Tax & Advisory — Insights',
    description:
      'Plain-language explanations of the tax situations that come up during business growth, equity events, and major life changes.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.published,
      link: `/insights/${p.id}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
