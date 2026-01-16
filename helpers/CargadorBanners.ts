import request, { gql } from "graphql-request"
import { ImagenBanner } from "model/Types"
import { Platform } from "react-native"

const IP = Platform.OS === "android" ? "10.0.2.2" : "localhost"
const URL = `http://${IP}:3000/graphql`

export async function cargarBanners(): Promise<Array<ImagenBanner>> {
  
  const sentencia = gql`
    {
      allBanners {
        id
        urlFoto
      }
    }
  `
  const respuesta = await request(URL, sentencia)
  return respuesta.allBanners
}