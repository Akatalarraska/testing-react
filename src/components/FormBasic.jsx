import {useState} from "react"; 

function FormBasic(){
    const [name, setName] = useState('');
    const [score, setScore] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(""); // clean input name
        if(Number(score) <= 5 && comment.length < 10){
            alert(`Please provide a comment with at least 10 characters for a score of 5 or less`);
            return
        }
        console.log("form submited")
        setComment("")
        setScore("10")
    }   
    return(
            <form onsetScoreubmit={handleSubmit}>
                <fieldset>
                    <div className="field">   
                        <label htmlFor="name">Name:</label>
                        <input id="name" type="text" placeholder="Name" name="name" value={name} 
                        onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="field">   
                        <label htmlFor="score">Score: {score}</label>
                        <input id="score" type="range" min="0" max="10" name="score" value={score} 
                        onChange={e => setScore(e.target.value)}/>
                    </div>
                    <div className="field">   
                        <label htmlFor="comment">Comment: </label>
                        <textarea id="comment"   name="comment" value={comment} 
                        onChange={e => setComment(e.target.value)}/>
                    </div>
                    <button type="submit" disabled={!name}  >Submit</button>
                </fieldset>
            </form>
    )
}

export default FormBasic;