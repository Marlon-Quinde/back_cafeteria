export interface ResponseHelperI<T> {
    msj: string;
    tokenValido?: boolean;
    data?: T | null;
    codigo?: number;
    info?: string;
}