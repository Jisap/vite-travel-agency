import { useMutation } from "@tanstack/react-query";
import { insertLead } from "../api/api";
import { Lead } from "../utils/contentTypes";


interface useInsertLeadProps {
  onSuccess: () => void;
  onError: (error: Error) => void;
}

export default function useInsertLead(props: useInsertLeadProps) {

  const mutation = useMutation({
    mutationFn: async (lead: Lead) => {
      insertLead(lead)                       // Si la inserción es existosa, se ejecutará el callback de onSuccess, sino  se ejecutará el de onError
    },
    onSuccess: props.onSuccess,
    onError: props.onError,
  })

  return mutation;
}

