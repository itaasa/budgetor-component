export interface BudgetEntry {
  _id?: string;
  itemName: string;
  price: number;
  dateBought: string;
  type: BudgetType;
}

export enum BudgetType {
  Gas = 'Gas',
  Want = 'Want',
  Need = 'Need',
  Emergency = 'Emergency',
  Holiday = 'Holiday',
  Groceries = 'Groceries',
  CarMaintenance = 'CarMaintenance',
  WishList = 'WishList',
}

export enum Interval {
  Weekly = 'Weekly',
  Monthly = 'Monthly',
  Yearly = 'Yearly',
  All = 'All',
}

export interface TypeTotalViewModel {
  type: BudgetType;
  total: number;
  maxTotal?: number;
}

export interface IntervalTotal {
  interval: Interval;
  spent: number;
  budget: number;
  net: number;
  date: string;
  nonEmergencySpent: number;
  nonEmergencyNet: number;
}
