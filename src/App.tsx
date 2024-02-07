import { useState } from 'react'
import './App.css'
import {ChakraProvider, useToast } from '@chakra-ui/react'
function App() {
  const [imgSrc, setImgSrc] = useState('https://pa1.aminoapps.com/7103/86dfb5de11d4543aa5d88e75a4873a6569e42e85r1-370-300_hq.gif')
  const [showImage, setShowImage] = useState(true)
  const toast = useToast()

  const setActive = () => {
    setShowImage(false)
    const container = document.getElementById('container');
    container?.classList.add('active');
  }

  const setNotActive = () => {
    setShowImage(true)
    setImgSrc('https://pa1.aminoapps.com/7103/86dfb5de11d4543aa5d88e75a4873a6569e42e85r1-370-300_hq.gif')
    const container = document.getElementById('container');
    container?.classList.remove('active');
  }
  return (
    <ChakraProvider>
      <div className="page-container">
        <div className="container" id='container'>
          <div className='question-container'>
            <div className='question-container answerYes'>
              {showImage ? <img src={imgSrc} alt='LoveYou' /> : null}
            </div>
            <div className='question-container asking'>
              <img src='https://s3.getstickerpack.com/storage/uploads/sticker-pack/milk-n-mocha-1/sticker_3.gif?3b0113a9484ddf2a389e6bdf5c69c2fa'/>
            </div>
          </div>
          <div className="container-transition">
            <div className="toggle">
              <div className="toggle-panel toggle-right">
                <h1>WOULD YOU BE MY VALENTINE?</h1>
                <div className='button-container'>
                  <button className='heart-button' onClick={() => setActive()} ><div></div><span className='heart-text-yes'>YES</span></button>
                  <button className='heart-button' onClick={() => {
                    setImgSrc('https://media1.tenor.com/m/w43ByA1RgikAAAAC/milk-and-mocha-cry.gif')
                    toast({
                      title: 'Error.',
                      description: "Something went wrong!!!!!",
                      status: 'error',
                      duration: 1000,
                      isClosable: true,
                      position: 'top',
                      variant: 'left-accent',
                    })
                  }}>
                    <div></div><span className='heart-text-no' id='no-button'>NO</span></button>
                </div>
              </div>
              <div className="toggle-panel toggle-left">
                <h1>YAYY HAPPY TO BE YOUR VALENTINE TOO!!</h1>
                <button className='heart-button' onClick={() => setNotActive()}><div></div><span className='heart-text-back'>PLAY AGAIN</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ChakraProvider>
  )
}

export default App
