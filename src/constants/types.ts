export enum author {
    "USER",
    "BOT"
}

export enum contentType {
    "TEXT",
    "MIXIN",
    "LIST"
}

export interface Chat {
    author: author,
    contentType: contentType,
    timestamp: number,
    text: string,
    checkbox: CheckBox[]
}

export interface CheckBox {
    displayText: string,
    actionText: string
}

export enum InfoType {
    "TEXTWITHIMG",
    "TEXT",
    "CARDS",
    "MAPS"
}

export interface Info {
    title: string,
    content: {
        type: InfoType,
        text?: InfoText,
        textWithImg?: InfoTextWithImage,
        cards?: InfoCards[],
        map?: InfoMap
    }
}

export interface InfoText {
    markdown: string
}

export interface InfoTextWithImage {
    imgUrl: string,
    markdown: string
}

export interface InfoCards {
    id: number,
    url: string,
    title: string,
    summary: string,
    timestamp: number
}

export interface InfoMap {
    name: string,
    tel: number,
    postNo: number,
    address: string,
    location: {
        x: number,
        y: number
    }
}