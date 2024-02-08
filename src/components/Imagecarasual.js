const { useState } = require("react");

function Imagecarasual(){
 
  const [images,setImages]=useState(['/Butterfly.jpg','/dark-abstract.jpg','/wooden.jpg'])
  const [currentImageIndex,setCurrentImageIndex]=useState(0)
  
  const onNext=()=>{
    let next= (currentImageIndex+1)%images.length;
    setCurrentImageIndex(next)

  }
  const onPrev=()=>{
    let previous=( currentImageIndex-1+images.length)%images.length
    setCurrentImageIndex(previous)

  } 
  
  return(
  <div>
    <h1>Image carasual</h1>
    <button onClick={onPrev}>Prev</button>
    <img src={images[currentImageIndex]} height={300}></img>
    <button onClick={onNext}>Next</button>
  </div>
)

}
export default Imagecarasual