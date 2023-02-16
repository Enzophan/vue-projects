import { Ref, ref } from "vue";

interface Count {
    count: Ref,
    increment: () => void
}
export default function useCounter(incrementBy = 1): Count {
    const count = ref(0);

    function increment() {
        count.value += incrementBy;
    }

    return { count, increment }
}