import image1 from '../assets/sponser/01.png'
import image2 from '../assets/sponser/02.png'
import image3 from '../assets/sponser/03.png'
import image4 from '../assets/sponser/04.png'
import image5 from '../assets/sponser/05.png'

const Sponser = () => {
    return (
        <section>
            <div className="container grid grid-cols-5 gap-5 my-20">
                <img src={image1} alt="" className='w-[272px] h-[140px]' />
                <img src={image2} alt="" className='w-[272px] h-[140px]' />
                <img src={image3} alt="" className='w-[272px] h-[140px]' />
                <img src={image4} alt="" className='w-[272px] h-[140px]' />
                <img src={image5} alt="" className='w-[272px] h-[140px]' />
            </div>
        </section>
    )
}

export default Sponser