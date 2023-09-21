export interface ITableColumns {
    id: string;
    label: string;
    name: string;
    minWidth?: number;
    align?: "right" | "center" | "left" | "inherit" | "justify" | undefined;
    sortField?: boolean;   
}
