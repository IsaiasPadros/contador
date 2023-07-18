const Titulo = ({ subtituloNuevo }) => {
  return (
    <section className="text-center">
      <h1 className="display-4">Primer titulo</h1>
      <h2 className="display-6">{subtituloNuevo}</h2>
      <hr />
    </section>
  );
};

export default Titulo;
