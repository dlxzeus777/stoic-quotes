import React from 'react'

const App = () => {
    const [stoicQuotes, setStoicQuotes] = React.useState(
        {
            author: '',
            quote: ''
        }
    )

    React.useEffect(() => {
        fetchQuote()
    }, [])

    function fetchQuote() {
        fetch("https://stoicquotesapi.com/v1/api/quotes/random")
            .then(response => response.json())
            .then(data => setStoicQuotes(
                { author: data.author, quote: data.body }
            ))

        let color = Math.floor(Math.random() * 90)

        document.body.style.backgroundColor = `rgb(${color},${color},${color})`
    }

    const { author, quote } = stoicQuotes

    return (
        <>
        <h1>Stoic Quotes</h1>
            <div className='container'>
                <div className='quote'>
                    <h2>"{quote}"</h2>
                </div>
                <div className='author'>
                    <p>-{author}</p>
                </div>
                <button onClick={fetchQuote}>Get a new stoic quote!</button>
            </div>
        </>
    )
}

export default App