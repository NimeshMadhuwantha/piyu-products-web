import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#fff8f2]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Image */}
          <div className="w-full">
            <Image
              src="/assets/images/about.jpg"
              alt="About Piyu Products"
              width={600}
              height={450}
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6">
              Made Like Mom’s Kitchen
            </h2>

            <p className="text-sm sm:text-base lg:text-lg mb-4 leading-relaxed">
              We believe good food brings people together. Every product is made
              using traditional recipes passed down through generations.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              No preservatives. No artificial colors. Just pure ingredients,
              hygiene, and a whole lot of love.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
