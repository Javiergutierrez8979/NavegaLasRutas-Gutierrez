const productos = [
  {
    id: 1,
    nombre: "Casa en CABA",
    precio: 100000,
    image: "/ReactGutierrez/public/img/Casa2.jpg",
    ubicacion: "CABA, Argentina",
    habitaciones: 1,
    banos: 2,
    superficie: 120, 
    descripcion: "Hermosa casa en el corazón de Buenos Aires, ideal para parejas o familias pequeñas. Cuenta con dos baños, un dormitorio y una amplia sala de estar."
  },
  {
    id: 2,
    nombre: "Casa en Córdoba",
    precio: 85000,
    image: "/ReactGutierrez/public/img/Casa2.jpg",
    ubicacion: "Córdoba, Argentina",
    habitaciones: 4,
    banos: 3,
    superficie: 150,
    descripcion: "Espaciosa casa en Córdoba con cuatro dormitorios, tres baños y un gran jardín. Perfecta para familias grandes o para aquellos que disfrutan de recibir visitas."
  },
  {
    id: 3,
    nombre: "Casa en Mendoza",
    precio: 95000,
    image: "/ReactGutierrez/public/img/Casa2.jpg",
    ubicacion: "Mendoza, Argentina",
    habitaciones: 3,
    banos: 2,
    superficie: 110,
    descripcion: "Casa acogedora en Mendoza con tres dormitorios y dos baños. Ubicada en una zona tranquila, ideal para disfrutar del aire libre y la naturaleza."
  },
  {
    id: 4,
    nombre: "Casa en Rosario",
    precio: 78000,
    image: "/ReactGutierrez/public/img/Casa2.jpg",
    ubicacion: "Rosario, Argentina",
    habitaciones: 3,
    banos: 1,
    superficie: 90,
    descripcion: "Propiedad en Rosario con tres habitaciones y un baño. Perfecta para familias medianas, con un diseño moderno y espacios bien distribuidos."
  },
  {
    id: 5,
    nombre: "Casa en Mar del Plata",
    precio: 120000,
    image: "/ReactGutierrez/public/img/Casa2.jpg",
    ubicacion: "Mar del Plata, Argentina",
    habitaciones: 5,
    banos: 5,
    superficie: 200,
    descripcion: "Impresionante casa en Mar del Plata con cinco dormitorios y cinco baños. Ubicada cerca de la playa, esta casa es ideal para aquellos que aman el mar y el lujo."
  },
  {
    id: 6,
    nombre: "Casa en Salta",
    precio: 70000,
    image: "/ReactGutierrez/public/img/Casa2.jpg",

    ubicacion: "Salta, Argentina",
    habitaciones: 3,
    banos: 2,
    superficie: 100,
    descripcion: "Encantadora casa en Salta con tres dormitorios y dos baños. Perfecta para disfrutar del clima cálido y la cultura rica de la región."
  }
];

export default function fetchData(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
}
