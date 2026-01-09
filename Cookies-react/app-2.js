import Cookies from 'js-cookie'

function App() {

    const setCookie = () =>{
        Cookies.set("token", "eyedededkjedhekjdfhkehdfejd", {
            expires: 7
        })
    }
    const getCookie=() =>{
        Cookies.get("token")
    }
    const removeCookie=() =>{
        Cookies.remove("token")
    }

    return (
        <div>
            <h4>Cookies</h4>
            <button onClick={setCookie}>Set Cookies</button>
            <button onClick={getCookie}>Get Cookies</button>
            <button onClick={removeCookie}>Remove Cookies</button>

        </div>      
    )

}

export default App