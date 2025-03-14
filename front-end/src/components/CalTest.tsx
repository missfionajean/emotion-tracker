// this is our main page that shows all user data
import ePalette from "./ePalette";

function CalTest() {
    return (
        <div className="navshift">
            <h1>Calendar Test Page</h1>
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

export default CalTest;