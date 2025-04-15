import { type BlogPost } from "../../utils/contentTypes"


interface BlogPostProps {
  post: BlogPost
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <li className="group flex cursor-pointer items-center justify-between gap-x-36">
      <div className="overflow-hidden rounded-[1.5rem]">
        <img 
          src={post.img}
          alt={post.alt}
          className="max-h-108 transform rounded-[1.3rem] transition-all duration-300 ease-in-out group-hover:scale-103"
        />
      </div>
      <div className="mr-11 max-w-195">
        <p className="tracking-6 text-gray-900 mb-4.5 text-[1.25rem] font-medium">
          {post.date}
        </p>
        <h4 className="tracking-6 mb-6 text-[2.75rem] font-medium">
          {post.title}
        </h4>
        <p className="text-grey-800 mb-6 text-lg/13.5">
          {post.summary}
        </p>
        <button className="bg-primary-700 hover:bg-primary-800 cursor-pointer rounded-[.625rem] px-8 py-3.5
        text-lg font-medium text-white transition-all duration-300">
          View More
        </button>
      </div>
    </li>
  )
}

export default BlogPost