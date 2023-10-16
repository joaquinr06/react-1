import { useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import swal from "sweetalert";

const Buscador = () => {

    let keyword = useRef();
    let history = useHistory();
    const handleSubmit = (event) => {
        let word = keyword.current.value;
        event.preventDefault()
        if (word.lenght < 3) {
            swal({
                text: 'El mínimo de carácteres es 3',
                icon: 'error'
            })
        } else {
            keyword.current.value = '';
            history.push(`/results?word=${word}`)
        }
    }


    return (
        <>
            <div className="col-6 col-md-3">
                <form action="/results" method="GET" className="search-form" onSubmit={(e) => handleSubmit(e)} >
                    <input
                        type="text"
                        name="keywords"
                        placeholder="Buscar productos, etc..."
                        className="search-form_input"
                        ref={keyword}
                    />
                </form>
            </div>
        </>
    );
};
export default Buscador;

