export default function formatString(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}