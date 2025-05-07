import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import React from 'react'

const Sec34 = () => {
    return (
        <section className='flex flex-col gap-6 pb-20 '>
            <div className="title text-[2rem] vs:text-[2.5rem] md:text-[3rem] mtb:!text-[4rem] font-neue "
            >VR simulyatorlar</div>
            <p className="font-grotesk text-[rgba(0,0,0,.72)] ">BIRainy tərəfindən şirkətlərin istəklərinə uyğun olaraq VR simulyatorlar yazılır və hololens, ocolus kimi VR eynəklərlə təmin edilir.</p>

            <iframe className='w-full ' width="560" height="315" src="https://www.youtube.com/embed/UjkdWji87Nw?si=NVAHhKIsarnZt8tO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </section>
    )
}

export default Sec34