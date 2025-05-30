import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import softImage from '@/assets/img/software_image.webp'
import Image from 'next/image'

const Sec11 = () => {
    return (
        <section className='flex flex-col gap-6 '>
            <div className="serviceSectionTitle"
            >Proqram Təminatı</div>
            <p className="serviceSectionParagraf">BIRainy şirkətlərin istəklərinə uyğun olaraq proqram təminatı hazırlayır. Proqramın son trendlərə və interfeysinin rahat istifadəyə uyğun olması əsas üstünlüyümüzdür.</p>
            <p className="serviceSectionParagraf">Müxtəlif sistemlər və mobil tətbiqlər, OCR əsaslı Sürətli Axtarış Sistemi, Telegram Bot-lar sayəsində şirkətlər müştəri əlaqələrinin gücləndirilməsinə, şirkət daxilindəki əməkdaşlar arasındakı işlərin idarə edilməsinə, prosesin sürətləndirilə və manuallığın azalıb avtomatlaşdırılmış formada həyata keçirilməsinə nail olurlar.</p>
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