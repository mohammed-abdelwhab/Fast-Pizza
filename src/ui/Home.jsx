import CreateUser from "../features/user/CreateUser";
import pizzaHero from "../assets/pizza.png";

function Home() {
  return (
    <div className="block md:grid md:grid-cols-2 md:items-center md:gap-10 lg:gap-16">
      {/* Left Block */}
      {/* Added mt-4 to provide a clean margin below the header layout on mobile profiles */}
      <div className="mt-5 pt-1 md:mt-0">
        <p className="font-body text-xs text-stone-500 sm:text-sm">
          Dough stretched by hand, fired by wood.
        </p>

        {/* Slogan Container */}
        <div className="mt-2 flex items-center justify-between gap-4 md:mt-3 md:block">
          <h1 className="font-display font-black leading-[0.9] tracking-tight">
            <div className="block text-[clamp(2.2rem,8vw,7rem)] md:text-[clamp(3rem,11vw,8rem)]">
              THE
            </div>
            <div className="block text-[clamp(2.2rem,8vw,7rem)] md:text-[clamp(3rem,11vw,8rem)]">
              BEST
            </div>
            <div className="relative inline-block">
              <span className="absolute -bottom-1 -left-2 h-[0.6em] w-full bg-red-600" />
              <span className="relative text-[clamp(2.2rem,8vw,7rem)] text-stone-900 md:text-[clamp(3rem,11vw,8rem)]">
                PIZZA.
              </span>
            </div>
          </h1>

          {/* Mobile Pizza View */}
          <div className="block w-48 min-w-[8rem] sm:w-52 md:hidden">
            <img
              src={pizzaHero}
              alt="Mini pizza"
              className="h-auto w-full animate-float-pizza object-contain p-1 drop-shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
            />
          </div>
        </div>

        <p className="mt-4 max-w-sm font-body text-sm text-stone-500 sm:text-base md:mt-6 md:max-w-md">
          Hand-stretched dough, wood-fired at 450°, and delivered to your door
          before it cools.
        </p>

        <div className="mt-6 md:mt-8">
          <CreateUser />
        </div>
      </div>

      {/* Desktop Pizza View */}
      <div className="hidden h-full w-full items-center justify-center p-4 md:flex">
        <img
          src={pizzaHero}
          alt="Wood-fired pepperoni pizza"
          className="hover:scale-130 h-auto w-full max-w-[480px] scale-125 animate-float-pizza object-contain p-6 drop-shadow-[0_25px_30px_rgba(0,0,0,0.22)] transition-transform duration-500 ease-out"
        />
      </div>
    </div>
  );
}

export default Home;
