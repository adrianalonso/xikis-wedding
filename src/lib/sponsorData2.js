import hotel_1 from "@/assets/images/hotels/avenida-hotel.jpeg";
import hotel_2 from "@/assets/images/hotels/gran-fama.webp";

export const acommodations = [
  {
    id: 1,
    name: "Sercotel Gran Fama",
    google_maps: "https://maps.app.goo.gl/1cW5nhM6xJaRMFAm7",
    address: "Avenida del Mediterráneo, 311, Almería",
    pricing: "💵 Precio de la tarifa (Entre 70 y 90€)",
    booking:
      "Los invitados tienen que entrar su web: https://www.sercotelhoteles.com/es/hotel-gran-fama  o página web de Sercotel https://www.sercotelhoteles.com/es. Elegir las fechas de la boda ( el código es válido tanto para la noche del 27 y 28 de junio).",
    discount: "🤑 10% Descuento sobre la tarifa. Código de descuento BODA0625",
    image: hotel_1,
  },
  {
    id: 2,
    name: "ah! Avenida Hotel Almeria",
    google_maps: "https://maps.app.goo.gl/hbcCgFhpfSWGJHkX9",
    address: "Av. del Mediterráneo, 281, bajo, Almería",
    pricing:
      "💵 Habitación doble 65€ / noche. Suplemento desayuno: 9€/ persona",
    discount: "🤑 El precio es cerrado para invitados de la boda",
    booking:
      "Llamar al hotel al 950 108 180, o bien mandar un correo electrónico a reservas@avenidahotelalmeria.com indicando el código “Boda de Marisol y Adrián”",
    content: "Habitación doble 65€ / noche. Suplemento desayuno: 9€/ persona",
    image: hotel_2,
  },
];
