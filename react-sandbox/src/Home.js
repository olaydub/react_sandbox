import { useState } from 'react';

const Home = () => {
    //let view = 'default dash view'
    const [view, setView] = useState('default view')

    const handleClick = (name, e) => {
        setView(name + ' chosen');
        console.log('clicked: ' + name, e.target);
    }

    return (
        <div className = "Home">
            <h2>Dashboard</h2>
            <p> { view } </p>
            <button onClick={(e) => handleClick('view controls', e)}>View Controls</button>
            <button onClick={(e) => handleClick('update controls', e)}>Update Controls</button>
        </div>
    );
}

export default Home;