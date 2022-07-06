import { onMounted, onUnmounted } from 'vue';

export function useEventListener<K extends keyof WindowEventMap>(
    type: K,
    listener: (this: Window, ev: WindowEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
): void {
    onMounted(() => window.addEventListener(type, listener));

    onUnmounted(() => window.removeEventListener(type, listener));
}

//利用K extends keyof WindowEventMap将参数type:K限制在WindowEventMap的键值列表，
//listener中的参数ev限定为WindowEventMap对应K相应的值
