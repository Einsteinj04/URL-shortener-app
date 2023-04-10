import HeroImage from '../../images/illustration-working.svg'

const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 md:py-20 py-20 gap-y-5 gap-x-24 items-center w-full dark:bg-verydarkviolet mt-10 sm:px-20 px-5">
      <div className="">
        <h1
          className="lg:text-6xl md:text-5xl text-4xl font-bold leading-tight mb-3 md:text-left text-center dark:text-white text-[#34313D]"
          style={{ lineHeight: 1.3 }}
        >
          More than just shorter links
        </h1>
        <div className="text-gray md:text-2xl text-xl mb-5 md:text-left text-center">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </div>
        <button className="text-white bg-cyan px-6 py-2 rounded-full md:text-2xl text-xl md:m-0 mx-auto grid place-items-center ease-in-out duration-300 hover:scale-110">
          Get Started
        </button>
      </div>
      <div className="md:order-last order-first justify-center items-center">
        <img src={HeroImage} className="w-full" />
      </div>
    </section>
  );
}

export default Hero