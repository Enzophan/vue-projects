import { isRef, Ref, ref, watchEffect } from "vue";

interface Response {
    data: Ref
    error: Ref
}
export function useFetch(url: RequestInfo): Response {
    const data = ref();
    const error = ref();

    function doFetch() {
        data.value = null;
        error.value = null;
        fetch(url)
            .then((res) => res.json())
            .then((json) => (data.value = json))
            .catch((err) => (error.value = err))
    }

    if (isRef(url)) {
        watchEffect(doFetch)
    } else {
        doFetch()
    };

    return { data, error }
}