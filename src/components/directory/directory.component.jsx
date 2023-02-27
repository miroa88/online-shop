import DirectoryItem from '../category-item/directory-item.component';
import '../directory/directory.style.scss';

const Directory = ({categories}) => {
  return (
    <div className="categories-container">
    {categories.map(category => (
      <DirectoryItem key={category.id} category={category}/>
    ))}
  </div>
  )
}

export default Directory;