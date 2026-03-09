fetch("https://pokeapi.co/api/v2/pokemon/ditto")
   .then(Response => Response.json())
   .then(data => console.log(data.name))
   .catch(Response => console.error(Error))