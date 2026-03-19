
function About({ title, description }){
    return (
        <div style={{ padding: '2rem 0' }}>
            <h1>{title}</h1>
            <div style={{ height: '3rem' }}></div>
            <p style={{ margin: '2rem 0', fontSize: '1.2em' }}>{description}</p>
        </div>
    )
}

export default About

