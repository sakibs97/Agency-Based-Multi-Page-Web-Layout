import ClientSay from "../components/ClientSay"
import ClientTopReview from "../components/testimonial/ClientTopReview"
import TestimonialBanner from "../components/testimonial/TestimonialBanner"


const Testimonial = () => {
    return (
        <>
            <TestimonialBanner />
            <ClientTopReview />
            <ClientSay />
        </>
    )
}

export default Testimonial