export async function Getdata(pagina) {
  let data = [];
  await fetch(`https://pokeapi.co/api/v2/pokemon?limit=32&offset=${ (pagina * 32) }`)
    .then((data) => data.json())
    .then((datos) => {
      data = datos;
    });
  return data;
}

export async function GetAlldata( array ){
    let data = []

    for(let i=0; i < array.length; i++){
      await fetch( array[i].url )
      .then((data) => data.json())
      .then((datos) => {
        data.push(datos)
      });
    }

    return data
}

export async function GetType( url ){
  let data = {}

  await fetch (url).then((data)=> data.json()).then((datos) => data = datos)

  return data
  
}