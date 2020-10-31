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