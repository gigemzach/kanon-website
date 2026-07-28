---
# Copy this whole file into src/content/insights/ and rename it.
# The FILENAME becomes the URL: my-article.md -> /insights/my-article/
# Use lowercase words separated by hyphens, and include the words someone
# would actually search for.

# The <h1> on the page and the browser tab title. Write it as the question
# a person would type, not as a clever headline.
title: "How X works when Y happens"

# The meta description Google shows in results, and the text that appears
# in link previews. 150-160 characters. This is marketing copy — write it
# last, once you know what the article actually says.
description: "One or two sentences that make someone click."

published: 2026-08-15

# Add this only when you materially revise an older article. It shows a
# "Updated" date on the page and in the Article schema.
# updated: 2027-01-10

# Which side of the practice this belongs to. Drives the "Keep reading"
# links at the bottom of the article.
#   core     - tax prep, filing, bookkeeping
#   advisory - life transitions, equity comp, estate & gift
#   support  - IRS notices and resolution
cluster: advisory

# Slug of a file in src/content/services/. Wires the article to that service
# page in BOTH directions: the article links to the service, and the service
# page lists the article under "Related reading." Don't skip this — it is
# what turns a reader into an inquiry.
#   tax-preparation | bookkeeping | small-business | life-transitions
#   equity-compensation | estate-gift-tax | irs-notices
relatedService: life-transitions

# Optional custom share image. Put the file in public/insights/ and reference
# it here. Leave it out and the site-wide og-image.png is used.
# image: "/insights/my-article.png"

# true = written but not published. It won't appear anywhere on the site,
# won't be in the sitemap, and won't get a URL. Flip to false to publish.
draft: true
---

Open with the reader's actual situation in one or two sentences. No throat-clearing,
no "in today's complex tax environment." Say what happened and why it's a problem.

## Use H2 for the main sections

Regular paragraphs. **Bold** for emphasis, *italic* sparingly.

- Bullets for lists of items
- Keep them parallel

1. Numbered lists when order matters
2. Like a sequence of steps

### H3 for subsections under an H2

> Blockquotes for a point worth pausing on.

Link to [a service page](/services/life-transitions/) when it's genuinely relevant.
Internal links are how readers find the rest of the site.

| Tables | Work too |
| --- | --- |
| Useful for | Comparing two treatments |

## Close with what to do

End with the action. "If this is you, the question worth asking is X" beats
"consult a qualified professional."

---

*An italic closing note works well for scope limits — e.g. clarifying that
something describes tax mechanics rather than investment advice.*
