export const formatDateToYMD = (date) => {
    if (!(date instanceof Date) || isNaN(date)) {
        throw new Error("Invalid Date object");
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 0-indexed
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}