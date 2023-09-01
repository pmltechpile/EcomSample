import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-main text-5xl mb-4 drop-shadow-md shadow-black">
          Protege tu paz
        </h1>
        <div className="flex-col">

        
        
        <UnderlineLink href="/store">Shop Now</UnderlineLink>
        </div>
      </div>
      <div className="flex">
        <Image
          src="/hero.png"
          loading="eager"
          priority={true}
          quality={90}
          alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
          className="absolute inset-0"
          draggable="false"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        {/* <Image
          src="/hero2.png"
          loading="eager"
          priority={true}
          quality={90}
          alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
          className="absolute inset-0"
          draggable="false"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        /> */}
      </div>
    </div>
  )
}

export default Hero
