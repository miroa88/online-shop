import Directory from '../../components/directory/directory.component'

const Home = () => {
    const categories = [
        {
          id: 1,
          title: 'Rods',
          imageUrl: 'https://blueridgemountainlife.com/wp-content/uploads/2021/01/fly-fishing-474090_1920.jpg'
        },
        {
          id: 2,
          title: 'Reels',
          imageUrl: 'https://i0.wp.com/flylordsmag.com/wp-content/uploads/2021/06/DSC00022.jpg?fit=2048%2C1365&ssl=1'
        },
        {
          id: 3,
          title: 'Accessories',
          imageUrl: 'https://i.ytimg.com/vi/2pGfuFbBSbk/maxresdefault.jpg'
        },
        {
          id: 4,
          title: 'Dry Fly',
          imageUrl: 'https://www.flytyer.com/wp-content/uploads/2016/05/dry-fly-opener-web.jpg'
    
        },
        {
          id: 5,
          title: 'Wet Fly',
          imageUrl: 'http://cdn.shopify.com/s/files/1/0031/2210/2339/articles/20-Top-Flies-for-Fly-Fishing-In-October.jpg?v=1604422380'
        }   
    ];
  return (
    <Directory categories={categories}/>
  )
}

export default Home;
