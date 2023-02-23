
import './categories.style.scss';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Rods'
    },
    {
      id: 2,
      title: 'Reels'
    },
    {
      id: 3,
      title: 'Accessories'
    },
    {
      id: 4,
      title: 'Dry Fly'
    },
    {
      id: 5,
      title: 'Wet Fly'
    }   
  ]

  return (
    <div className="categories-container">
      {categories.map(category => (
        <div key={category.id} className="category-container">
          {/* <img /> */}
          <div className="background-image-container"> 
          </div>
          <div className="category-body-container">
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
        )
       )}
    </div>
  );
}

export default App;
