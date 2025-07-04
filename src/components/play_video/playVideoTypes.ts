export type ImgVideoType = {
    video1: string;
    link: string;
    dislike: string;
    share: string;
    save: string;
    jack: string;
    user_profile: string
}

export type VideoApiType = {
    snippet: {
        title: string,
        publishedAt: number,
        description: string,
        channelTitle: string,
        channelId: number
    };
    statistics: {
        viewCount: number,
        likeCount: number,
        commentCount: number
    }
} | null


export type ChannelDataTypes = {
    snippet: {
        thumbnails: { default: { url: string } }
    };
    statistics: { subscriberCount: number }
} | null

export type CommentDataType = {
    snippet: {
        topLevelComment: {
            snippet: { authorProfileImageUrl: string; authorDisplayName: string; textDisplay: string }
            likeCount: number,
            publishedAt: number
        }
    };

}[] | null


export type PlayVideoPropType = {
    videoId: string,

}