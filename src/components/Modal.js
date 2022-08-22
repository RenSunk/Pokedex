/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import OutsideClickHandler from "./OutsideClickHandler";
import { GetType } from "../services/Getdata";

export default function Modal({
  open,
  setopen,
  itemselect,
  capitalizeFirstLetter,
  types,
  language,
}) {
  const [debilidadess, setdebilidades] = useState([]);
  function Debilidades(array_debil, array_fuerte) {
    // eslint-disable-next-line array-callback-return
    let debilidades_type = array_debil.filter((elemet) => {
      let pasa = true;
      for (let i = 0; i < array_fuerte.length; i++) {
        if (array_fuerte[i].name === elemet.name) {
          pasa = false;
        }
      }

      if (pasa) {
        return elemet;
      }
    });
    return debilidades_type;
  }
  useEffect(() => {
    setdebilidades(() => []);
    if (Object.values(itemselect).length > 0) {
      if (itemselect.types.length > 1) {
        GetType(itemselect.types[0].type.url).then((json1) => {
          GetType(itemselect.types[1].type.url).then((json2) => {
            setdebilidades(() => {
              let data = Debilidades(
                json1.damage_relations.double_damage_from,
                json2.damage_relations.half_damage_from
              );

              let data1 = Debilidades(
                json2.damage_relations.double_damage_from,
                json1.damage_relations.half_damage_from
              ).filter((element)=>{
                let pasa = true
                for(let i = 0; i < data.length; i++){
                  if(element.name === data[i].name){
                    data[i].x2 = true
                    pasa = false
                  }
                }
                if(pasa){
                  return element
                }
              })      
              return data.concat(data1);
            });
          });
        });
      } else {
        GetType(itemselect.types[0].type.url).then((json1) => {
          setdebilidades(() => json1.damage_relations.double_damage_from);
        });
      }
    }
  }, [itemselect]);

  return (
    <div
      style={
        open ? { display: "block", transition: "5s" } : { display: "none" }
      }
      className="modal"
    >
      <div className="modal-content">
        <OutsideClickHandler
          onOutsideClick={() => {
            setopen(false);
          }}
        >
          <span onClick={() => setopen(false)} className="close">
            &times;
          </span>
          {Object.values(itemselect).length > 0 ? (
            <>
              {/**  Contenido modal */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={
                    itemselect.sprites.other["official-artwork"].front_default
                  }
                  alt=""
                />
              </div>

              <h1>{capitalizeFirstLetter(itemselect.name)}</h1>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div>
                  <h5>Tipos:</h5>
                  <div style={{ display: "flex" }}>
                    {Object.keys(itemselect.types).map((value, index) => {
                      return (
                        <div
                          key={
                            types[itemselect.types[value].type.name].language[
                              language
                            ] + index
                          }
                          className="types"
                          style={types[itemselect.types[value].type.name].style}
                        >
                          {
                            types[itemselect.types[value].type.name].language[
                              language
                            ]
                          }
                        </div>
                      );
                    })}
                  </div>

                  <h5>Debilidades:</h5>
                  {Object.values(itemselect).length > 0 ? (
                    <>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          width: "300px",
                        }}
                      >
                        {debilidadess.map((value, index) => {

                          return (
                            <div
                              key={types[value.name].language[language] + index}
                              className="types"
                              style={types[value.name].style}
                            >
                              { types[value.name].language[language] }
                              { value["x2"] ? " X2" : "" }
                            </div>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div>
                  <h4>Imagenes:</h4>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {Object.keys(itemselect.sprites.versions).map((value) => {
                      let key = value;
                      return (
                        <div key={value} style={{ margin: "0px 10px" }}>
                          <h4>
                            {value}
                            {Object.keys(
                              itemselect.sprites.versions[value]
                            ).map((values) => {
                              return (
                                <div
                                  key={values}
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                  }}
                                >
                                  {values !== "icons" ? (
                                    <>
                                      <h5>{values}:</h5>
                                      <img
                                        src={
                                          itemselect.sprites.versions[key][
                                            values
                                          ].front_default
                                        }
                                        alt=""
                                      />
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              );
                            })}
                          </h4>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </OutsideClickHandler>
      </div>
    </div>
  );
}
