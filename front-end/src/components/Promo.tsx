interface PromoContent {
    image: string;
    tagline: string;
    description: string;
}

const content: PromoContent[] = [
    {
        image: "images/slay.png",
        tagline: "string",
        description: "string",
    },
    {
        image: "images/bbgwoot.jpg",
        tagline: "string",
        description: "string",
    },
    {
        image: "src link",
        tagline: "string",
        description: "string",
    }
]

const Promo = () => {
    return (
        <div>
            <ul className="list-unstyled">
                {content.map((item, index) => (
                    <div className="contentList" key={index}>
                        <li>
                            <div>
                                <img src={item.image} />
                            </div>
                            <div>
                                <h2>{item.tagline}</h2>
                                <p>{item.description}</p>
                            </div>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Promo;