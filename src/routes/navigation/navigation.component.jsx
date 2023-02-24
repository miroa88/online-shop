import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as FishingLogo } from '../../assets/fly-fishing.svg';
import { ReactComponent as Test } from '../../assets/test.svg';

import './navigation.style.scss';

const Navigation = () => {
    return(
      <Fragment>
        <div className='navigation'>
          <Link className='logo-container' to='/'> 
            <FishingLogo  className='logo'/>
            {/* <Test  className='logo'/> */}
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
            <Link className='nav-link' to='/sign-in'>
              SIGN IN
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;