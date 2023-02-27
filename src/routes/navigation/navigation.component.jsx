import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { ReactComponent as FishingLogo } from '../../assets/fly-fishing.svg';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { CartContext } from '../../context/cart.context';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component,';

import { NavigationContainer,LogoContainer, NavLinkContainer, NavLinksContainer} from './navigation.style.jsx';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  console.log("isCartOpen",isCartOpen)
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