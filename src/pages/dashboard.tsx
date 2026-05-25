import { Html } from "@elysia/html";
import { User } from "../repositories/models";
import { Contianer } from "./components";

const Dashboard = (props: { user: User }) =>{
    return (
        <Contianer tilte="BLink | Dashboard">
            <h1>Hi {props.user.fname}</h1>
        </Contianer>
    );
}

export default Dashboard;