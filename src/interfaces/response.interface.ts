export interface HttpResponseI<T> {
    data?: T ;
    code: number;
    message: string;
}