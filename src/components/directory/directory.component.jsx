import DirectoryItem from '../category-item/directory-item.component';
import { CategoryContainer } from './directory.style';

const Directory = ({categories}) => {
  return (
    <CategoryContainer>
    {categories.map(category => (
      <DirectoryItem key={category.id} category={category}/>
    ))}
  </CategoryContainer>
  )
}

export default Directory;