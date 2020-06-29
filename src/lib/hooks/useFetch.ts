import { useEffect, useState } from "react";

export function useFetch<T>(
  url: string,
): {
  data: T;
  loading: boolean;
  hasError: boolean;
  errorMessage: string | null;
} {
  const [data, setData] = useState<any>(null);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async (): Promise<any> => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setHasError(true);
        setErrorMessage(error.message);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, hasError, errorMessage };
}
