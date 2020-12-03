import '../css/productOwner.css'

const ProductOwner = () => {
    return (
        <div className='productOwnerBox'>
            <img src={process.env.PUBLIC_URL+'/images/singleperson.jfif'} alt="singleperson" />
            <div className="textBold textLarge">Product Owner</div>
        </div>
    )
}
export default ProductOwner