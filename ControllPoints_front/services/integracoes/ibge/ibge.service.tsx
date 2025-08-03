import { IBGEEstadoResponse } from "../../../types/types";
import api from "../../api";
import { URL_BASE } from "../../constantes.service";



const getEstados = async (): Promise<IBGEEstadoResponse> => {
  const response = await api.get(`${URL_BASE.IBGE}/estados`);
  return {
    data: response.data,
    status: response.status,
  }
}

export const ibgeService = {
  getEstados,
};