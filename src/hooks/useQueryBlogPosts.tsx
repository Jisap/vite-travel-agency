import { useQuery } from "@tanstack/react-query"
import { getBlogPosts } from "../api/api"


const useQueryBlogPosts = () => {
  
  const { 
    data: blogPosts, 
    error, 
    isLoading
  } = useQuery({
    queryKey: ["BlogPosts"],
    queryFn: getBlogPosts,
  });

  return {
    blogPosts,
    error,
    isLoading
  }
}

export default useQueryBlogPosts