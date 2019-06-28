export class Comment {
    id?: number;
    text: string;
    important: boolean;
    expenseId?: number;
}

export class PaginatedComments {
    currentPage: number;
    numberOfPages: number;
    entries: Comment[];
}