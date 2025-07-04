export const API_KEY: string = "AIzaSyAvgEZz4qWhMgOHH54hxQoI7RpwmfaiYP4" as const

export const valueConverter = (value: number): string | number => {
    if (value >= 1000000) return Math.floor(value / 1000000) + "M";
    else if (value >= 1000) return Math.floor(value / 1000) + "K"
    else return value

}