import request, { gql } from "graphql-request"
import { Peliculas } from "model/Types"
import { Platform } from "react-native"

// const IP = Platform.OS === "android" ? "10.0.2.2" : "localhost"
const IP = "192.168.1.118" // ip para que funcione en el movil fisico
const URL = `http://${IP}:3000/graphql`

export async function cargarPeliculas(): Promise<Peliculas> {
  
  const sentencia = gql`
    query MyQuery {
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