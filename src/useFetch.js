import { useState, useEffect } from "react";

export function useFetch( url ) {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        const abortController = new AbortController();
        setLoading(true);
        fetch(url, { signal: abortController.signal })
            .then((response) => response.json())
            .then((items) => setItems(items))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return { items, loading, error };
}