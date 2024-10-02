import ClintSayreusable from "./reuseable/ClintSayreusable"
import client from "../assets/client/client1.jpg"
import client2 from "../assets/client/client2.jpg"
import client3 from "../assets/client/client3.jpg"
import client4 from "../assets/client/client4.jpg"
import client5 from "../assets/client/client5.jpg"
import client6 from "../assets/client/client6.jpg"
import client7 from "../assets/client/client7.jpg"


const ClientSay = () => {
    return (
        <section className='bg-[url("/src/assets/map/map.png")] bg-no-repeat bg-cover bg-center h-[1000px] relative'>
            <div className="text-center pt-[100px]">
                <h6 className='font-dmSans font-medium text-[20px] text-transparent bg-gradient-to-r from-startC to-endC bg-clip-text '>Testimonial</h6>
                <h3 className='font-nuni font-bold text-[46px] text-main'>What Our Client Say</h3>
            </div>
            <div className="absolute top-[33.2%] left-[18%]">
                <ClintSayreusable image={client}
                    name="Christopher"
                    post="Senior Manager"
                    discription="There are many variations of passages of rem Ipsum available, but the majoritsy have suffer eration in some form, by injecteld humour, or mised words which don't look even." />
            </div>
            <div className="absolute top-[50%] left-[29.5%]">
                <ClintSayreusable image={client2}
                    name="Christopher"
                    post="Senior Manager"
                    discription="There are many variations of passages of rem Ipsum available, but the majoritsy have suffer eration in some form, by injecteld humour, or mised words which don't look even." />
            </div>
            <div className="absolute top-[66%] left-[38%]">
                <ClintSayreusable image={client3}
                    name="Christopher"
                    post="Senior Manager"
                    discription="There are many variations of passages of rem Ipsum available, but the majoritsy have suffer eration in some form, by injecteld humour, or mised words which don't look even." />
            </div>
            <div className="absolute top-[31.5%] left-[38.5%]">
                <ClintSayreusable image={client4}
                    name="Christopher"
                    post="Senior Manager"
                    discription="There are many variations of passages of rem Ipsum available, but the majoritsy have suffer eration in some form, by injecteld humour, or mised words which don't look even." />
            </div>
            <div className="absolute top-[30%] right-[38.5%]">
                <ClintSayreusable image={client5}
                    name="Christopher"
                    post="Senior Manager"
                    discription="There are many variations of passages of rem Ipsum available, but the majoritsy have suffer eration in some form, by injecteld humour, or mised words which don't look even." />
            </div>
            <div className="absolute bottom-[46%] right-[42.5%]">
                <ClintSayreusable image={client6}
                    name="Christopher"
                    post="Senior Manager"
                    discription="There are many variations of passages of rem Ipsum available, but the majoritsy have suffer eration in some form, by injecteld humour, or mised words which don't look even." />
            </div>
            <div className="absolute bottom-[23%] right-[19%]">
                <ClintSayreusable image={client7}
                    name="Christopher"
                    post="Senior Manager"
                    discription="There are many variations of passages of rem Ipsum available, but the majoritsy have suffer eration in some form, by injecteld humour, or mised words which don't look even." />
            </div>
        </section>
    )
}

export default ClientSay