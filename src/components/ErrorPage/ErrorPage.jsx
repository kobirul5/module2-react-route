import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h1>Oops!!!</h1>
           
           {
            error.status === 404 && <div>
               <h2>{error.statusText || error.message}</h2>
                <Link to="/"><button>Home</button></Link>
            </div>
           }
        </div>
    );
};

export default ErrorPage;