import ClientSay from "../components/ClientSay"
import ClientBottomReview from "../components/testimonial/ClientBottomReview"
import ClientTopReview from "../components/testimonial/ClientTopReview"
import TestimonialBanner from "../components/testimonial/TestimonialBanner"


const Testimonial = () => {
    return (
        <>
            <TestimonialBanner />
            <ClientTopReview />
            <ClientSay />
            <ClientBottomReview />
        </>
    )
}

export default Testimonial