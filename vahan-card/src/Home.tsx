import Card from "./Components.jsx"

function Home(){
    const cardsData=[
        {title:"Enhance Convenience",
        description:"Offer a hassle-free way to manage travel expenses using the Bahan Card.",
        image:"/src/assets/payment-method.png"},

        {title:"Save More",
        description:"Enjoy exclusive student discounts and affordable fares every time you travel.",
        image:"/src/assets/payment-method.png"},

        {title:"Seamless Payments",
        description:"Pay instantly with just a tap, no need to carry cash or worry about change.",
        image:"/src/assets/payment-method.png"},

        {title:"Track Expenses",
        description:"Monitor your travel spending easily with clear and transparent transaction history.",
        image:"/src/assets/payment-method.png"},

    ]
    return(
        <main>
            <section className="hero">
                <div className="container">
                    <div className="inner-container">
                        <h1>Quick and Easy Travel Payments for Students</h1>

                    <div className="main-buttons">
                        <button className="btn btn-primary">Vahan Card for web</button>

                        <button className="btn btn-tertiary"> <img src="./assets/warning-icon.png" alt="" className="btn-icon" /> Get a Vahan Card</button>
                    </div>
                    </div>
                    </div>
            </section>

            <section className="what-we-do">
                <div className="container">
                    <h2>What we do</h2>

                    <div className="cards-section">
                        {
                            cardsData.map((card, index)=>(
                                <Card 
                                key={index}
                                title={card.title}
                                description={card.description}
                                image={card.image}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
            
        </main>
    )
}

export default Home;

