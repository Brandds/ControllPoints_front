import { ReceitaWSResponse } from "../../types/types";
import api from "../api";
import { URL_BASE } from "../constantes.service";


const buscaCNPJ = async (cnpj: string): Promise<ReceitaWSResponse> => {
  const url = `${URL_BASE.EMPRESA}/buscaCNPJ/${cnpj}`;
  const response = await api.post<ReceitaWSResponse>(url)
  return response.data;
}

export const empresaService = {
  buscaCNPJ
}