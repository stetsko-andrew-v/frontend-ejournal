import {useCallback, useState} from "react";

interface IError {
  message?: string;
}

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<IError>({});

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true);

    // Mock login

    if (body.username !== 'admin' && body.password !== 'admin') {
      setError({message: 'Сліпий, чи просто прикалуєшся, попуск??'})
      setLoading(false)
      throw new Error("stop")
    }

    // if (body) {
    //   body = JSON.stringify(body);
    //   headers['Content-Type'] = 'application/json';
    // }

    // const res = await fetch('http://localhost:8080' + url, {method, body, headers});
    //
    //

    // const data = await res.json();
    //
    // if (!res.ok) {
    //   setError({message: data.error || 'Жопа, АПІ накрилось'});
    //   setLoading(false);
    //   throw new Error("stop")
    // }

    return {token: 'asdasd'};
    
  }, [setLoading, setError])

  return { error, loading, request };
}

export default useHttp;