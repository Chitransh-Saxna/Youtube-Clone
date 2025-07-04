export type RecommendedPropType = {
    categoryId: number
}

export type RecommendedVideoType = {
        id:string;

    snippet: {
        thumbnails: {
            medium: {
                url: string
            }
        };
        title:string;
        channelTitle:string,
        categoryId:number
        publishedAt:number
    };
    statistics:{
        viewCount:number
    }
}[]