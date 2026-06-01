import { Html } from "@elysia/html";
import { Contianer, Header } from "./components";

const HomePage = () =>{
    return (
        <Contianer tilte="BLink | Home" headerStyles={[ "main.css", "homepage.css" ]} headerScripts={["homepage.js"]}>
            <Header active="home"/>
            <section id="about">
                <div style={{ display: "flex", flexDirection: "column", width: "20rem", marginTop: "100px", marginBottom: "40px" }}>
                    <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                        <img src={"/assets/images/logo.svg"} style={{ width: "100px", height: "100px" }}/>
                        <span style={{ fontSize: "90px", fontWeight: "bolder", color: "#006CA2" }}>BLink</span>
                    </div>
                    <span style={{ fontSize: "20px", fontWeight: "300" }}>Turn any long URL into a clean, shareable BLink in seconds. Track clicks, manage your links, and take control of your sharing — right from your phone.</span>
                </div>
            </section>
        </Contianer>
    );
}

export default HomePage;