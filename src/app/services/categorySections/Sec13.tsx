import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import React from 'react'

const lists = {
    CRM: [
        "Rutin tapşırıqların avtomatlaşdırılması;",
        "Müştərilərin davranışı haqqında anlayışlar;",
        "Müştəriləri ilə güclü, davamlı əlaqələr qurmaq üçün qarşılıqlı əlaqələr."
    ],
    ERP: [
        "Əsas biznes proseslərini mərkəzləşdirilmiş şəkildə idarə olunmasını;",
        "Dəqiq və real vaxt rejimində məlumatı;",
        "Məhsuldarlığın və səmərəliliyin yüksəldilməsini;",
        "Əməliyyat xərclərinin azaldılmasını."
    ]
}

const Sec13 = () => {
    return (
        <section className='flex flex-col gap-6 '>
            <div className="serviceSectionTitle"
            >CRM və ERP</div>
            <div className="">
                <p className="serviceSectionParagraf ">CRM sistemi ilə şirkətlərin qazandığı üstünlüklər:</p>
                <ul>
                    {lists["CRM"].map((item, index) => (
                        <li
                            className='font-grotesk text-[rgba(0,0,0,.72)] relative pl-6 after:absolute after:left-[6px] after:top-1/2 after:-translate-y-0.5 after:w-[6px] after:h-[6px] after:bg-[rgba(0,0,0,.72)] after:rounded-full'
                            key={item + index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="">
                <p className="serviceSectionParagraf ">ERP sistemi şirkətlər üçün təmin edir:</p>
                <ul>
                    {lists["ERP"].map((item, index) => (
                        <li
                            className='text-[rgba(0,0,0,.72)]  relative pl-6 after:absolute after:left-[6px] after:top-1/2 after:-translate-y-0.5 after:w-[6px] after:h-[6px] after:bg-[rgba(0,0,0,.72)] after:rounded-full'
                            key={item + index}>{item}</li>
                    ))}
                </ul>
            </div>
          
            <div className="btns flex flex-col md:flex-row items-start gap-4">
                <ContactUsBtn />
                <OurWorksBtn />
            </div>
            <iframe className='w-full aspect-video rounded-[12px]' src="https://www.youtube.com/embed/qUpIJZT0V4A?si=42wyktAWG5CcOYTd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <p className="serviceSectionParagraf">Həmçinin ERP sistemi əməliyyatları avtomatlaşdırmağa, qərar qəbul etməyi təkmilləşdirməyə və rəqabət üstünlüyü əldə etməyə kömək edir.</p>
            <p className="serviceSectionParagraf">BIRainy sizin üçün sektor, sistem və fəaliyyətin çətinlik dərəcəsinə fərq qoymadan istənilən formatda ERP sistemi hazırlayır.</p>
        </section>
    )
}

export default Sec13