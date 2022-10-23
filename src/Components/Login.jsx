import { useContext } from 'react';
import { AuthUser } from '../Context/UserContext';

const Login = () => {
    const { } = useContext(AuthUser)

    return (
        <div>
            login
        </div>
    );
};

export default Login;