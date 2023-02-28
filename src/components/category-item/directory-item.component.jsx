import { Link } from 'react-router-dom';

import { 
  BackgroundImage,
  Body,
  DirectoryItemComponent
} from './directory-item.style.jsx';

const DirectoryItem = ({category}) => {
  return (
    <DirectoryItemComponent>
    <BackgroundImage imageUrl={category.imageUrl} />
    <Body>
      <Link to={`shop/${category.title.toLowerCase()}`}>
          <h2>{category.title}</h2>
          <p>Shop Now</p>
      </Link>
    </Body>
  </DirectoryItemComponent>
  )
}

export default DirectoryItem