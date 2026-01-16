import request, { gql } from "graphql-request"
import { Peliculas } from "model/Types"
import { Platform } from "react-native"

const IP = Platform.OS === "android" ? "10.0.2.2" : "localhost"
const URL = `http://${IP}:3000/graphql`

export async function cargarPeliculas(): Promise<Peliculas> {
  
  const sentencia = gql`
    {
      allPeliculas {
        id
        titulo
        urlFoto
      }
    }
  `
  const respuesta = await request(URL, sentencia)
  return respuesta.allPeliculas
}