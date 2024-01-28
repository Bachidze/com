import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Comments from './Components/Comments';
import { Data } from './Data';


function App() {
  const [count, setCount] = useState(12);
  return (
    <>
      {Data.map((el, key) => (
        <Card
          key={key}
          ImgUrl={el.ImgUrl}
          name={el.name}
          time={el.time}
          desc={el.desc}
          count={count}
          setCount={setCount}
          ImgUrl2={'/assets/Reply.svg'}
          reply='Reply'
        />
      ))}

      <Comments ImgUrl4={'/assets/Oval (20).svg'} />
    </>
  );
}

export default App;





