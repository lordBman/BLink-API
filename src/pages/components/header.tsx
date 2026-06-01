import { Html } from "@elysia/html";

const HeaderItem = (props: { label: string, active: boolean }) =>{
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "60px", justifyContent: "space-between", alignItems: "center", cursor: "pointer"  }}>
            <div style={{ height: "3px", width: "100%" }} />
            <span style={{ color: props.active ? "#D4423A" : "grey", fontWeight: "lighter", fontSize: "18px" }}>{props.label}</span>
            <div style={{ height: "3px", width: "100%", backgroundColor: props.active ? "#D4423A" : "transparent" }} />
        </div>
    );
}

type ActiveHeader = "home" | "download" | "contacts" | "signin"

const Header = (props: { active: ActiveHeader  }) =>{
    return (
        <div style={{ display: "flex", justifyContent: "space-between", margin: "20px", width: "calc(100% - 80px)", padding: "0px 20px 0px 20px", backgroundColor: "white", borderRadius: "8px" }}>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                <img src={"/assets/images/logo.svg"} style={{ width: "36px", height: "36px" }}/>
                <span style={{ fontSize: "30px", fontWeight: "bold" }}>BLink</span>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <HeaderItem label="Home" active={props.active === "home"} />
                <HeaderItem label="Download" active={props.active === "download"} />
                <HeaderItem label="Contacts" active={props.active === "contacts"} />
            </div>
            <HeaderItem label="Sign In" active={props.active === "signin"} />
        </div>
    );
}

export default Header;