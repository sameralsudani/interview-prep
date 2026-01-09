import Cookies from "universal-cookie";
import jwt from "jwt-decode";
import { useState } from "react";

function App() {
    // Initialling cookies
    const cookies = new Cookies();

    // Initialling user state
    const [user, setUser]= useState(null);

    const logout = () => {
        setUser(null);
        cookies.remove("jwt-authentication")
    };

    const login = (jwtToken) => {
        //Decode JWT token
        const decoded = jwt(jwtToken);

        // set user state 
        setUser(decoded)

        //set cookie
        cookies.set("jwt-authentication", jwt-token, {
            expires: new Date(decoded.exp * 1000)
        })
    };

    return (
        <div className="App">
        {
        user ? (
            <div>
                <h1>Welcome {user.first_name}</h1>
                <button onClick={logout}>Logout</button>
            </div>
            ): (
            <div>
                <h1>Welcome guest</h1>
                <button onClick={()=>login(
                    "eyweufheiuhfiuehfiheifhiuehfeiepoifpoef'ewfieewiruf8094r74urjriofjreiof0984rfu"  // encoded jwt= user info
                )}>Login</button>
            
            </div>

            )
        }   
        </div>
    )
}

export default App