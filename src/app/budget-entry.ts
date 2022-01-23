export interface BudgetEntry {
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

export interface TypeTotal {
    type: BudgetType,
    total: number,
};