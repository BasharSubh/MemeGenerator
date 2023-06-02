import React , {useState, useEffect} from "react";
// import MemesData from "./MemesData";
import MemeBox from "./MemeBox";

function Meme() {

    const [allMemes, setAllMemes] = useState({});
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
        let isMounted = true
        setIsLoading(true);
        fetch("https://api.imgflip.com/get_memes")
         .then(res => res.json())
         .then(data => {
            if (isMounted) {
          setAllMemes(data.data.memes);
          setIsLoading(false);
        }});

        return () => {
            isMounted = false
        }
        
    }, []);
  

    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomUrl: ""
    })

    const randomNumArray = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumArray]?.url
    
    function handleClick() {
        setMeme(prevalue => ({
            ...prevalue,
            randomUrl: url
        })) 
    }

    function handleFormChange(event) {
        event.preventDefault()
        const {name, value} = event.target
        setMeme(prevalue => ({
            ...prevalue,
            [name]: value
        }))
    }

    return (
    <>
        <div className="main">
            <span>
                 <label htmlFor="upper" className="main-upper-text">The Upper Text</label>
                 <input 
                 type="text" 
                 id="upper" 
                 className="main-upper-input"
                 placeholder="insert upper text" 
                 onChange={handleFormChange}
                 value={meme.topText}
                 name="topText"
                 />
            </span>
            <span>
                 <label htmlFor="bottom" className="main-bottom-text">The bottom Text</label>
                 <input 
                 type="text"
                 id="bottom" 
                 className="main-bottom-input"
                 placeholder="insert bottom text" 
                 onChange={handleFormChange}
                 value={meme.bottomText}
                 name="bottomText"
                   />
            </span>
            <button 
            className="main-bottom"
            disabled={isLoading}
            onClick={handleClick}>
            {isLoading ? "Loading..." : "Get a new meme image"}
            </button>
        </div>
        <div className="container">
          <MemeBox memebox={meme.randomUrl} />
          <p className="meme-upper-text">{meme.topText}</p>
          <p className="meme-bottom-text">{meme.bottomText}</p>
        </div>      
    </>
    )
}

export default Meme