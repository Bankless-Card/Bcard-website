import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <hr className="bg-grey mb-[1em] mt-[8em] border border-[grey]"></hr>

      <section className="mb-[4em] grid  place-items-center">
        <Image
          src={"/images/logo-dark.svg"}
          height={1}
          width={1}
          className="mb-[2em] ml-5 mt-[1em] w-[35%] md:w-[15%]"
          alt="logo"
        />

        { /* }
        <div className="center-align mt-[1.8em] flex w-[50%] justify-between gap-[4em] text-center max-sm:flex-col max-sm:justify-center">
          <Link className="mx-auto w-[fit-content]" href="">
            Link 1
          </Link>
          <Link className="mx-auto w-[fit-content]" href="">
            Link 2
          </Link>
          <Link className="mx-auto w-[fit-content]" href="">
            Link 3
          </Link>
          <Link className="mx-auto w-[fit-content]" href="">
            Link 4
          </Link>
        </div>
        */ }
      </section>
      <section className="max-sm:center-align flex justify-between max-sm:mt-[-1em] max-sm:flex-col max-sm:justify-center max-sm:gap-[4em]">
        <div className="flex justify-between w-[fit-content] gap-2 px-3 py-4 max-sm:mx-auto">
          <Link href="https://discord.gg/BsGmTdSqaz">
            <Image
              src="/icons/discord-alt-logo.svg"
              height={20}
              width={20}
              alt=""
            />
          </Link>
          <Link href="https://x.com/getbcard">
            <Image
              src="/icons/twitter-x-logo.svg"
              height={20}
              width={20}
              alt=""
            />
          </Link>
          <Link href="https://youtube.com/@getbcard?si=beyAfAtqgNfOq7Bn">
            <Image
              src="/icons/youtube-logo.svg"
              height={20}
              width={20}
              alt=""
            />
          </Link>
        </div>
        <p className="px-3 py-4 text-center text-[#9AA0A6] max-sm:mx-auto max-sm:text-[0.95em] md:ml-auto md:mr-0">
          © {currentYear} BCard
        </p>
      </section>
    </footer>
  );
}
