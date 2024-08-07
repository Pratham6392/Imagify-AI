
import React from 'react'
import { Vortex } from '@/components/ui/Vortex'
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';
import {SignedIn, SignedOut} from '@clerk/nextjs';
import { navLinks } from '@/constants';
import { Link } from 'lucide-react';
import { Collection } from '@/components/shared/Collection';
import { getAllImages } from '@/lib/actions/image.actions';
import Image from "next/image";



const Home =async ({ searchParams }: SearchParamProps) => {
  
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery})
 
  return (
    <>
    <div className="w-[calc(100%-0rem)] mx-auto rounded-md  h-screen overflow-hidden">


      <SignedIn>
      <div className="home">
        <h1 className="home-heading">
          Unleash Your Creative Vision with Imaginify
        </h1>
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((link) => {
            return (
              
              <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              
              <li className="flex-center w-fit rounded-full bg-white p-4">
                <Image src={link.icon} alt="image" width={24} height={24}  />
              </li>
              
              <li className="p-14-medium text-center text-white">{link.label}</li>
              
            </Link>
            
            )
            
           
                 })}
        </ul>
      </div>

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
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          The hell is this?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
          burned and you&apos;ll have a scar.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Order now
          </button>
          <button className="px-4 py-2  text-white ">Watch trailer</button>
        </div>
      </Vortex>
      </SignedOut>
    </div>
    </>
  )
}

export default Home;
