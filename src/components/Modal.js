import OutsideClickHandler from "./OutsideClickHandler";

export default function Modal({open, setopen, itemselect, capitalizeFirstLetter, types, language}){
    
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
                      {Object.keys(itemselect.types).map((value) => {
                        return (
                          <div
                            key={value}
                            className="types"
                            style={
                              types[itemselect.types[value].type.name].style
                            }
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
    )
}