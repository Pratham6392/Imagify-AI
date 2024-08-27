import { Collection } from "@/components/shared/Collection"
import { Vortex } from "@/components/ui/Vortex"
import { navLinks } from "@/constants"
import { getAllImages } from "@/lib/actions/image.actions"
import { SignedIn, SignedOut } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"


const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery})

  return (
    <>
    <SignedIn>
      <section className="home">
        <h1 className="home-heading">
          Unleash Your Creative Vision with PhotoFusion
        </h1>
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center w-fit rounded-full bg-white p-4">
                <Image src={link.icon} alt="image" width={24} height={24} />
              </li>
              <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <section className="sm:mt-12">
        <Collection 
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
      </SignedIn>
      <SignedOut>

      <div className="w-[calc(100%)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        PhotoFusion
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        "Transform Your Photos, Transform Your World – Let Your Imagination Run Wild 🌈
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Order now
          </button>
          <button className="px-4 py-2  text-white ">Watch trailer</button>
        </div>
      </Vortex>
    </div>
      </SignedOut>
    </>
  )
}

export default Home;