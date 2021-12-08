import React from 'react'
import Header from '../Component/Header/Header';
import Navbar from '../components/navbar/Navbar';

function HeaderToken() {
    const token = localStorage.getItem("token");
    return (
        <div>
            {!token ? (
                <Navbar />
                ) : (
                <Header />
            )}

        </div>
    )
}

export default HeaderToken
