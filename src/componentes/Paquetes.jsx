import Card from "./Card";

const Paquetes = ({data}) => {
  return (
    <div className="row d-flex justify-content-center">
      <h2>Paquetes</h2>
      {data.map((h, i) => {
        return <Card data={h} key={i.toString() + "p"} />;
      })}
    </div>
  );
};

export default Paquetes;
