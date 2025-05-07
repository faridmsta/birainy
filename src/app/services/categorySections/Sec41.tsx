import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import Image from 'next/image'
import data from '@/assets/img/data.webp'
const Sec41 = () => {
    return (
        <section className='flex flex-col gap-6'>
            <div className="serviceSectionTitle"
            >Data analitikası</div>
            <p className="serviceSectionParagraf">BIRainy MMC tərəfindən şirkətin dataları bütün mənbələrdən müxtəlif formatlarda toplandıqdan sonra təmizlənir. Təmizlənmiş datalar qrafiklərlə vizuallaşdırılır və analiz olunduqdan sonra biznes yönümlü analitik həllər şirkətə təklif edilir. Son mərhələdə hazırlanmış dashboard-larda şirkət real vaxt rejimində yeni datalara əsasən məlumatları da görə bilir.</p>
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

export default Sec41