import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import softImage from '@/assets/img/software_image.webp'
import Image from 'next/image'

const Sec11 = () => {
    return (
        <section className='flex flex-col gap-6 pb-20'>
            <div className="title text-[2rem] vs:text-[2.5rem] md:text-[3rem] mtb:!text-[4rem] font-neue "
            >Proqram Təminatı</div>
            <p className="text-[rgba(0,0,0,.72)]">BIRainy şirkətlərin istəklərinə uyğun olaraq proqram təminatı hazırlayır. Proqramın son trendlərə və interfeysinin rahat istifadəyə uyğun olması əsas üstünlüyümüzdür.</p>
            <p className="text-[rgba(0,0,0,.72)]">Müxtəlif sistemlər və mobil tətbiqlər, OCR əsaslı Sürətli Axtarış Sistemi, Telegram Bot-lar sayəsində şirkətlər müştəri əlaqələrinin gücləndirilməsinə, şirkət daxilindəki əməkdaşlar arasındakı işlərin idarə edilməsinə, prosesin sürətləndirilə və manuallığın azalıb avtomatlaşdırılmış formada həyata keçirilməsinə nail olurlar.</p>
            <div className="btns flex flex-col md:flex-row items-start gap-4 ">
                <ContactUsBtn />
                <OurWorksBtn />
            </div>
            <div className="image relative ">
                <Image
                    src={softImage}
                    alt='Software image'
                    className='w-full h-full object-cover rounded-[12px]'
                />
            </div>
        </section>
    )
}

export default Sec11