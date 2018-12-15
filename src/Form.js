import React from 'react';

const Form = ({searchTerm, onChange, search}) => 
    <form>
        <input type="text" value={searchTerm} onChange={onChange} placeholder="Search" />
        <button onClick={search} type="button">Search</button>
    </form>

export default Form;