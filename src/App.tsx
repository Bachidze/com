import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Comments from './Components/Comments'


function App() {
  const [count, setCount] = useState(12)
  

  return (
    <>
    <Card
      ImgUrl={'/assets/Oval (16).svg'}
      name='amyrobson'
      time='1 month ago'
      desc='Impressive! Though it seems the drag 
            feature could be improved. But overall 
            it looks incredible. You’ve nailed 
            the design and the responsiveness
            at various breakpoints works really well.'
      count={count} 
      setCount={setCount}
      ImgUrl2={'/assets/Reply.svg'}
      reply='Reply'
    />
    
    <Card
      ImgUrl={'/assets/Oval (17).svg'}
      name='maxblagun'
      time='2 weeks ago'
      desc='Woah, your project looks awesome! How long
            have you been coding for? I’m still new, but 
            think I want to dive into React as well soon.
            Perhaps you can give me an insight on where
            I can learn React? Thanks!'
      count={count} 
      setCount={setCount}
      ImgUrl2={'/assets/Reply.svg'}
      reply='Reply'
    />
    <Card
      ImgUrl={'/assets/Oval (18).svg'}
      name='ramsesmiron'
      time='1 weeks ago'
      desc='@maxblagun If you’re still new, I’d 
            recommend focusing on the fundamentals of HTML,
            CSS, and JS before considering React. It’s very
            tempting to jump ahead but lay a solid 
            foundation first.'
      count={count} 
      setCount={setCount}
      ImgUrl2={'/assets/Reply.svg'}
      reply='Reply'
    />
    <Card
      ImgUrl={'/assets/Oval (19).svg'}
      name='juliusomo'
      time='1 day ago'
      desc='Impressive! Though it seems the drag 
            feature could be improved. But overall 
            it looks incredible. You’ve nailed 
            the design and the responsiveness
            at various breakpoints works really well.'
      count={count} 
      setCount={setCount}
      ImgUrl2={'/assets/Reply.svg'}
      reply='Reply'
    />

    <Comments
      ImgUrl4={'/assets/Oval (20).svg'}
    />
    </>
  )
}

export default App

