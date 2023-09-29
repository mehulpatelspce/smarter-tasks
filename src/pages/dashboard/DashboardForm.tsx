import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
// First we will import the API_ENDPOINT constant from the `config` folder

import { useNavigate } from 'react-router-dom';

const DashboardForm: React.FC = () => {
    
    const navigate = useNavigate();
    let user = null;
    try {
        const userData = localStorage.getItem('userData');
        if (!userData) {
            useEffect(() => {
                navigate("/signin");
            },[]);
        }
        else
            user = JSON.parse(userData);

    }
    catch (error) {
        console.error('Sign-in failed:', error);
        navigate("/signin");
    }

    return (

        <div className="block mb-2">
            <div>
                <h2 className="block text-gray-700 font-semibold mb-2">Your Name: {user?.name}</h2>
            </div>
            <div>
                <h2 className="block text-gray-700 font-semibold mb-2">Email: {user?.email}</h2>
            </div>
            <Link id="logout-link" to="/signout"> Sign Out </Link>
        </div>
    );
};

export default DashboardForm;