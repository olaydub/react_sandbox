

const Home = () => {

    const handleClick = (name, e) => {
        console.log('clicked: ' + name, e.target);
    }

    return (
        <div className = "Home">
            <h2>Dashboard</h2>
            <button onClick={(e) => handleClick('view', e)}>View Controls</button>
            <button onClick={(e) => handleClick('update', e)}>Update Controls</button>
        </div>
    );
}

export default Home;