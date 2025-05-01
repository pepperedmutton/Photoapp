import { useState } from 'react';

export function Signup() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [displayName, setDisplayName] = useState("");

    const login = (formPayload) => {
        const username = formPayload.get("username");
        const password = formPayload.get("password");

        // FIXME: api call to login
        if (password === "toctoc") {
            setIsLoggedIn(true);
            setDisplayName("frédéric b.");
        }
    }

    const logoff = () => {
        console.log("logoff !");
        setIsLoggedIn(false);
    }

    return (
        <>
            {!isLoggedIn ? 
                <form action={login}>
                    <input name="username" placeholder="Enter your username"/>
                    <input name="password" placeholder="Enter your password"/>
                    <button type="submit">Go !</button>
                </form>
                :
                <>
                    <p>Welcome {displayName}</p>
                    <div>
                        <form action={logoff}>
                            <button type="submit">Logoff</button>
                        </form>
                    </div>!
                </>
            }
        </>
    )
}