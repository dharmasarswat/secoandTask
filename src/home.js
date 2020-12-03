import ProductOwner from "./components/productOwner"
import ProductBacklog from "./components/productBacklog"
import SPMeating from "./components/sPMeating"
import TheTeam from "./components/theTeam"
import SprintBacklog from "./components/sprintBacklog"
import MultipleArrow from "./components/multipleArrow"

const Home = () => {
    return (
        <div className="homeWraper">
            <div className="productWraper">
                <MultipleArrow />
                <ProductOwner />
                <ProductBacklog />
            </div>
            <div className="sprintWraper">
                <TheTeam />
                <div className="sprintbox">
                    <SPMeating />
                    <SprintBacklog />
                </div>
            </div>
            {/* <div className="endBlockWraper">
                <div className="upperBlock">

                </div>
            </div> */}
        </div>
    )
}

export default Home