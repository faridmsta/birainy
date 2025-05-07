import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import Image from 'next/image'
import React from 'react'
import uxui from '@/assets/img/ui-ux_website.webp'
import optimization from '@/assets/img/optimization_website.webp'
import front from '@/assets/img/front_website.webp'
import back from '@/assets/img/backend_website.webp'
import cyber from '@/assets/img/cyber_website.webp'
import seo from '@/assets/img/seo_website.webp'


const VebServices = [
    {
        title: "UI/UX dizayn",
        desc: "Şirkətin vizyonuna uyğun son trendlərə əsaslanan istifadəçi interfeysinin dizayn edilməsi.",
        image: uxui
    },
    {
        title: "Mobil Optimizasiya",
        desc: "Vebsaytın müxtəlif ölçülü mobil cihazlara uyğunlaşdırılması.",
        image: optimization
    },
    {
        title: "Front-end",
        desc: "Dizaynların HTML, CSS, JS kimi müxtəlif proqramlaşdırma dilləri ilə piksel dəqiqliyində kodlaşdırılması.",
        image: front
    },
    {
        title: "Back-end",
        desc: "Sistem arxitekturasının yaradılması və maksimum sürətli işləməsinin təmin edilməsi.",
        image: back
    },
    {
        title: "Kiber Təhlükəsizlik",
        desc: "Sistemlərin, şəbəkələrin, proqramların, cihazların və məlumatların kiberhücumlardan qorunması.",
        image: cyber
    },
    {
        title: "SEO",
        desc: "Saytların keywordlərə uyğun axtarış sistemlərində ilk sıralarda görünməsini təmin etmək.",
        image: seo
    },
]

const Sec21 = () => {
    return (
        <section className='flex flex-col gap-6 pb-20'>
            <div className="serviceSectionTitle"
            >Saytların yaradılması</div>
            <p className="serviceSectionParagraf">Şirkətlərin vizyonuna uyğun olaraq sayt hazırlayırıq. Sayt trendə uyğun olaraq dizaynerlərimiz tərəfindən dizayn edilir. HTML5, CSS, JS (react js., vue js., angular js.) kimi proqramlaşdırma dilləri ilə son texnologiyalardan istifadə edərək piksel dəqiqliyində kodlaşdırılıb müxtəlif ölçülü mobil və digər cihazlara uyğunlaşdırılır. Sonda qurulmuş sayt üçün sistem arxitekturası yaradılır və maksimum sürətli işləməsi təmin edilir.</p>
            <div className="btns flex flex-col md:flex-row items-start gap-4 ">
                <ContactUsBtn />
                <OurWorksBtn />
            </div>
            <div className="gridContainer grid grid-cols-1 gap-4 mtb:grid-cols-2">
                {
                    VebServices.map(({ title, desc,image }, index) => (
                        <div key={title+index} className=" bg-gray-light rounded-[12px]">
                            <div className="top pt-[20px] px-[20px] vs:pt-6 vs:px-6">
                                <h5 className='font-neue text-[18px]  vs:text-[20px] mb-1'>{title}</h5>
                                <p className='font-grotesk text-[14px] vs:text-[16px]  text-[rgba(0,0,0,.72)] '>{desc}</p>
                            </div>
                            <div className="bottom">
                                <div className="image relative w-[80%] ml-auto">
                                    <Image
                                        src={image}
                                        alt={title}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

        </section>
    )
}

export default Sec21