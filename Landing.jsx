import { GoogleLogin } from '@react-oauth/google';
import React from 'react';
import {jwtDecode} from "jwt-decode";
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Welcome to the Landing Page</h1>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    console.log('Google login successful:', credentialResponse);
                    const decoded = jwtDecode(credentialResponse.credential);
                    const email = decoded.email;
                    const name = decoded.name;
                    const picture = decoded.picture;
                    console.log(email);console.log(name);

                    console.log(jwtDecode(credentialResponse.credential));
                    navigate('/home');
                }}
                onError={() => console.error('Google login failed')}
                auto_select={true}
            />
        </div>
    );
}

export default Landing;
