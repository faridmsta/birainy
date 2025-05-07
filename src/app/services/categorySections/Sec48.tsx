import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import Image from 'next/image'
import data from '@/assets/img/data.webp'
const Sec48 = () => {
    return (
        <section className='flex flex-col gap-6'>
            <div className="serviceSectionTitle"
            >SƏTƏM təhlili</div>
            <p className="serviceSectionParagraf">Sağlamlıq, Əməyin Təhlükəsizliyi və Ətraf Mühit (SƏTƏM) risklərinin təhlili layihə və ya əməliyyatla bağlı potensial təhlükələrin qiymətləndirilməsini əhatə edir. Məqsədi bu risklərin ehtimalını və nəticələrini müəyyən etmək, təşkilatlara effektiv risklərin idarə edilməsi yanaşmalarını həyata keçirməyə imkan yaratmaqdır. SƏTƏM təhlili iş yerinin təhlükəsizliyinin və tənzimləmə qaydalarına uyğunluğun, xüsusən də, tikinti, istehsal və enerji kimi sənayelərin qorunmasında vacibdir.</p>
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

export default Sec48