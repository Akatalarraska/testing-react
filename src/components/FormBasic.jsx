function FormBasic(){
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(""); // clean input name
        console.log("form submited")
        alert(`Name: ${name}`);
    }
    return(
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="field">   
                        <label htmlFor="name">Name:</label>
                        <input id="name" type="text" placeholder="Name" name="name" value={name} 
                        onChange={e => setName(e.target.value)}/>
                    </div>
                    <button type="submit" disabled={!name}  >Submit</button>
                </fieldset>
            </form>
    )
}

export default FormBasic;