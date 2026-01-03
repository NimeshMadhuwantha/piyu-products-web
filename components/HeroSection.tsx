import Button from "./button";


export default function HeroSection() {
  return (
    <section
      className="min-h-[500px] flex items-center bg-cover bg-center rounded-2xl"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,.7), rgba(0,0,0,.2)), url('/assets/images/hero.jpg')",
      }}
    >
      <div className="max-w-xl px-8 text-white">
        <span className="inline-block mb-4 bg-primary px-3 py-1 text-xs rounded-full font-bold">
          100% HOMEMADE
        </span>
        <h1 className="text-5xl font-black mb-6">
          Healthy & Tasty <br />
          <span className="text-primary">Homemade Foods</span>
        </h1>
        <p className="mb-8">
          Authentic traditional snacks made with love and pure ingredients.
        </p>
        <Button text="Explore Foods" />
      </div>
    </section>
  );
}
