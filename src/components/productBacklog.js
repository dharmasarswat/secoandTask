import '../css/productBacklog.css'

const ProductBacklog = () => {
    const totalLines = ['Quick search', 'Username lookup', 'Advanced search', 'Matchmaking', 'Search for members', 'Hot List & Black list', 'ZIP-codes search', 'Top-rated profiles']
    return (
        <div className="productBacklogBox">
            <div className="linesWraperBox">
                <div className="lines">
                { totalLines.map((data, index) => (
                    <div className="productBlockline"><span className="index">{index+1} </span><spna className="data">{data}</spna></div> 
                )) }
                </div>
                <div className="boxShadow"></div>
            </div>
            <div className="textBold textLarge">Product Backlog</div>
        </div>
    )
}

export default ProductBacklog