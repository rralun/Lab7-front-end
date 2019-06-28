export class Expense {
    id?: number;
    description: string;
    location: string;
    date: Date;
    numberOfComments: number;
}

export class PaginatedFlowers {
    currentPage: number;
    numberOfPages: number;
    entries: Expense[];
}
