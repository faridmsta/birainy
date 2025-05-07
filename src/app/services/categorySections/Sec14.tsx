import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import Image from 'next/image'
import softimage from '@/assets/img/mobile_image.webp'

const Sec14 = () => {
    return (
        <section className='flex flex-col gap-6'>
            <div className="serviceSectionTitle"
            >Mobil tətbiqlər</div>
            <p className="serviceSectionParagraf">Müştərilərin tələblərinə uyğun olaraq son trendlərə əsaslanaraq mobil tətbiq UX/UI dizaynerlər tərəfindən istifadəçi üçün rahat və gözoxşayan şəkildə dizayn edilir. Dizayna əsasən də müxtəlif proqramlaşdırma dilləri və kitabxanası ilə ən yeni texnologiyalardan istifadə edərək kodlaşdırılır. Yazdığımız mobil tətbiqlər həm IoS, həm də Android əməliyyat sistemində dəstəklənə bilir.</p>
            <div className="btns flex flex-col md:flex-row items-start gap-4 ">
                <ContactUsBtn />
                <OurWorksBtn />
            </div>
            <div className="image relative rounded-[12px] overflow-hidden">
                <Image
                    src={softimage}
                    alt='Softimage'
                    className='w-full h-full object-cover'
                />
            </div>
        </section>
    )
}

export default Sec14