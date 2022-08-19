import { useEffect, useState } from "react";
import { Getdata, GetAlldata } from "../services/Getdata";

export default function useData() {

    function capitalizeFirstLetter(str) {
        // converting first letter to uppercase
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalized;
      }

  const [data, setdata] = useState([]);
  const [allData, setAllData] = useState([]);
  const [loading, setloading] = useState(true);
  const [pagina, setpagina] = useState(0);
  const [limite, setlimite] = useState([]);
  const [itemselect, setitemselect] = useState({});

  useEffect(() => {
    setloading(true);
    Getdata(pagina).then((json) => {
      setdata(json.results);
      setlimite(json.count);
    });
  }, [pagina]);

  useEffect(() => {
    if (data.length > 0) {
      GetAlldata(data).then((array) => {
        setAllData(array);
        setloading(false);
      });
    }
  }, [data]);

  const types = {
    grass: {
      language: {
        es: "Planta",
        en: "Grass",
      },
      style: {
        backgroundColor: "#9bcc50",
        color: "black",
      },
    },
    poison: {
      language: {
        es: "Veneno",
        en: "Poison",
      },
      style: {
        backgroundColor: "#b97fc9",
        color: "white",
      },
    },
    normal: {
      language: {
        es: "Normal",
        en: "Normal",
      },
      style: {
        backgroundColor: "#a4acaf",
        color: "white",
      },
    },
    fighting: {
      language: {
        es: "Lucha",
        en: "fighting",
      },
      style: {
        backgroundColor: "#d56723",
        color: "white",
      },
    },
    flying: {
      language: {
        es: "Volador",
        en: "Flying",
      },
      style: {
        background: "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)",
        backgroundColor: "#3dc7ef",
        color: "black",
      },
    },
    ground: {
      language: {
        es: "Tierra",
        en: "Ground",
      },
      style: {
        background: "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)",
        backgroundColor: "#b97fc9",
        color: "black",
      },
    },
    rock: {
      language: {
        es: "Roca",
        en: "Rock",
      },
      style: {
        backgroundColor: "#a38c21",
        color: "white",
      },
    },
    bug: {
      language: {
        es: "Bicho",
        en: "Bug",
      },
      style: {
        backgroundColor: "#729f3f",
        color: "white",
      },
    },
    ghost: {
      language: {
        es: "Fantasma",
        en: "Ghost",
      },
      style: {
        backgroundColor: "#7b62a3",
        color: "white",
      },
    },
    steel: {
      language: {
        es: "Acero",
        en: "Steel",
      },
      style: {
        backgroundColor: "#9eb7b8",
        color: "black",
      },
    },
    fire: {
      language: {
        es: "Fuego",
        en: "Fire",
      },
      style: {
        backgroundColor: "#fd7d24",
        color: "white",
      },
    },
    water: {
      language: {
        es: "Agua",
        en: "Water",
      },
      style: {
        backgroundColor: "#4592c4",
        color: "white",
      },
    },
    electric: {
      language: {
        es: "Electrico",
        en: "Electric",
      },
      style: {
        backgroundColor: "#eed535",
        color: "black",
      },
    },
    psychic: {
      language: {
        es: "Psiquico",
        en: "Psychic",
      },
      style: {
        backgroundColor: "#f366b9",
        color: "white",
      },
    },
    ice: {
      language: {
        es: "Hielo",
        en: "Ice",
      },
      style: {
        backgroundColor: "#51c4e7",
        color: "white",
      },
    },
    dragon: {
      language: {
        es: "Dragon",
        en: "Dragon",
      },
      style: {
        background: "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)",
        backgroundColor: "#53a4cf",
        color: "white",
      },
    },
    dark: {
      language: {
        es: "Sinistro",
        en: "Dark",
      },
      style: {
        backgroundColor: "#707070",
        color: "white",
      },
    },
    fairy: {
      language: {
        es: "Hada",
        en: "Fairy",
      },
      style: {
        backgroundColor: "#fdb9e9",
        color: "white",
      },
    },
    unknown: {
      language: {
        es: "Veneno",
        en: "Poison",
      },
      style: {
        backgroundColor: "gray",
        color: "white",
      },
    },
    shadow: {
      language: {
        es: "Sombra",
        en: "Shadow",
      },
      style: {
        backgroundColor: "#b97fc9",
        color: "white",
      },
    },
  };

  return {
    allData,
    setAllData,
    loading,
    setloading,
    pagina,
    setpagina,
    limite,
    setlimite,
    itemselect,
    setitemselect,
    types,
    capitalizeFirstLetter
  };
}
