import image1 from '../assets/sponser/01.png'
import image2 from '../assets/sponser/02.png'
import image3 from '../assets/sponser/03.png'
import image4 from '../assets/sponser/04.png'
import image5 from '../assets/sponser/05.png'

const Sponser = () => {
    return (
        <section>
            <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 my-20">
                <img src={image1} alt="" className="w-full h-auto max-w-[272px] max-h-[140px] object-cover" />
                <img src={image2} alt="" className="w-full h-auto max-w-[272px] max-h-[140px] object-cover" />
                <img src={image3} alt="" className="w-full h-auto max-w-[272px] max-h-[140px] object-cover" />
                <img src={image4} alt="" className="w-full h-auto max-w-[272px] max-h-[140px] object-cover" />
                <img src={image5} alt="" className="w-full h-auto max-w-[272px] max-h-[140px] object-cover" />
            </div>

        </section>
    )
}

export default Sponser