import Card from './Card.jsx'

function Home(){
    return (
        <div>
            <h1>Fruit Shop</h1>
            <p>Welcome to my fruit shop!</p>
            
            <Card name="Lychee" description="Lychees are white." />
            <Card name="Pineapple" description="Pineapples are orange?" />
            <Card name="Cherry" description="Cherries are blue???" />
        </div>
    )
}

export default Home

