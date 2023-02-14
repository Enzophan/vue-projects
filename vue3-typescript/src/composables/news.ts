import { Ref, ref } from "vue";
import { useApi } from "./api";


interface Article {
    source: {
        id?: string,
        name: string
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string,
}

interface News {
    status: string,
    totalResults?: number,
    articles?: Article[]
}

export type UsableNews = Promise<{ news: Ref<News | undefined> }>;

export default async function useNews(): UsableNews {
    const { response: news, request } = useApi<News>("https://newsapi.org/v2/top-headlines?country=us&apiKey=27b9c8cd47414f849cdbb4de168b97af");
    const loaded = ref(false);

    if (loaded.value == false) {
        await request();
        loaded.value = true;
    };
    return { news }
}   