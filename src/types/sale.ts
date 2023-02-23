export type Sale = {
    id: number;
    data: string;
    eventos_hora: number;
    horas_uso: string;
    pontuacao: string;
}

export type SalePage = {
    content?: Sale[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
}

export type SaleSum = {
    data: string;
    eventos_hora: number;
}

export type SaleSuccess = {
    data: string;
    eventos_hora: number;
}