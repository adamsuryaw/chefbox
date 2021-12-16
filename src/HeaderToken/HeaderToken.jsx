import React, {useEffect, useState} from 'react'
import Header from '../Component/Header/Header';
import Navbar from '../components/navbar/Navbar';

function HeaderToken() {
    const token = localStorage.getItem("token");
    const [login, setLogin] = useState(false)
    useEffect(() => {
        if(token) {
            setLogin(token)
        }
    }, [token])
    return (
        <div>
            {!login ? (
                <Navbar />
                ) : (
                <Header />
            )}

        </div>
    )
}

export default HeaderToken
