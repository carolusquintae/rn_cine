export type ImagenBanner = {
  id: string,
  urlFoto: string
}

export const ImagenBannerNula: ImagenBanner = {
  id: "-1",
  urlFoto: "https://upload.wikimedia.org/wikipedia/commons/6/68/Solid_black.png"
}

export type Pelicula = {
  id: number,
  titulo: string,
  urlFoto: string
}

export type Peliculas = Array<Pelicula>