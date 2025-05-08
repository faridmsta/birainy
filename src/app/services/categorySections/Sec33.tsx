import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import React from 'react'
const lists = {
    frs: [
        "Axtarış sistemində biznes veb-saytlarının təbii yollarla artımını təmin edir;",
        "Sayta daxil olan şəxslərin saytda daha çox vaxt keçirməsini təmin edir;",
        "Saytın aktivliyini artırır və trafik axınını təmin edir;",
        "Axtarış motorlarında saytın ön sıralarda görünməsini təmin edir.",

    ],
 
}


const Sec33 = () => {
  return (
    <section className='flex flex-col gap-6 '>
            <div className="serviceSectionTitle"
            >CRM və ERP</div>
            <p className="serviceSectionParagraf">İstifadəçinin uzun müddət veb-saytda qalması və axtarış sistemində biznes veb-saytlarının təbii yollarla artımını təmin etmək üçün veb oyunların yazılması</p>
            <div className="">
                <ul>
                    {lists["frs"].map((item, index) => (
                        <li
                            className='font-grotesk text-[rgba(0,0,0,.72)] relative pl-6 after:absolute after:left-[6px] after:top-1/2 after:-translate-y-0.5 after:w-[6px] after:h-[6px] after:bg-[rgba(0,0,0,.72)] after:rounded-full'
                            key={item + index}>{item}</li>
                    ))}
                </ul>
            </div>
            

            <div className="btns flex flex-col md:flex-row items-start gap-4">
                <ContactUsBtn />
                <OurWorksBtn />
            </div>
            <iframe className='w-full aspect-video rounded-[12px]' src="https://www.youtube.com/embed/NAiTQcoDT0o?si=cjUTFoadeicTqxua" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </section>
  )
}

export default Sec33