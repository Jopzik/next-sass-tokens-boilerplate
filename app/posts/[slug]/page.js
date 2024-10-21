import { performRequest } from '@/lib/datocms'
import { metaDataFragment, metaTagsFragment, responsiveImageFragment } from '@/lib/fragments'

import { PostPage } from '@/components/Pages/PostPage'
import { setMetaData } from '@/utils/metadata-datocms'

export async function generateStaticParams() {
  const { allPosts } = await performRequest({ query: `{ allPosts { slug } }` })
  
  return allPosts.map(({ slug }) => slug)
}

const PAGE_CONTENT_QUERY = `
  query PostBySlug($slug: String) {
    ${metaDataFragment}
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

export default async function Page({ params }) {
  const pageRequest = getPageRequest(params.slug)
  const data = await performRequest(pageRequest)
  
  return <PostPage data={data} />
}

export async function generateMetadata({}) {
  const pageRequest = getPageRequest()
  const data = await performRequest(pageRequest)
  return setMetaData(data?.post?.title, data?._site?.globalSeo?.siteName)
}
