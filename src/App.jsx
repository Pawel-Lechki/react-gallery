import { useState } from 'react'
import data from "./data/images.json"
import Modal from "./components/Modal"

function App() {
  const [clicedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const hendleClick= (item, idex) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.data.length;
    if(currentIndex +1 > totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl)
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newIndex);
    setCurrentIndex(newIndex);
  }

  return (
    <div className="wrapper">
      {data.data.map((item, index) => (
        <div key={index} className="wrapper-images">
          <img src={item.link} alt={item.text} onClick={() => hendleClick(item, index)}/>
          <h2>{item.text}</h2>
        </div>
      ))}
      {clicedImg && (
        <Modal clickedImg={clickedImg} 
          handelRotationRight={handelRotationRight} 
          setClickedImg={setClickedImg}
        />)}
    </div>
  )
}

export default App
