import { useForm } from "react-hook-form";
import './style.css'

function Create() {
    const {
        register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset

    } = useForm({
        defaultValues: {
            name: "",
            price: "",
            discount: "",
            description: "",
            image: "",
            colors: "",
            category: ""
        },
    });
    console.log(errors);

    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ tittle: 'Product'})
    };
    const onSubmit = async () => {
        try {
            await fetch(`http://localhost:3001/products/crear`, requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                console.log(data);
    
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }  reset();

            })
            .catch(error => {
                console.error('There was an error!', error);
            });
        } catch (errors) {
            console.log(errors);
        }
    }

<form onSubmit={handleSubmit(onSubmit)} />


return (

    <
        form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Nombre:</label>
            <input
                type="string"
                name="name"
                {...register("name", {
                    required: {
                        value: true,
                        message: "Nombre es requerido",
                    },
                    maxLength: 20,
                    minLength: 2,
                })}
            />
        </div>

        {/* precio */}
        <div>
            <label htmlFor="price">Precio</label>
            <input
                type="number"
                name="name"
                {...register("name", {
                    required: {
                        value: true,
                        message: "Nombre es requerido",
                    },
                    maxLength: 20,
                    minLength: 2,
                })}
            />  
        </div>
        {/* Descuento */}
        <div>
            <label htmlFor="discount">Descuento</label>
            <input
                type="number"
                name="discount"
                {...register("discount")}
            />
        </div>
        {/* Descripcion */}
        <div>
            <label htmlFor="description">Descripcion</label>
            <input
                type="string"
                name="description"
                {...register("description")}
            />
        </div>
        {/* category */}
        <div>
            <label htmlFor="category">Categoria</label>
            <input
                type="string"
                name="category"
                {...register("category")}
            />
        </div>
        {/* image */}
        <div>
            <label htmlFor="image">subir nombre de archivo:</label>
            <input
                type="file"
                onChange={(e) => {
                    setValue("image", e.target.files[0].name);
                }}
                {...register("image")}
            />
            {errors.archivo && <span>{errors.archivo.message}</span>}
        </div>

        {/* Color */}
        <div>
            <label htmlFor="colors">Color</label>
            <input
                type="string"
                name="colors"
                {...register("colors")}
            />
        </div>

        <button type="submit">Enviar</button>

    </form>
)
}

export default Create;