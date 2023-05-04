import React , { useState } from 'react';

const Form = (props) => {
    const {currentColor, setColorList } = props;
    const [color, setColor] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setColorList([...currentColor, color])
    };

    return (
        <div>
            <form onSubmit={ handleSubmit}>
                <label htmlFor="">Color</label>
                <input type="text" name="color" onChange={(e) => setColor(e.target.value)} />
                <input type="submit"  value="Add"/>
            </form>
        </div>
    ); 
}

export default Form;