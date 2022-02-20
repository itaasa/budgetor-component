export interface BudgetEntry {
    id?: string,
    itemName: string,
    price: number,
    dateBought: string,
    type: BudgetType;
}

export enum BudgetType {
    Gas = 'Gas',
    Want = 'Want',
    Need = 'Need',
    Emergency = 'Emergency',
    Holiday = 'Holiday',
    Groceries = 'Groceries',
};

export enum Interval {
    Weekly = 'Weekly',
    Monthly = 'Monthly',
    Yearly = 'Yearly',
    All = 'All',
};

export interface TypeTotalViewModel {
    type: BudgetType,
    total: number,
    maxTotal?: number,
};
