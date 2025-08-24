import Card from "./Components.js"

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

            <section className="trending">
                <div className="container">
                    <div className="trending-inner">
                        <div className="trending-text">
                            <h4>Trending</h4>
                            <h2>Introducing Vahan Card for Easy Travel Payments<span className="green-dot">.</span></h2>
                            <p className="paragraph">Experience a new way of texting with Truecaller on your desktop. Getting started is as easy as scanning a QR code. With just a few clicks, you'll be up and running.</p>
                            <button>Learn More</button>
                        </div>

                        <div className="trending-image">

                        </div>
                    </div>
                </div>
            </section>
            
        </main>
    )
}

export default Home;

