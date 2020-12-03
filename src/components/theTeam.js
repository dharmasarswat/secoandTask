const TheTeam = () => {
    return (
        <div className='productOwnerBox' style={{marginLeft: '20px'}}>
            <img src={process.env.PUBLIC_URL+'/images/threePerson.jfif'} alt="singleperson" />
            <div className="textBold textLarge">The Team</div>
        </div>
    )
}

export default TheTeam