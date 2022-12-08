import { useState } from "react";

export const useApi = (apiFunc: any) => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);
    if (!response.ok) return setError(true);
    setError(false);
    setData(response.data);
  };

  return { data, error, loading, request };
};
