import swal from "sweetalert";


const Create = () => {

  const form = document.querySelector('#create-product');
  form.addEventListener( (event) => {
    event.preventDefault();
    let body = {};

        body.name = event.target['name'].value;
        body.price = event.target['price'].value;
        body.description = event.target['description'].value;
        body.discount = event.target['discount'].value;
        body.category = event.target['category'].value;

        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        console.log(options);

        fetch('http://localhost:3001/products/crear', options)
            .then(res => res.json())
            .then(data => {
                swal({
                    title: 'Se cargó correctamente',
                    icon: 'sucess'
                })
            })
        })

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
        <form action="http://localhost:3001/products/crear" method="post" id="create-product">
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
                Crear producto
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  }

export default Create;
