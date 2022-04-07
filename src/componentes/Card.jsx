const Card = ({ data, key }) => {
  return (
    <div key={key} className="card m-2 col-3" style={{width: "18rem"}}>
      <img src={data.src} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{data.nombre}</h5>
        <p className="card-text">
          Desde: {data.ingreso}
          Hasta: {data.egreso}
        </p>
        <p>Promocion: {data.estadia}</p>
        <p>Costo:{data.costo}</p>
        <p>Ubicacion: {data.ubicacion}</p>
        <ul type="none">
            <h4>Servicios</h4>
        {data.servicio.map((s,i)=> <li key={i.toString()+"s"}>{s}</li>)}
        </ul>
        <a href="#" className="btn btn-primary">
          Crear Reserva
        </a>
      </div>
    </div>
  );
};

export default Card;
