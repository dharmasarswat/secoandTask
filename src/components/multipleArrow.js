import '../css/multiArrow.css'

const MultipleArrow = () => {
    return (
        <div className='multipleArrowBox'>
            <div className="textBold textLarge">Input from Executive, Team, Stackholdres, Customers, Users </div>
            <img src={process.env.PUBLIC_URL+'/images/multipleArrow.jfif'} alt="Multiple Arrow" />
        </div>
    )
}

export default MultipleArrow