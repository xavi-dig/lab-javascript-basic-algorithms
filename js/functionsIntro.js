function bio(
  nombre,
  edad,
  localizacion,
  localizacionActual,
  computadora,
  aficion,
  libroFavorito,
  musicaFavorita,
  creatividad,
  comidaFavorita
) {
  return `Hola, me llamo ${nombre}, tengo ${edad} y nací en ${localizacion}. Actualmente resido en ${localizacionActual} y escribo esto desde un ${computadora}. Me gusta ${aficion} y mi libro favorito se titula ${libroFavorito}, me gusta el ${musicaFavorita}, el ${creatividad} y comer ${comidaFavorita}!`;
}

console.log(
  bio(
    "Xavi",
    31,
    "Terrassa",
    "Terrassa",
    "Macbook",
    "leer",
    "Puertas de fuego",
    "Rock",
    "Lettering",
    "Pizza"
  )
);
