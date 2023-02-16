import { Ref, ref } from "vue";
import { useApi } from "./api";


interface Photos {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export type UsablePhotos = Promise<{ photos: Ref<Photos | undefined> }>;

export default async function usePhotos(): UsablePhotos {
    const { response: photos, request } = useApi<Photos>("https://jsonplaceholder.typicode.com/photos");
    const loaded = ref(false);

    if (loaded.value == false) {
        await request();
        loaded.value = true;
    };
    return { photos }
}   