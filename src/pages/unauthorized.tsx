import { Html } from "@elysia/html";
import { Contianer } from "./components";

const Unauthorized = (props: { path: string }) =>{
    return (
        <Contianer tilte="BLink | Unauthorized user">
            <h1>401 Error | User is not authorized to view page</h1>
            <div>{props.path}</div>
        </Contianer>
    );
}

export default Unauthorized;