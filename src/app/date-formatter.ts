export function formatDateForApi (queryDate: string): string {
    const dateValues = queryDate.split('-');
    return `${dateValues[1]}/${dateValues[2]}/${dateValues[0]}`;
}

export function formateDateToInput(date: Date): string {
    return '';
}