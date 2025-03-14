// this is our main page that shows all user data
import ePalette from "./ePalette";

function Home() {
    return (
        <div className="navshift">
            <h1>This is our home page!</h1>
            <h2>Show average datamap of all user emotions here</h2>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                {Object.entries(ePalette).map(([emotion, color], index) => (
                    <div key={index} style={{ backgroundColor: color, width: "100px", height: "100px" }}>
                        {emotion}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;