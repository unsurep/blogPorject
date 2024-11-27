'use client'

import React from "react"
import Image from "next/image";

const Hero=()=>{
    return (
        <>
            <main className="px-[15rem]">
                <h1 className="flex gap-2 items-center py-10 text-4xl font-bold">Writing <span className="bg-orange-500 p-1 rounded-full"></span></h1>

                <div>
                    {/* blog post 1 */}
                    <div className="mb-5">
                        <div>
                            <Image src="/images/b1.jpg" alt="blog_post_1" width={900} height={900} className="rounded-lg" />
                        </div>
                        
                        <div className="px-[5rem]">
                            <h1 className="font-bold text-xl py-5">Cheerful Loving Couple Bakers Drinking Coffee</h1>

                            <p className="text-base">It is no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching  out to  digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving  with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this  article looks at …</p>

                            <div className="py-5">
                                <button className=" text-base border-orange-700 border px-4 py-2 rounded-full">Continue Reading</button>
                            </div>
                        </div>
                    </div>

                    <hr/>

                    {/* blog post 2 */}
                    <div className="my-5">
                        <div>
                            <Image src="/images/b2.jpg" alt="blog_post_1" width={900} height={900} className="rounded-lg" />
                        </div>
                        
                        <div className="px-[5rem]">
                            <h1 className="font-bold text-xl py-5">Loft Office With Vintage Decor For Creative Working
                            </h1>

                            <p className="text-base">It is no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at …</p>

                            <div className="py-5">
                                <button className=" text-base border-orange-700 border px-4 py-2 rounded-full">Continue Reading</button>
                            </div>
                        </div>
                    </div>

                    <hr/>

                    {/* blog post 3 */}
                    <div className="my-5">
                        <div>
                            <Image src="/images/b3.jpg" alt="blog_post_1" width={900} height={900} className="rounded-lg" />
                        </div>
                        
                        <div className="px-[5rem]">
                            <h1 className="font-bold text-xl py-5">Cosy Bright Office In Yellow And Grey Colors
                            </h1>

                            <p className="text-base">It is no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at …</p>

                            <div className="py-5">
                                <button className=" text-base border-orange-700 border px-4 py-2 rounded-full">Continue Reading</button>
                            </div>
                        </div>
                    </div>

                    <hr/>

                    {/* blog post 4 */}
                    



                </div>
            </main>
        </>
    )



};

export default Hero;