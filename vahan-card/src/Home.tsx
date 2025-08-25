import {Card, IntroducingCards, Highlights, Blogs} from "./Components.js"
import scamImage from "./assets/scam.png";

function Home(){
    const cardsData=[
        {title:"Enhance Convenience",
        description:"Offer a hassle-free way to manage travel expenses using the Vahan Card.",
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

    const introducingData=[
        {
            title:"Quick & Easy Travel",
            description:"Say goodbye to cash! Pay instantly on buses and local rides with just a tap of your Vahan Card.",
            image:"/src/assets/credit-card.png"
        },

         {
            title:"Hassle-Free Commute",
            description:"Load your card once and travel worry-free. No queues, no delays—just smooth journeys every day.",
            image:"/src/assets/credit-card.png"
        },

         {
            title:"Smart Student Savings",
            description:"Enjoy discounts and save on every ride. Vahan Card makes your daily commute lighter on your wallet.",
            image:"/src/assets/credit-card.png"
        },    
    ]


    const HighlightCards = [
        {
            subheadline:"SMART TRAVEL",
            heading: "Introducing Vahan Card for Daily Commute.",
            description:"No more searching for loose change—just tap your card and go. Vahan Card makes commuting in buses and local vehicles faster, safer, and stress-free.",
            button:"Get Started Today",
            image: "/src/assets/girl-in-a-bus.png"
        },
        {
            subheadline:"CASHLESS RIDES",
            heading: "Seamless Payments with Vahan Card.",
            description:"Load once, travel everywhere. With instant payments and student discounts, your daily rides are now smoother and lighter on your wallet.",
            button:"Apply for a Vahan Card",
            image: "/src/assets/girl-paying-with-card.png"
        }
    ]


    const BlogsData = [
        {
            subheading:"Scam Alert",
            image:scamImage,
            heading:"Back to School Scams: What Parents and Students Need to...",
            pdate:"Aug 22, 2024",
            rtime: "3 min read"
        },
        {
            subheading:"Scam Alert",
            image:scamImage,
            heading:"Back to School Scams: What Parents and Students Need to...",
            pdate:"Aug 22, 2024",
            rtime: "3 min read"
        },
        {
            subheading:"Scam Alert",
            image:scamImage,
            heading:"Back to School Scams: What Parents and Students Need to...",
            pdate:"Aug 22, 2024",
            rtime: "3 min read"
        }
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
                            <h4 className="sub-heading-text">Trending</h4>
                            <h2>Introducing Vahan Card for Easy Travel Payments<span className="green-dot">.</span></h2>
                            <p className="paragraph">Experience a new way of texting with Truecaller on your desktop. Getting started is as easy as scanning a QR code. With just a few clicks, you'll be up and running.</p>
                            <button>Learn More</button>
                        </div>

                        <div className="trending-image">
                            <img src="/src/assets/Smiling-woman-phone.png" alt="Smiling woman with card" />
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="introducing">
                <div className="container">
                    <div className="introducting-cards">
                        {
                            introducingData.map((introducing,index)=>(
                                <IntroducingCards key={index} title={introducing.title} description={introducing.description} image={introducing.image} />
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className="highlights">
                <div className="container">
                    <div className="highlights-container">
                        {HighlightCards.map((highlight,index)=>(
                            <Highlights key={index} subheadline={highlight.subheadline} heading={highlight.heading} button={highlight.button} image={highlight.image} description={highlight.description} reverse={index % 2 !== 0}/>
                        ))
                        }
                    </div>
                </div>
            </section>


            <section className="blogs">
                <div className="container">
                    <div className="blog-inner">
                        {
                            BlogsData.map((blog,index)=>(
                                <Blogs key={index} subheading={blog.subheading} image={blog.image} heading={blog.heading} date={blog.pdate} time={blog.rtime}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;

