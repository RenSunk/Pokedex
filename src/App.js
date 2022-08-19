import "./styles.css";
import { useState } from "react";
import useData from "./Hook/useData";
import Paginador from "./components/Paginador";
import Modal from "./components/Modal";

export default function App() {
  const [open, setopen] = useState(false);
  const [language, setlanguage] = useState("es");
  const {
    allData,
    loading,
    pagina,
    setpagina,
    limite,
    itemselect,
    setitemselect,
    types,
    capitalizeFirstLetter,
  } = useData();

  return (
    <div>
      <Modal
        capitalizeFirstLetter={capitalizeFirstLetter}
        itemselect={itemselect}
        language={language}
        open={open}
        setopen={setopen}
        types={types}
      />

      <nav className="navbar">
        <a href="hola">Inicio</a>
      </nav>
      <div className="body">
        <div className="list-items">
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              margin: "15px",
            }}
          >
            <input
              type={"text"}
              className="bar-search"
              placeholder="Buscar Pokemon"
            />
          </div>
          {loading ? (
            <>
             <div className="Poke">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
                alt=""
              />
              
            </div>
            <h1 style={{textAlign:"center", margin:"0px", padding :"0px"}}>Cargando...</h1>
            </>
           
          ) : (
            <div className="grid-items">

              {allData.map((value) => {
                let animated =
                  value.sprites.versions["generation-v"]["black-white"][
                    "animated"
                  ]["front_default"];
                let staticc = value.sprites.front_default;

                return (
                  <div
                    key={value.id}
                    className="item"
                    onClick={() => {
                      setopen(true);
                      setitemselect(value);
                    }}
                  >
                    <img src={animated != null ? animated : staticc} alt="" />

                    <p>
                      {value.id}
                      {"."} {value.name}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          <Paginador limite={limite} pagina={pagina} setpagina={setpagina} />
        </div>
      </div>
    </div>
  );
}
