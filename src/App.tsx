import car1 from './images/car1.jpg'
import car2 from './images/car2.jpg'
import car3 from './images/car3.jpg';
import car4 from './images/car4.jpg';
import car5 from './images/car5.jpg';

cons IMAGES = [car1, car2, car3, car4, car5];

function App() {


  return (
    <ImageSlide imageUrls={IMAGES}>
      
    </ImageSlide>
  )
}

export default App
