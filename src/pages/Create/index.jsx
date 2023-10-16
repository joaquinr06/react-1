import "./style.css";
import { useState } from "react";

function Create() {
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [discount, setDiscount] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");



  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
       fetch("http://localhost:3001/products/crear", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: name,
          price: price,
          description: description,
          discount: discount,
          category: category
        }),
      });
      let res = await res.json();
      if (res.status === 200) {
        setName("");
        setPrice("");
        setMessage("Producto creado correctamente");
      } else {
        setMessage("¡Algo ocurrió!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Create">
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={name}
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="text"
          value={price}
          placeholder="Precio"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input 
          type="text"
          value={description}
          placeholder="Descripcion"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input 
          type="text"
          value={discount}
          placeholder="Descuento"
          onChange={(e) => setDiscount(e.target.value)}
        />
        <input 
          type="text"
          value={category}
          placeholder="Categoria"
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Crear Producto</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}


export default Create;
