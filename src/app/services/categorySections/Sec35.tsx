import React from 'react'

const Sec35 = () => {

    return (
        <section className='flex flex-col gap-6 '>
            <div className="serviceSectionTitle"
            >Oyun monitoru kirayəsi</div>
            <p className="serviceSectionParagraf">Təqdim etdiyimiz stend oyunlarla birgə monitorları da kirayələmək mümkündür.</p>
            <div className="">
                <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
                    <div className="bg-gray-light font-grotesk w-full md:w-[49%]  py-3 px-[18px] vs:py-4 vs:px-6 flex items-center justify-between rounded-[12px]">
                        <span className='text-[rgba(0,0,0,.64)] text-[14px] vs:text-[16px]'
                        >Ekran dioqanalı</span>
                        <span className=" text-[16px] vs:text-[18px] md:text-[20px]">139sm (55”)</span>
                    </div>
                    <div className="bg-gray-light font-grotesk w-full md:w-[49%]  py-3 px-[18px] vs:py-4 vs:px-6 flex items-center justify-between rounded-[12px]">
                        <span className='text-[rgba(0,0,0,.64)] text-[14px] vs:text-[16px]'
                        >Gövdəsi</span>
                        <span className=" text-[16px] vs:text-[18px] md:text-[20px]">Dəmir karkas</span>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="bg-gray-light font-grotesk w-full py-3 px-[18px] vs:py-4 vs:px-6 flex items-center justify-between rounded-[12px]">
                        <span className='text-[rgba(0,0,0,.64)] text-[14px] vs:text-[16px]'
                        >Monitor</span>
                        <span className=" text-[16px] vs:text-[18px] md:text-[20px]">Anti-vandal şüşə, qoruyucu ekran və touch sensor panel</span>
                    </div>
                </div>
            </div>
            <iframe className='w-full aspect-video rounded-[12px]'  src="https://www.youtube.com/embed/mGGKKrV1OJE?si=KUtSGdvho7MfxW0L" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </section>
    )
}

export default Sec35