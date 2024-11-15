//()
import Image from "next/image";

let comparisonData = [
  {
    name: "community fundraising",
    fields: [true, false, false, false],
  },
  {
    name: "Onboarding users to web3",
    fields: [true, false, false, false],
  },
  {
    name: "Non-custodial options",
    fields: [true, false, false, false],
  },
];

export default function LandingPage() {
  return (
    <>
      <div className="">
        <header className="mx-[1em] mb-[2em] mt-[1em] rounded-lg bg-[#2D2D2D] text-white md:mx-[2.2em]">
          <div className="flex px-[1em] py-[1.2em] md:px-[25]">
            <Image
              src={"/images/logo-dark.svg"}
              height={100}
              width={100}
              alt="logo"
            />
            <button className="ml-auto mr-0">
              <Image
                className=" min-w-[25px]"
                src={"/images/hamburger.svg"}
                height={1}
                width={1}
                alt="ham"
              />
            </button>
          </div>
        </header>

        <section className="mt-[4em] grid h-[fit-content] place-items-center">
          <div className="relative grid h-[100%] w-[100%]">
            <Image
              src={"/images/curve 1.svg"}
              className="absolute w-[100%]"
              height={1}
              width={1}
              alt=""
            />

            <Image
              src={"/images/curve 2.svg"}
              className="cover absolute z-10 w-[150%] pt-3"
              height={1}
              width={1}
              alt=""
            />

            <div className="z-50">
              <div className=" flex flex-col-reverse px-[2em] text-center md:grid md:grid-cols-[1fr,1fr] md:px-[3.5em] md:text-left ">
                <button className="mx-auto mt-6 block rounded-md bg-[#FF005C] px-[2.4em] py-[0.7em] md:hidden">
                  {" "}
                  Sign up Now
                </button>
                <Image
                  src={"/images/debit-card-web.svg"}
                  className="hidden w-[86%] md:block"
                  height={1}
                  width={1}
                  alt="nlnjlnl"
                />
                <Image
                  src={"/images/bcard-home-hero.png"}
                  className="block w-[86%] md:hidden "
                  height={1}
                  width={1}
                  alt="nlnjlnl"
                />

                <div className="flex flex-col py-[2.5em]">
                  <h2 className="poppins text-[1.85em] font-semibold leading-10 lg:text-[2.4em] lg:leading-[1.3em] ">
                    The Card to support your community{" "}
                    <span className="text-[#7F7F7F]">with every swipe!</span>
                  </h2>
                  <p className="mt-[1em] max-w-[85%] text-[#A1A1A1] max-sm:mx-auto">
                    Your BCard redirects payment card fees to your favorite
                    community, and rewards you with tokens.
                  </p>
                  <button className="mx-auto mt-5 hidden rounded-md bg-[#FF005C] px-[2.4em] py-[0.7em] md:block">
                    {" "}
                    Sign up Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5 mt-[5em] grid place-items-center md:mt-[15em]">
          <div className="flex h-[max-content] flex-col gap-[3em] p-5 md:grid md:w-[76%] md:grid-cols-[1fr,1fr,1fr]  md:gap-6">
            <div className="gradient-bg-1 center-align flex h-[100%] w-[100%] flex-col justify-center rounded-[1.4em] p-4 shadow-lg">
              <Image
                src={"/images/card 1.png"}
                className="cover mx-auto w-[100%]"
                height={1}
                width={1}
                alt="image"
              />

              <h3 className="mt-2 text-center text-[1.6em] font-semibold leading-8 ">
                The <span className="text-[#FF5810]">community</span> owned
                card!
              </h3>
              <p className="mb-2 mt-[1em] text-center text-[0.95em] leading-5">
                Your Defy Card is by DAOs, for DAOs. Unlike centralized crypto
                cards, you have a say in how we build the future.
              </p>
            </div>

            <div className="gradient-bg-2 center-align flex h-[100%] w-[100%] flex-col justify-center rounded-[1.4em] p-4 shadow-lg">
              {" "}
              <Image
                src={"/images/card 2.png"}
                className="cover mx-auto w-[90%]"
                height={1}
                width={1}
                alt="image"
              />
              <h3 className="mt-2 text-center text-[1.6em] font-semibold leading-8 ">
                Support your <span className="text-[#13B5EC]">favorite</span>{" "}
                communities
              </h3>
              <p className="mb-2 mt-[1em] text-center text-[0.95em] leading-5">
                Every time you use a card, 1-2% of the purchase price goes to a
                bank. Bankless Card redirects some of that fee to your favorite
                community.
              </p>
            </div>

            <div className="gradient-bg-3 center-align flex h-[100%] w-[100%] flex-col justify-center rounded-[1.4em] p-4 shadow-lg">
              {" "}
              <Image
                src={"/images/card 3.png"}
                className="cover mx-auto w-[78%]"
                height={1}
                width={1}
                alt="image"
              />
              <h3 className="mt-2 text-center text-[1.6em] font-semibold leading-8 ">
                Easily
                <span className="text-[#27FFA4]"> onboard</span> new members
              </h3>
              <p className="mb-2 mt-[1em] text-center text-[0.95em] leading-5">
                With our easy-to-use mobile app, you can onboard new friends
                into your community with a simple download.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-[6em] mt-[8em] grid w-screen place-items-center">
          <div className="gradient-bg-table flex flex-col gap-1 rounded-2xl px-2 pb-5 md:px-5">
            <div className="grid h-[75px] w-[86vw] grid-cols-[0fr,1fr,1fr,1fr,1fr] gap-3 text-center md:w-[73vw] md:grid-cols-[120px,1fr,1fr,1fr,1fr]">
              <div className="h-[100%] w-[100%] "></div>
              <div className="h-[100%] w-[100%] text-[1em] font-semibold md:text-[1.25em]">
                BCard
              </div>
              <div className="h-[100%] w-[100%] text-[0.82em] font-semibold md:text-[1em]">
                Borderless banking cards
              </div>
              <div className="h-[100%] w-[100%] text-[0.82em] font-semibold md:text-[1em]">
                Crypto reward cards
              </div>
              <div className="h-[100%] w-[100%] text-[0.82em] font-semibold md:text-[1em]">
                Crypto spend cards
              </div>
            </div>
            {comparisonData.map((item, value) => (
              <>
                <div className="flex h-[fit-content] w-[100%] flex-col gap-3 text-center md:grid md:h-[70px] md:grid-cols-[120px,auto]">
                  <hr className="block border-[grey] bg-[grey] md:hidden"></hr>
                  <div className="h-[100%] w-[100%] pl-5 text-left text-[0.96em] font-semibold max-sm:text-[0.7] md:text-center">
                    {item.name}
                  </div>
                  <hr className="block border-[grey] bg-[grey] md:hidden"></hr>
                  <div className="mb-[1em] grid h-[100%] w-[100%] grid-cols-[1fr,1fr,1fr,1fr] gap-3">
                    <div className="h-[100%] w-[100%]">
                      {item.fields[0] ? (
                        <Image
                          src={"/images/green-tick.png"}
                          className="cover mx-auto mt-0 min-w-[50px]"
                          height={1}
                          width={1}
                          alt="image"
                        />
                      ) : (
                        null
                      )}
                    </div>
                    <div className="h-[100%] w-[100%]">
                      {item.fields[1] ? "yes" : null}
                    </div>
                    <div className="h-[100%] w-[100%]">
                      {item.fields[2] ? "yes" : null}
                    </div>
                    <div className="h-[100%] w-[100%]">
                      {item.fields[3] ? "yes" : null}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </section>
        <section className="flex w-screen mb-[5em] max-sm:mt-[10em]">
          <div className="grid relative w-[100%]">
            <div className="absolute">
            <Image
                src={"/images/curve 4.png"}
                className="w-[100%]"
                height={1}
                width={1}
                alt=""
              />
            </div>
            

              <div className="flex flex-col md:grid md:grid-cols-[1fr,1fr,1fr] gap-[7em] md:gap-5 mx-auto z-40 w-[90%]">
                <div className=" flex flex-col center-align justify-center md:mt-[5em] text-center">
                  <Image
                    src={"/images/android-phone.svg"}
                    className="w-[34%] mx-auto"
                    height={1}
                    width={1}
                    alt=""
                  />
                  <h3 className="text-[1.4em] mt-4 font-semibold leading-8">Download the App</h3>
                  <p className="text-[0.95em] mt-2 max-w-[80%] mx-auto">Get a physical/virtual card, choose a community</p>
                </div>

                <div className=" flex flex-col center-align justify-center md:mt-[-5em] text-center">
                  <Image
                    src={"/images/credit-card-bubbles.svg"}
                    className="w-[66%] mx-auto"
                    height={1}
                    width={1}
                    alt=""
                  />
                  <h3 className="text-[1.4em]  font-semibold leading-8 max-w-[85%] mx-auto">Make purchases, get token rewards
                  </h3>
                  <p className="text-[0.95em] mt-2 max-w-[80%] mx-auto">50% of net interchange goes to chosen community</p>
                </div>

                <div className=" flex flex-col center-align justify-center text-center md:mt-[4em]">
                  <Image
                    src={"/images/Union.svg"}
                    className="w-[50%] mx-auto"
                    height={1}
                    width={1}
                    alt=""
                  />
                  <h3 className="text-[1.4em] mt-4 font-semibold leading-8">Support your community</h3>
                  <p className="text-[0.95em] mt-2 max-w-[80%] mx-auto">{`User’s community enjoys increased economic stability and health`}</p>
                </div>
              </div>
          </div>
          
        </section>
        <section className="hidden md:grid place-items-center mt-[8em]">
          <div className="grid relative w-[110%]">
          <div className="absolute">
            <Image
                src={"/images/curve 5.png"}
                className="w-[100%]"
                height={1}
                width={1}
                alt=""
              />
            </div>
            <div className="grid place-items-center text-center w-[90%] mx-auto pt-[8em] z-40">
              <h2 className="text-[2.7em] mb-5 max-w-[50%] font-semibold leading-[1.3em]">Give your community a way to support your cause  </h2>
              <p className="md:max-w-[35%]">BCard works for every community, no matter how big or small, whether or not you have a token. </p>
            </div>
          </div>
        </section>


        <section className="relative mb-[15em] z-50">
          <div className="flex flex-col-reverse max-sm:w-[92%] w-[90%] md:grid md:place-items-center md:grid-cols-[1fr,1fr] h-[fit-content] mx-auto md:h-[5em] mt-[2em] md:mx-auto w-[70%] gap-[5em] md:gap-[6em]">
            <div className="p-5 shadow-md gradient-bg-blue-purple rounded-xl h-[100%] w-[100%]">
              <div className="flex flex-col-reverse md:grid md:grid-cols-[70%,30%] pt-4 gap-2">
                <h2 className="text-[1.6em] md:text-[1.4em] max-sm:mt-[-1.8em] md:px-4 font-semibold leading-8">{`Bcard powers your community’s `}{<span className="text-[#08BFFF]">economic</span>} engine</h2>
                <div>
                  <Image
                src={"/images/image 22.svg"}
                className="w-[50%] max-sm:h-[10%] max-sm:mt-[-3.6em] md:w-[90%] max-sm:mx-auto max-sm:rotate-90 mix-blend-screen"
                height={1}
                width={1}
                alt=""
              /></div>
              </div>
              <p className="hidden md:block text-center mt-4 leading-6">Using BCard, each member of your community creates recurring revenue with their existing everyday spending</p>
            </div>


            <div className="p-5 shadow-md gradient-bg-green-purple rounded-xl h-[100%] w-[100%]">
              <div className="flex flex-col-reverse md:grid md:grid-cols-[70%,30%] pt-4 gap-2">
                <h2 className="text-[1.6em] max-sm:mt-5 md:text-[1.4em] md:px-4 font-semibold leading-8"><span className="text-[#14FF00]">Fuelling</span> projects and aspirations with every swipe</h2>
                <div className="max-sm:flex max-sm:gap-[1.5em] max-sm:justify-center">
                  <Image
                    src={"/images/arrow.svg"}
                    className="max-sm:w-[20%] md:w-[80%] mix-blend-screen"
                    height={1}
                    width={1}
                    alt=""
                  />
                   <Image
                    src={"/images/arrow.svg"}
                    className="block md:hidden w-[20%] mix-blend-screen"
                    height={1}
                    width={1}
                    alt=""
                  />
              </div>
              </div>
              <p className="hidden md:block text-center mt-4 leading-6">{`BCard uses payment card fees to buy your community’s tokens from a DEX, creating organic token demand.`}</p>
            </div>
           
          </div>
        </section>


        <section className="grid place-items-center mt-[3.5em] md:mt-[25em]">
          <h3 className="mb-[1.5em] text-[2.4em]">Meet the team</h3>
          <div className="grid relative place-items-center w-screen">
            <div className="absolute">
              <Image
                src={"/images/curve 6.svg"}
                className="w-[100%] mt-[-8em]"
                height={1}
                width={1}
                alt=""
              />
            </div>
            <div className="flex flex-col md:grid md:grid-cols-[1fr,1fr,1fr] place-items-center z-50 gap-[4em] mx-auto w-[90%] md:w-[80%]">
              <Image
                src={"/images/bacard uiser 2.png"}
                className="w-[100%]"
                height={1}
                width={1}
                alt=""
              />
              <Image
                src={"/images/bcard user 3.png"}
                className="w-[100%]"
                height={1}
                width={1}
                alt=""
              />
              <Image
                src={"/images/bcard user 1 (1).png"}
                className="w-[100%]"
                height={1}
                width={1}
                alt=""
              />
              
              </div>
              
          </div>
          <button className="z-50 mx-auto mt-5 bg-[black] rounded-md border border-white px-[2.6em] py-[0.7em]">Meet all of us</button>
        </section>


        <section className="grid place-items-center mt-[6em] mb-[5em]">
          <h3 className="tracking-[0.7em]">OUR PARTNERS</h3>
          <div className="mt-[4em] flex max-sm:flex-col gap-[4em] max-sm:justify-center justify-between center-align w-[50%]">
          <Image
                src={"/images/image 15.svg"}
                className="w-[6em] mx-auto"
                height={1}
                width={1}
                alt=""
              />
            <Image
                src={"/images/DAO Logo.svg"}
                className="w-[6em] mx-auto"
                height={1}
                width={1}
                alt=""
              />
              
              <Image
                src={"/images/image 16.svg"}
                className="w-[6em] mx-auto"
                height={1}
                width={1}
                alt=""
              />
          </div>
        </section>

        <section className="hidden md:grid place-items-center mt-[10em]">
          <h3 className="mb-[1.5em] text-[2em] font-semibold">FAQ</h3>
          <p className="px-3 py-5 border border-white mt-1">
          Dive into our FAQs for all you need to know about navigating the world with BCard</p>
          <div className="mt-[3em] border border-white w-[70%] h-[26em]"></div>
        </section>



        <section className="grid place-items-center  mt-[10em] mb-[5em]">
        <h3 className="mb-[1.5em] text-[1.8em] font-semibold text-center leading-[2em]">Ready to get started?{<br></br>}Contact us.</h3>
          <div className="flex flex-col gap-4 w-[90%] md:w-[65%] justify-center center-align">
            <div className="flex max-sm:flex-col max-sm:w-[200%] gap-4 w-[100%]">
            <input 
            type="text"  
            placeholder="Name" 
            className="bg-[#1C1C1C] text-white placeholder-gray-400 rounded-lg border border-gray-600 p-2 pl-4 w-[50%]"
        />
        <input 
            type="text" 
            placeholder="TheDaoist@protonmail.com" 
            className="bg-[#1C1C1C] text-white placeholder-gray-400 rounded-lg border border-gray-600 p-2 pl-4 w-[50%]"
        />
            </div>
            <div className="flex max-sm:flex-col max-sm:w-[200%] gap-4 w-[100%]">
            <input 
            type="text" 
            placeholder="Discord Handle" 
            className="bg-[#1C1C1C] text-white placeholder-gray-400 rounded-lg border border-gray-600 p-2 pl-4 w-[50%]"
        />
        <input 
            type="text" 
            placeholder="Organization" 
            className="bg-[#1C1C1C] text-white placeholder-gray-400 rounded-lg border border-gray-600 p-2 pl-4 w-[50%]"
        />
            </div>
            <div>
            <textarea 
            placeholder="Write a message for us!" 
            className="bg-[#1C1C1C] text-white placeholder-gray-400 rounded-lg border border-gray-600 p-2 pl-4 w-[100%] h-60"
        ></textarea>
            </div>
          </div>
          <button className="mx-auto mt-[2em] rounded-md bg-[#FF005C] px-[2.6em] py-[0.7em]">
                    {" "}
                    Contact us
                  </button>
        </section>

        <section>
        <Image
                src={"/images/Frame 10.svg"}
                className="w-[100%] mt-[8em] max-sm:hidden max-sm:mb-[5em]"
                height={1}
                width={1}
                alt=""
              />
        </section>

    
    <section className="max-sm:hidden">
    <Image
              src={"/images/logo-dark.svg"}
              height={1}
              width={1}
              className="w-[10%] ml-5 mt-[15em] mb-[2em]"
              alt="logo"
            />
  
        <hr className="mb-[14em] bg-grey border-[grey] border"></hr>
    </section>
 
          
   
      </div>
    </>
  );
}
