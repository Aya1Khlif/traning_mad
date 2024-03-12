

const InformationCard = () => {
    return (
        <div className='Ak-Name'>
            <h3>Name</h3>
            <div className='flex gap-[13px] mt-[25px]'>
                <img src={Name} alt="this is icon" />
                <p className='Ak-car'>choose name</p>
                <img src={select} alt="this is image" />
            </div>
        </div>
    )
}

export default InformationCard
