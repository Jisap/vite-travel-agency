import { type BlogPost } from "../../utils/contentTypes"


interface BlogPostProps {
  post: BlogPost
}

const BlogPost = (post: BlogPostProps) => {
  return (
    <li>
      post
    </li>
  )
}

export default BlogPost