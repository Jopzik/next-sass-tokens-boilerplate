import s from '../app/delete.module.css'
import { BoxAdd } from 'iconsax-react'
import { performRequest } from '@/lib/datocms'
import { metaTagsFragment, responsiveImageFragment } from '@/lib/fragments'

import PostsList from '@/components/PostsList'

const PAGE_CONTENT_QUERY = `
  {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    page {
      title
      caption
    }
    allPosts(orderBy: date_DESC, first: 20) {
      title
      slug
      excerpt
      date
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
    }
  }

  ${metaTagsFragment}
  ${responsiveImageFragment}
`

function getPageRequest() {
  return { query: PAGE_CONTENT_QUERY }
}

export default async function Page() {
  const pageRequest = getPageRequest()
  const data = await performRequest(pageRequest)
  
  return (
    <>
      <div className={s.container}>
        <BoxAdd
          size="128"
          color="#0573E6"
          variant="Bulk"
        />
        <h1>{data.page.title}</h1>
        <a
          target="_blank"
          href="https://www.alexismora.design/"
        >{data.page.caption}</a>
      </div>
      <PostsList data={data} />
    </>
  )
}
