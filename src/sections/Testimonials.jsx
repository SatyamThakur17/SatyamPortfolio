import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  // Helper to get base-aware image path
  const getImgPath = (path) =>
    `${import.meta.env.BASE_URL}${path.replace(/^\/SatyamPortfolio\//, "")}`;

  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Feedback highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  {testimonial.imgPath && (
                    <img
                      src={getImgPath(testimonial.imgPath)}
                      alt={testimonial.name}
                      className="w-10 h-10 object-contain"
                    />
                  )}
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
