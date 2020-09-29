//el atributo async lo convierte en una promesa
export const getGifs = async ( category ) => {
    // para escapar (reemplazar) los espacios se agrega + rick+and+morty
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=pkAMk7DPQYvQBpqp4CPW9A8QqXWaAZo1`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    //obtengo del data solo los campos que quiero
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    console.log(gifs);
    return gifs;
}