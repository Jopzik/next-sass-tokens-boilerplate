import { toNextMetadata } from 'react-datocms'

import { performRequest } from '@/lib/datocms'
import { metaTagsFragment, responsiveImageFragment } from '@/lib/fragments'

import { PostPage } from '@/components/Pages/PostPage'

export async function generateStaticParams() {
  const { allPosts } = await performRequest({ query: `{ allPosts { slug } }` })
  
  return allPosts.map(({ slug }) => slug)
}

const PAGE_CONTENT_QUERY = `
  query PostBySlug($slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    post(filter: {slug: {eq: $slug}}) {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      title
      slug
      content {
        value
        blocks {
          __typename
          ...on ImageBlockRecord {
            id
            image {
              responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                ...responsiveImageFragment
              }
            }
          }
        }
      }
      date
      ogImage: coverImage{
        url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
      }
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
    }
  }

  ${responsiveImageFragment}
  ${metaTagsFragment}
`

function getPageRequest(slug) {
  return { query: PAGE_CONTENT_QUERY, variables: { slug } }
}

export async function generateMetadata({ params }) {
  const { site, post } = await performRequest(getPageRequest(params.slug))
  
  return toNextMetadata([...site.favicon, ...post.seo])
}

export default async function Page({ params }) {
  
  const pageRequest = getPageRequest(params.slug)
  const data = await performRequest(pageRequest)
  
  
  return <PostPage data={data} />
}
