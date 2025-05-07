import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import React from 'react'

const lists = {
    frs: [
        "Müştərilərin diqqətini 1-ə 5 artırmaq;",
        "Müştərilərin hansısa konkret məhsula (məhsullara) daha çox diqqət və maraq göstərməsini təmin etmək;",
        "Tədbirlərin əyləncə hissəsini daha maraqlı və aktiv hala gətirmək;",
        "Əsas biznes proseslərini mərkəzləşdirilmiş şəkildə idarə olunmasını;",

    ],
 
}

const Sec32 = () => {
    return (
        <section className='flex flex-col gap-6 pb-20 '>
            <div className="serviceSectionTitle"
            >CRM və ERP</div>
            <p className="serviceSectionParagraf">BIRainy şirkəti şirkətlərin istəyinə və istifadə edəcəkləri istiqamətə uyğun olaraq özlərinə məxsus elementlərin, logonun da yer aldığı və müştərilərinin endirimlər qazanaraq əylənə bilmələri üçün stend və VR oyunlar yazır.</p>
            <div className="">
            <p className="serviceSectionParagraf">Stend və VR oyunları event, forumlar, tədbirlər, açılışlarda şirkətə qazandırır:</p>
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
            <iframe className='w-full ' width="560" height="315" src="https://www.youtube.com/embed/NAiTQcoDT0o?si=cjUTFoadeicTqxua" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </section>
    )
}

export default Sec32