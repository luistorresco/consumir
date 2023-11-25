export async function obtenerTokenSpotify(){
    //1. preparo (pa donde voy?, a hacer que? y conque datos?)
    const URL_TOKEN_SERVICE="https://accounts.spotify.com/api/token"
    const METODO_HTTP="post"
    const CLIENT_ID="061e91a305764ef2b0954dde2727feae"
    const CLIENT_SECRET="703bd5d903c74e3899e8599aa7c6d077"
    const GRANT_TYPE="client_credentials"
    const PETICION_TOKEN={
        method:METODO_HTTP,
        headers:{
            "Content-type": "application/x-www-form-urlencoded"
    },
    body:`grant_type=${GRANT_TYPE}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

    //2. inicia la comunicacion e ir hasta el back con la peticion
    let respuestaServidor=await fetch(URL_TOKEN_SERVICE,PETICION_TOKEN)
    let tokenRespuesta=await respuestaServidor.json()

    //3. entregar el resultado al componente para que lo pinte el usuario
    console.log(respuestaServidor) 
    return tokenRespuesta
}