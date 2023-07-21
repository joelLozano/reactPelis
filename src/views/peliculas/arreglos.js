let peliculas = ["supercool", "titanic"]

peliculas.length // 2
console.log(peliculas[0]); // supercool

peliculas.push("ESO") // agrega un elemento al final del arreglo
peliculas.pop() // elimina el ultimo elemento del arreglo

// programacion funcional

for (let i = 0; i < peliculas.length; i++) {
    peliculas[i]
}

peliculas.forEach((pelicula) => {
    console.log(pelicula)
})

// peliculas.map((pelicula)
// peliculas.filter((pelicula)
// peliculas.find((pelicula)



string = "hola mundo"
string.includes("hola") // true
