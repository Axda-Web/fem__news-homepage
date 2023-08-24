import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-16 md:space-y-20 xl:space-y-24">
      <div className="xl:grid xl:h-[511px] xl:grid-cols-3 xl:gap-x-7 space-y-16 md:space-y-20 xl:space-y-0">
        <article className="md:grid md:grid-cols-2 md:grid-rows-[repeat(2, auto)] md:col-span-2 md:row-span-2 md:gap-6">
          <Image
            className="sm:hidden mb-6 w-full h-auto"
            src="/assets/images/image-web-3-mobile.jpg"
            width={343}
            height={300}
            alt="article thumbnail"
          />
          <Image
            className="hidden sm:block sm:col-span-2 w-full h-auto"
            src="/assets/images/image-web-3-desktop.jpg"
            width={730}
            height={300}
            alt="article thumbnail"
          />
          <div>
            <h1 className="text-[40px] md:text-[56px] text-neutral--very-dark-blue font-extrabold leading-[56px] mb-4 sm:mb-0">
              The bright future of Web 3.0?
            </h1>
          </div>
          <div className="sm:flex sm:flex-col sm:justify-between sm:items-start space-y-6 sm:space-y-0">
            <p className="">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <Link
              className="bg-accent--soft-red text-neutral--off-white text-sm uppercase py-3 px-8 tracking-[4.38px] hover:bg-neutral--very-dark-blue transition-colors inline-block"
              href="#"
            >
              Read more
            </Link>
          </div>
        </article>
        <aside className="sm:row-span-2 bg-neutral--very-dark-blue px-6 py-8">
          <h2 className="text-accent--soft-orange font-bold text-[32px] sm:text-[40px]">
            New
          </h2>
          <ul className="divide-y-2 divide-neutral--dark-grayish-blue">
            <li className="py-8">
              <Link href="#">
                <h3 className="text-neutral--off-white text-xl font-extrabold hover:text-accent--soft-orange transition-colors">
                  Hydrogen VS Electric Cars
                </h3>
              </Link>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </li>
            <li className="py-8">
              <Link href="#">
                <h3 className="text-neutral--off-white text-xl font-extrabold hover:text-accent--soft-orange transition-colors">
                  The Downsides of AI Artistry
                </h3>
              </Link>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </li>
            <li className="py-8">
              <Link href="#">
                <h3 className="text-neutral--off-white text-xl font-extrabold hover:text-accent--soft-orange transition-colors">
                  Is VC Funding Drying Up?
                </h3>
              </Link>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </li>
          </ul>
        </aside>
      </div>
      <section>
        <ul className="md:flex md:flex-wrap md:items-center xl:justify-between md:gap-6 space-y-8 md:space-y-0">
          <li>
            <article className="flex gap-x-6 justify-between max-w-[350px]">
              <Image
                src="/assets/images/image-retro-pcs.jpg"
                width={100}
                height={127}
                alt="article thumbnail"
              />
              <div className="flex flex-col justify-between py-1">
                <span className="text-[32px] font-bold text text-neutral--grayish-blue">
                  01
                </span>
                <Link href="#">
                  <h3 className="font-extrabold text-lg hover:text-accent--soft-red whitespace-nowrap">
                    Reviving Retro PCs
                  </h3>
                </Link>
                <p>What happens when old PCs are given modern upgrades?</p>
              </div>
            </article>
          </li>
          <li>
            <article className="flex gap-x-6 justify-between max-w-[350px]">
              <Image
                src="/assets/images/image-top-laptops.jpg"
                width={100}
                height={127}
                alt="article thumbnail"
              />
              <div className="flex flex-col justify-between py-1">
                <span className="text-[32px] font-bold text text-neutral--grayish-blue">
                  02
                </span>
                <Link href="#">
                  <h3 className="font-extrabold text-lg hover:text-accent--soft-red whitespace-nowrap">
                    Top 10 Laptops of 2022
                  </h3>
                </Link>
                <p>Our best picks for various needs and budgets.</p>
              </div>
            </article>
          </li>
          <li>
            <article className="flex gap-x-6 justify-between max-w-[350px]">
              <Image
                src="/assets/images/image-gaming-growth.jpg"
                width={100}
                height={127}
                alt="article thumbnail"
              />
              <div className="flex flex-col justify-between py-1">
                <span className="text-[32px] font-bold text text-neutral--grayish-blue">
                  03
                </span>
                <Link href="#">
                  <h3 className="font-extrabold text-lg hover:text-accent--soft-red whitespace-nowrap">
                    The Growth of Gaming
                  </h3>
                </Link>
                <p>How the pandemic has sparked fresh opportunities.</p>
              </div>
            </article>
          </li>
        </ul>
      </section>
    </main>
  );
}
