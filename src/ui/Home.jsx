import CreateUser from "../features/user/CreateUser";
import pizzaHero from "../assets/pizza.png";

function Home() {
  return (
    <div className="mt-5 grid grid-cols-[1fr_auto] items-center gap-x-4 md:mt-0 md:grid-cols-2 md:gap-x-10 lg:gap-x-16">
      {/* 1. Eyebrow + heading */}
      <div className="md:col-start-1 md:row-start-1">
        <p className="font-body text-xs text-stone-500 sm:text-sm">
          Dough stretched by hand, fired by wood.
        </p>

        <h1 className="mt-2 font-display text-[clamp(2.2rem,8vw,7rem)] font-black leading-[0.9] tracking-tight text-stone-900 md:mt-3 md:text-[clamp(3rem,min(11vw,calc((100vh_-_24rem)/2.7)),9rem)]">
          <span className="block">THE</span>
          <span className="block">BEST</span>
          <span className="relative inline-block">
            <span className="absolute -bottom-1 -left-2 h-1.5 w-full bg-red-600" />
            <span className="relative">PIZZA.</span>
          </span>
        </h1>
      </div>

      {/* 2. Pizza: the only image, for all screen sizes */}
      <div className="flex w-40 justify-center sm:w-48 md:col-start-2 md:row-span-2 md:row-start-1 md:w-full md:overflow-hidden md:p-4">
        <img
          src={pizzaHero}
          alt="Wood-fired pepperoni pizza"
          className="h-auto w-full animate-float-pizza object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.2)] md:max-h-[55vh] md:max-w-[560px] md:drop-shadow-[0_25px_30px_rgba(0,0,0,0.22)]"
        />
      </div>

      {/* 3. Description + form */}
      <div className="col-span-2 md:col-span-1 md:col-start-1 md:row-start-2">
        <p className="mt-4 max-w-sm font-body text-sm text-stone-500 sm:text-base md:max-w-md">
          Hand-stretched dough, wood-fired at 450°, and delivered to your door
          before it cools.
        </p>

        <div className="mt-6 md:mt-5">
          <CreateUser />
        </div>
      </div>
    </div>
  );
}

export default Home;
