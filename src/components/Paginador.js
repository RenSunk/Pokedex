export default function Paginador( {pagina, setpagina, limite} ){
    return (
        <div>
        <button className="BotonPaginador" onClick={() => (pagina > 0 ? setpagina(pagina - 1) : 0)}>
          {"<"}
        </button>

          { ((pagina - 1) <= 0) ? (<></>) : (<button className="BotonPaginador" onClick={ ()=> setpagina(pagina - 2) }> {pagina - 1} </button>)   } 
          { ((pagina ) <= 0) ? (<></>) : (<button className="BotonPaginador" onClick={ ()=> setpagina(pagina - 1) }> {pagina } </button>)   } 

          <button className="BotonPaginador" style={{background:"rgb(255, 84, 84)", color:"white"}}> {pagina + 1} </button>

          { ((pagina + 2) > (Math.trunc(limite / 32) + 1) ? (<></>) : (<button className="BotonPaginador" onClick={ ()=> setpagina(pagina + 1) }> {pagina + 2} </button>)) } 
          { ((pagina + 3) >  (Math.trunc(limite / 32) + 1)) ? (<></>) : (<button className="BotonPaginador" onClick={ ()=> setpagina(pagina + 2) }> {pagina + 3} </button>) }

        <button className="BotonPaginador" onClick={() => (pagina < Math.trunc(limite / 32)) ? setpagina(pagina + 1) : 0}>
          {">"}
        </button>
      </div>
    )
}