export function PostPage({ data }) {
  const { post } = data
  
  return (
    <section>
      <h1>{post.title}</h1>
      <img
        src={post.coverImage.responsiveImage.src}
      />
    </section>
  )
}
