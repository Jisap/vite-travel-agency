import { useQuery } from "@tanstack/react-query";
import { getLocations } from "../api/api";


export default function useQueryLocations() {

  const { 
    data: locations,
    error,
    isLoading } = useQuery({
      queryKey: ["locations"],
      queryFn: getLocations
    })

    return {
      locations,
      error,
      isLoading
    }
}