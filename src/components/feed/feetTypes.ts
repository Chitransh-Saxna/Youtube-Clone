export type FeedPropType = { category: number }
export type ThumbnailCardType = {
    thumbnail: string,
    title: string,
    chenalName: string,
    viewAndTime: string
}

export type Items = {
    id: number;
    snippet: {
        publishedAt: string
        categoryId: string;
        thumbnails: { medium: { url: string } };
        title: string,
        channelTitle: string
    },
    statistics: {
        viewCount: number
    }
}[]