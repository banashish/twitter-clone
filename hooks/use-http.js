const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const request = async (params, callback) => {
        try {
            setIsLoading(true);
            setError(null);
            const request = await fetch(params.url, {
                method: params.method || 'GET',
                body: params.body || undefined,
                headers: params.headers || {}
            })
            if(request.status != 'ok') {
                throw new Error('request failed')
            }
            const response = await request.json();
            callback(response);
            setIsLoading(false);
        }
        catch(err) {
            setError(err);
            setIsLoading(false);
        }
    }

    return [request, isLoading, error]

}

export default useHttp;