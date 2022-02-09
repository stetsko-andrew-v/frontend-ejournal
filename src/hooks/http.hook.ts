import {useCallback, useState} from "react";

interface IError {
  message?: string;
}

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<IError>({});

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true);
    if (body) {
      body = JSON.stringify(body);
      headers['Content-Type'] = 'application/json';
    }

    const res = await fetch('http://localhost:8080' + url, {method, body, headers});

    
    try {
      const data = await res.json();

      if (!res.ok) {
        setError({message: data.error || 'Жопа, АПІ накрилось'});
        setLoading(false);
        throw new Error("stop")
      }
  
      return data;
  
    } catch(e) {
      setLoading(false);
      return {}
    }
    
  }, [setLoading, setError])

  return { error, loading, request };
}

export default useHttp;