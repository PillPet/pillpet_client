export interface Chat {
    author: "USER" | "BOT",
    contentType: "TEXT" | "MIXIN" | "LIST",
    timestamp: number,
    text: string,
    checkbox: CheckBox[]
}

export interface CheckBox {
    displayText: string,
    actionText: string
}