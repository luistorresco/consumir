export async function obternerCancionesTop(token){


    const URL_TOPTRACKS_SERVICE="https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un/top-tracks?market=US"
    const PETICION_CANCIONES={
        method:"GET",
        headers:"Authorization:"+token
    }

    let respuestaServicio=await fetch(URL_TOPTRACKS_SERVICE, PETICION_CANCIONES)
    let canciones = respuestaServicio.json()
    return canciones()



}