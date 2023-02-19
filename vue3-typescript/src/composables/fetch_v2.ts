import { reactive, Ref, ref, toRefs } from "vue";


interface State {
    error: string | null;
    loading: boolean
}

interface Response {
    data: Ref
    error: Ref
    loading: Ref
}

export function useFetch(url: RequestInfo, options?: RequestInit): Response {
    const data = ref(null);
    const state: State = reactive({
        error: null,
        loading: true
    });

    const fetchData = async () => {
        state.loading = true;
        try {
            const res = await fetch(url, options);
            data.value = await res.json();
        } catch (err) {
            //https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript
            let message = 'Unknown Error'
            if (err instanceof Error) message = err.message
            state.error = message;
        } finally {
            state.loading = false;
        }
    };

    fetchData();

    return { data, ...toRefs(state) }
}