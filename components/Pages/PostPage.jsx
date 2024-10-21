
'use client'
import { useEffect } from 'react'


export function PostPage({ data }) {
  const { post } = data
  
  useEffect(() => {
    console.log(data)
  }, [data])
  
  return (
    <section>
      <h1>{post.title}</h1>
      <img
        src={post.coverImage.responsiveImage.src}
      />
    </section>
  )
}
