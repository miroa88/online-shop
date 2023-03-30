import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { ReactComponent as FishingLogo } from '../../assets/fly-fishing.svg';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
// import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

//redux
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

import { NavigationContainer,LogoContainer, NavLinkContainer, NavLinksContainer} from './navigation.style.jsx';

const Navigation = () => {

  const { isCartOpen } = useContext(CartContext);
  // const { currentUser } = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser);

  return(
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'> 
          <FishingLogo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLinkContainer to='/shop'>
            SHOP
          </NavLinkContainer>
          {currentUser ? 
            <NavLinkContainer as="span" onClick={signOutUser}>SIGN OUT</NavLinkContainer> 
            :
            <NavLinkContainer className='nav-link' to='/auth'>SIGN IN</NavLinkContainer>
          }
          <CartIcon/>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      
      <Outlet />
      </Fragment>
    )
}

export default Navigation;