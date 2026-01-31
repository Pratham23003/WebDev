import { useState, useEffect } from "react";

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(()=>{
    console.log(`${title} has been liked : ${hasLiked}`);
  }, [hasLiked]);


  const [count, setCount] = useState(0);
  
  return (
    <div className="card" onClick={()=> setCount(count+1)}>
      <h2>{title}</h2>
      <button
        onClick={() => {
          setHasLiked(!hasLiked);
        }}
      >
        {hasLiked ? "Liked" : "Like"}
        {count}
      </button>
    </div>
  );
};
function App() {
  return (
    <>
      <div className="card-container">
        <Card title="Card 1" />
        <Card title="Card 2" />
        <Card title="Card 3" />
        <Card title="Card 4" />
      </div>
    </>
  );
}

export default App;
