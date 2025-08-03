export  interface ReceitaWSResponse{
     nome: string,
     fantasia: string,
     cnpj: string,
     abertura: string,
     tipo: string,
     natureza_juridica: string,
     logradouro: string,
     numero: string,
     complemento: string,
     bairro: string,
     municipio: string,
     uf: string,
     cep: string,
     telefone: string,
     email: string,
     situacao: string,
     capital_social: string,
}

export interface IBGEEstado{
     id: number;
     sigla: string;
     nome: string;
}

export interface IBGEEstadoResponse {
     data: IBGEEstado[];
     status: number;
}