'use client'
import s from '../app/delete.module.css'
import { useEffect } from 'react'
import Post from '@/components/Post'

const PostsList = ({ data }) => {
  
  const { allPosts } = data
  
  useEffect(() => {
    console.log(allPosts)
  }, [allPosts])
  
  
  return (
    <section className={s.posts}>
      <h2>Last posts</h2>
      <hr />
      {allPosts && allPosts.map(post => (
        <Post
          title={post.title}
          slug={post.slug}
          cover={post.coverImage}
        />
      ))}
    </section>
  )
}

export default PostsList
