import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import Image from 'next/image'
import data from '@/assets/img/data.webp'
const Sec44 = () => {
    return (
        <section className='flex flex-col gap-6 pb-20'>
            <div className="title text-[2rem] vs:text-[2.5rem] md:text-[3rem] mtb:!text-[4rem] font-neue "
            >Optimizasiya təhlili</div>
            <p className="text-[rgba(0,0,0,.72)]">Optimallaşdırma təhlili resursların bölüşdürülməsi və ya seçim edilməsini nəzərdə tutan problemin optimal həllini müəyyən etmək üçün riyazi model və metodlardan istifadə prosesinə aiddir. Optimallaşdırma təhlili maliyyə, mühəndislik, logistika və əməliyyatların idarə edilməsi kimi sahələrdə geniş tətbiq sahəsinə malikdir və səmərəliliyin artırılmasına, xərclərin azaldılmasına, təkmilləşdirilmiş performansa kömək edir.</p>
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

export default Sec44