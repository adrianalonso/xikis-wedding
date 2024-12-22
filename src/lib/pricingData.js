import PriceIcon1 from "@/components/common/icons/PriceIcon1";
import PriceIcon2 from "@/components/common/icons/PriceIcon2";
import PriceIcon3 from "@/components/common/icons/PriceIcon3";

export const pricingData = [
  {
    id: 1,
    card_name: "Solteros",
    icon: <PriceIcon1 />,
    price: "$42",
    link: "#",
    features: [
      {
        id: 1,
        feature_name: "¿Encontrarás tu media naranja?",
      },
      {
        id: 2,
        feature_name: "Si vas a venir con un rollete, al menos avisanos",
      },
      {
        id: 3,
        feature_name: "Lo que pasa en Almería, se queda en Almería 😏",
      },
    ],
  },
  {
    id: 2,
    card_name: "Parejas",
    icon: <PriceIcon2 />,
    price: "$100",
    link: "#",
    features: [
      {
        id: 1,
        feature_name: "¿De una boda saldrá otra boda? 🤔",
      },
      {
        id: 2,
        feature_name: "No aceptamos rupturas, ¡gracias!",
      },
      {
        id: 3,
        feature_name: "¡Que viva el amor! 🥰",
      },
    ],
  },
  {
    id: 3,
    card_name: "Familia",
    icon: <PriceIcon3 />,
    price: "$25",
    link: "#",
    features: [
      {
        id: 1,
        feature_name: "1+1 son siete",
      },
      {
        id: 2,
        feature_name: "Diversión asegurada para tus hijos 🎉",
      },
      {
        id: 3,
        feature_name: "¡Un día para recordar! 🌟",
      },
    ],
  },
];
