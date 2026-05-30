export function generateRandomId(prefix) {
    return `${prefix}_${Math.floor(Math.random() * 1000000)}`;
}