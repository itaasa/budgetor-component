export function formatDateForApi (queryDate: string): string {
    const dateValues = queryDate.split('-');
    return `${dateValues[1]}/${dateValues[2]}/${dateValues[0]}`;
}

export function formatDateToInput(date: Date): string {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let monthString = '';
    monthString = month < 10 ? `0${month}` : month.toString();

    return `${year}-${monthString}-${day}`;
}