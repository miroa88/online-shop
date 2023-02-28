
import SignUnForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in.component';

import { AuthenticationContainer } from './authentication.style.jsx';

const Auth = () => {

    return(
        <AuthenticationContainer>
            <SignInForm />
            <SignUnForm />
        </AuthenticationContainer>
    )   
}

export default Auth;