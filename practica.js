/*desarrollar una aplicación hecha con javascript que nos ayude a gestionar los alumnos de nuestra clase*/

// 1. Crear un array de objetos con los alumnos de la clase

let alumnos = [
    {nombre: "Juan", edad: 20, curso: "2º DAM", genero: "M", calificaciones: [7, 8, 9, 10]},
    {nombre: "Ana", edad: 19, curso: "2º DAM", genero: "F", calificaciones: [8, 8, 9, 10]},
    {nombre: "Luis", edad: 21, curso: "2º DAM", genero: "M", calificaciones: [7, 8, 9, 10]},
    {nombre: "María", edad: 20, curso: "2º DAM", genero: "F", calificaciones: [8, 8, 9, 10]},
    {nombre: "Laura", edad: 21, curso: "2º DAM", genero: "F", calificaciones: [7, 8, 9, 10]},
];

// 2. Mostrar en pantalla la cantidad de alumnos que hay en clase.

console.log("Hay " + alumnos.length + " alumnos en clase");

// 3. Mostrar en pantalla el nombre de los alumnos que hay en clase.

for (let i = 0; i < alumnos.length; i++) {
    console.log("El nombre del alumno es " + alumnos[i].nombre);
}

// 4. Eliminar el último alumno de la clase.

alumnos.pop();


// 5. Eliminar un alumno aleatoriamente de la clase.

alumnos.splice(Math.floor(Math.random() * alumnos.length), 1);

// 6. Mostrar por consola todos los datos de los alumnos que son chicas.

for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].genero == "F") {
        console.log("El nombre de la alumna es " + alumnos[i].nombre);
        console.log("La edad de la alumna es " + alumnos[i].edad);
        console.log("El curso de la alumna es " + alumnos[i].curso);
        console.log("El genero de la alumna es " + alumnos[i].genero);
    }
}

// 7. Mostrar por consola el número de chicos y chicas que hay en la clase.

let chicos = 0;
let chicas = 0;
for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].genero == "M") {
        chicos++;
    } else {
        chicas++;
    }
}
console.log("Hay " + chicos + " chicos y " + chicas + " chicas en clase");

// 8. Mostrar true o false por consola si todos los alumnos de la clase son chicas.

let todosChicas = true;
for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].genero == "M") {
        todosChicas = false;
    }
}
console.log("Todos los alumnos son chicas: " + todosChicas);

// 9. Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.

for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].edad >= 20 && alumnos[i].edad <= 25) {
        console.log("El nombre del alumno es " + alumnos[i].nombre);
    }
}

// 10. Añadir un alumno nuevo con los siguientes datos:

    //nombre aleatorio.
    //edad aleatoria entre 20 y 50 años.
    //género aleatorio.
    //listado de calificaciones vacío.

let nombres = ["Juan", "Ana", "Luis", "María", "Pedro", "Marta", "Javier", "Sara", "Pablo", "Laura"];

let nuevoAlumnos = [
    
    {nombre: "Pedro", edad: Math.floor(Math.random() * (50 - 20 + 1)) + 20, genero: "M", calificaciones: []},
    {nombre: "Marta", edad: Math.floor(Math.random() * (50 - 20 + 1)) + 20, genero: "F", calificaciones: []},
    {nombre: "Javier", edad: Math.floor(Math.random() * (50 - 20 + 1)) + 20, genero: "M", calificaciones: []},
    {nombre: "Sara", edad: Math.floor(Math.random() * (50 - 20 + 1)) + 20, genero: "F", calificaciones: []},
    {nombre: "Pablo", edad: Math.floor(Math.random() * (50 - 20 + 1)) + 20, genero: "M", calificaciones: []},
    {nombre: "Laura", edad: Math.floor(Math.random() * (50 - 20 + 1)) + 20, genero: "F", calificaciones: []},

];

// Añadir a la lista de alumnos un solo alumno de forma aleatoria

alumnos.push(nuevoAlumnos[Math.floor(Math.random() * nuevoAlumnos.length)]);
console.log(alumnos);

// 11. Mostrar por consola el nombre de la persona más joven de la clase.

let alumnoMasJoven = alumnos[0];
for (let i = 1; i < alumnos.length; i++) {
    if (alumnos[i].edad < alumnoMasJoven.edad) {
        alumnoMasJoven = alumnos[i];
    }
}
console.log("El alumno más joven es " + alumnoMasJoven.nombre);

// 12. Mostrar por consola la edad media de todos los alumnos de la clase.

let edadMedia = 0;
for (let i = 0; i < alumnos.length; i++) {
    edadMedia += alumnos[i].edad;
}
edadMedia /= alumnos.length;
console.log("La edad media de los alumnos es " + edadMedia);

// 13. Mostrar por consola la edad media de las chicas de la clase.

let edadMediaChicas = 0;
let numChicas = 0;
for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].genero == "F") {
        edadMediaChicas += alumnos[i].edad;
        numChicas++;
    }
}
edadMediaChicas /= numChicas;
console.log("La edad media de las chicas es " + edadMediaChicas);

// 14. Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.

for (let i = 0; i < alumnos.length; i++) {    
    alumnos[i].calificaciones.push(Math.floor(Math.random() * 11));
}
console.log(alumnos);

// 15. Ordenar el array de alumnos alfabéticamente según su nombre.

alumnos.sort(function (a, b) {
    if (a.nombre < b.nombre) {
        return -1;
    } else if (a.nombre > b.nombre) {
        return 1;
    } else {
        return 0;
    }
});

//Mostrar la lista de todos los alumnos ordenados alfabéticamente.

for (let i = 0; i < alumnos.length; i++) {
    console.log("El nombre del alumno es " + alumnos[i].nombre);
    console.log("");
}


// 16. Mostrar por consola el alumno de la clase con las mejores notas.

let alumnoMejoresNotas = alumnos[0];
for (let i = 1; i < alumnos.length; i++) {
    if (alumnos[i].calificaciones.reduce(function (a, b) {
        return a + b;
    }) > alumnoMejoresNotas.calificaciones.reduce(function (a, b) {
        return a + b;
    })) {
        alumnoMejoresNotas = alumnos[i];
    }
}
console.log("El alumno con mejores notas es " + alumnoMejoresNotas.nombre);

// El alumno con mejores notas es aquel cuyo sumatorio de todas sus notas es el valor más alto de todos.

// 17. Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.

let notaMediaMasAlta = 0;
let alumnoNotaMediaMasAlta = alumnos[0];
for (let i = 0; i < alumnos.length; i++) {
    let notaMedia = alumnos[i].calificaciones.reduce(function (a, b) {
        return a + b;
    }) / alumnos[i].calificaciones.length;
    if (notaMedia > notaMediaMasAlta) {
        notaMediaMasAlta = notaMedia;
        alumnoNotaMediaMasAlta = alumnos[i];
    } else if (notaMedia == notaMediaMasAlta) {
        alumnoNotaMediaMasAlta = "Hay varios alumnos con la misma nota media más alta";
    }
}
console.log("La nota media más alta es " + notaMediaMasAlta + " y pertenece al alumno " + alumnoNotaMediaMasAlta.nombre);

// 18. Añadir un punto extra a cada nota existente de todos los alumnos. Recordad que la nota máxima posible es 10. Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.

for (let i = 0; i < alumnos.length; i++) {
    for (let j = 0; j < alumnos[i].calificaciones.length; j++) {
        if (alumnos[i].calificaciones[j] < 10) {
            alumnos[i].calificaciones[j]++;
        }
    }
}
console.log(alumnos);

