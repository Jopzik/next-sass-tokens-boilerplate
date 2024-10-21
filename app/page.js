import HomePage from '@/components/Pages/HomePage'
import { performRequest } from '@/lib/datocms'
import { metaDataFragment, responsiveImageFragment, metaTagsFragment } from '@/lib/fragments'
import { setMetaData } from '@/utils/metadata-datocms'

const PAGE_CONTENT_QUERY = `
  {
    ${metaDataFragment}
    homePage {
      title
      caption
      seo {
        title
        description
      }
    }
    allPosts {
      title
      slug
      id
      coverImage {
        responsiveImage {
          ...responsiveImageFragment
        }
      }
    }
  }
  ${responsiveImageFragment}
`

function getPageRequest() {
  return { query: PAGE_CONTENT_QUERY }
}

export default async function Page() {
  const pageRequest = getPageRequest()
  const data = await performRequest(pageRequest)
  
  return <HomePage data={data} />
}

export async function generateMetadata({}) {
  const pageRequest = getPageRequest()
  const data = await performRequest(pageRequest)
  const seo = data?.homePage?.seo
  return setMetaData(seo?.title, data?._site?.globalSeo?.siteName, seo.description)
}
