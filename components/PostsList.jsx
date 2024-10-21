import Post from '@/components/Post'
import s from '../app/delete.module.css'

const PostsList = ({ allPosts }) => {
  return (
    <section className={s.posts}>
      <h2>Last posts</h2>
      <hr />
      {allPosts && allPosts?.map(post => (
        <Post
          key={post.id}
          title={post.title}
          slug={post.slug}
          cover={post.coverImage}
        />
      ))}
    </section>
  )
}

export default PostsList
