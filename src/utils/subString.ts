export default function subString(text: string, end: number) {
    if (text.length > end) {
        text = text.substring(0, end) + "..."
    }
    return text
}