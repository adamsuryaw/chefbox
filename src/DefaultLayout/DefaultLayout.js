import React from 'react'
import Footer from '../components/footer/Footer'
import HeaderToken from '../HeaderToken/HeaderToken'

function DefaultLayout(props) {
    return (
        <div>
            <HeaderToken />
            {props.children}
            <Footer />
        </div>
    )
}

export default DefaultLayout
