import { ref, onMounted, onUnmounted } from 'vue';
import type { Ref } from "vue";

interface Coordinate {
    x: Ref
    y: Ref
}


export function useMouse(): Coordinate {
    const x = ref(0);
    const y = ref(0);

    // a composable can update its managed state over time.
    function update(event: MouseEvent) {
        x.value = event.pageX
        y.value = event.pageY
    }

    // a composable can also hook into its owner component's
    // lifecycle to setup and teardown side effects.
    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))

    return { x, y }
}

// interface CallbackOneParam<T1, T2 = void> {
//     (param1: T1): T2;
// }

// export function useEventListener(target: Window, event: string, callback: CallbackOneParam<string>): void {
//     // if you want, you can also make this
//     // support selector strings as target
//     onMounted(() => target.addEventListener(event, callback))
//     onUnmounted(() => target.removeEventListener(event, callback))
// }