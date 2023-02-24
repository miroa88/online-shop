
import SignUnForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in.component';

import './authentication.style.scss';

const Auth = () => {

    return(
        <div className='authentication-container'>
            <SignInForm />
            <SignUnForm />
        </div>
    )   
}

export default Auth;