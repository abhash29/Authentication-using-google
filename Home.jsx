import React from 'react';
import { googleLogout } from '@react-oauth/google';

function Home() {
    function logout(){
        console.log('Logout button is pressed');
        googleLogout()
    }
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Home;
