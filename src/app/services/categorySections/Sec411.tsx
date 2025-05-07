import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import Image from 'next/image'
import data from '@/assets/img/data.webp'

const lists = {
    frs: [
        "Restoran barədə ümumi informasiya (menyu, kateqoriya və filial sayı)",
        "Servis/Qida reytinqi",
        "Ortalama xidmət zamanı",
        "Kateqoriyalar/Restoranlar/Ödəmə tipi/Müştəri tipi/Sifarişin növü/Menyular üzrə ödəniş",
        "Məhsullar üzrə porsiya sayı",
        "Ümumi ödəniş",
        "Ödənişlərin keçən ayla faiz fərqi",
        "Müştəri sayı",
        "Müştəri sayının keçən ayla faiz fərqi",
        "Tarix üzrə ödənişlər və müştəri sayının dinamikası",
        "Rüblər üzrə müştəri sayının faizlə bölgüsü",
        "Tarix üzrə məhsul və xidmət reytinqinin dinamikası",
        "Məhsulların təsviri",
    ],
};


const Sec411 = () => {
    return (
        <section className='flex flex-col gap-6'>
            <div className="serviceSectionTitle"
            >Restoranlar</div>
            <p className="serviceSectionParagraf">Restoranlar üzrə təhlil restoranın fəaliyyətinin müxtəlif aspektləri haqqında məlumat verən mühüm vasitədir. O, maliyyə sağlamlığını qiymətləndirməyə, qərar qəbul etməyə, inventarları idarə etməyə, müştərilərin seçimlərini başa düşməyə, işçilərin fəaliyyətini qiymətləndirməyə və qaydalara uyğunluğu təmin etməyə kömək edir. </p>
            <div className="">
                <p className="serviceSectionParagraf">BIRainy komandası tərəfindən hazırlanmış dashboardu əhatə edir:</p>
                <ul>
                    {lists["frs"].map((item, index) => (
                        <li
                            className='font-grotesk text-[rgba(0,0,0,.72)] relative pl-6 after:absolute after:left-[6px] after:top-1/2 after:-translate-y-0.5 after:w-[6px] after:h-[6px] after:bg-[rgba(0,0,0,.72)] after:rounded-full'
                            key={item + index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="btns flex flex-col md:flex-row items-start gap-4 ">
                <ContactUsBtn />
                <OurWorksBtn />

            </div>
            <div className="image relative ">
                <Image
                    src={data}
                    alt='Software image'
                    className='w-full h-full object-cover rounded-[12px]'
                />
            </div>
        </section>
    )
}

export default Sec411