import { Html } from "@elysia/html";
import { Contianer } from "./components";

const SignIn = () =>{
    return (
        <Contianer tilte="BLink | Sign In">
            <div class=''>
                <div class='forms'>
                    <div>
                        <button class = "btn-white options-btn">Login</button>
                        <button class = "btn-outline-white options-btn">Sign Up</button>
                    </div>
                    <form>
                        <label for='email'>Email:</label>
                        <input type='email' id='email' name='email' />
                        <label for='password'>Password:</label>
                        <input type='password' id='password' name='password' />
                        <button id="loginBtn" type="button" class='options-btn btn-white'>Login</button>
                    </form>
                    <form style="display:none">
                        <label for='name'>Name:</label>
                        <input type='text' id='name' name='name' required />
                        <label for='surname'>Surname:</label>
                        <input type='text' id='surname' name='surname' required />
                        <label for='email'>Email:</label>
                        <input type='email' id='email' name='email' required />
                        <label for='password'>Password:</label>
                        <input type='password' id='password' name='password' required />
                        <label for='repassword'>Renter Password:</label>
                        <input type='password' id='repassword' name='repassword' required />
                        <button type="button" class='options-btn btn-white'>Submit</button>
                    </form>
                </div>
            </div>
        </Contianer>
    );
}

export default SignIn;