const Create = () => {
  return (
    <div className="container products-wrapper">
      <div className="row">
        <div className="col-12">
          <h2 className="products-title">
            Crear un Producto
          </h2>
        </div>
      </div>
      <div className="col-12">
        <form action method id="create-product">
          <div className="row product-detail">
            <div className="col-12 col-md-6">
              <label htmlFor="name" className="form-label">
                Nombre del producto:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ej: Pizza a la Piedra"
                className="form-input"
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="price" className="form-label">
                Precio del producto:
              </label>
              <input
                type="text"
                id="price"
                name="price"
                placeholder="Ej: $9999"
                className="form-input"
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="discount" className="form-label">
                Descuento:
              </label>
              <input
                type="text"
                id="discount"
                name="discount"
                placeholder="Ej: 15% off"
                className="form-input"
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="category" className="form-label">
                Categoría:
              </label>
              <select name="category" id="category" className="form-input">
                <option value>Elegí</option>
                <option value="in-sale">En oferta</option>
                <option value="visited">Últimos agregados</option>
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="description" className="form-label">
                Descipción:
              </label>
              <textarea
                name="description"
                placeholder="Ej: Hecha de masa madre, con tomates frescos y Muzzarella. Ligeramente dorada en su base con borde relleno"
                id="description"
                className="form-input"
                defaultValue={""}
              />
            </div>
            <div className="col-12">
              <button type="submit" className="buy-now-button">
                Crear Producto
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
