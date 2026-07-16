/**
 * Combined RSS feed at /rss.xml
 *
 * Emits a single feed of all non-draft Problem Notes and Case Studies,
 * sorted newest first. Draft filtering reuses filterDrafts() semantics
 * (drafts excluded in production builds, visible in dev), matching the
 * list pages. Links use directory-format URLs (trailing slash).
 */
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { filterDrafts } from '@/lib/content';

export async function GET(context) {
  const problemNotes = filterDrafts(await getCollection('problem-notes')).map(
    (entry) => ({ entry, prefix: 'problem-notes' })
  );
  const caseStudies = filterDrafts(await getCollection('case-studies')).map(
    (entry) => ({ entry, prefix: 'case-studies' })
  );

  const items = [...problemNotes, ...caseStudies]
    .sort((a, b) => b.entry.data.date.getTime() - a.entry.data.date.getTime())
    .map(({ entry, prefix }) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: `/${prefix}/${entry.slug}/`,
    }));

  return rss({
    title: 'Saurabh Sarin',
    description:
      'Problem-first thinking. A public workspace for thinking through complex, ambiguous problems.',
    site: context.site,
    items,
  });
}
