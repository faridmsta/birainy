import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import Image from 'next/image'
import data from '@/assets/img/data.webp'
const Sec48 = () => {
    return (
        <section className='flex flex-col gap-6 pb-20'>
            <div className="title text-[2rem] vs:text-[2.5rem] md:text-[3rem] mtb:!text-[4rem] font-neue "
            >SƏTƏM təhlili</div>
            <p className="text-[rgba(0,0,0,.72)]">Sağlamlıq, Əməyin Təhlükəsizliyi və Ətraf Mühit (SƏTƏM) risklərinin təhlili layihə və ya əməliyyatla bağlı potensial təhlükələrin qiymətləndirilməsini əhatə edir. Məqsədi bu risklərin ehtimalını və nəticələrini müəyyən etmək, təşkilatlara effektiv risklərin idarə edilməsi yanaşmalarını həyata keçirməyə imkan yaratmaqdır. SƏTƏM təhlili iş yerinin təhlükəsizliyinin və tənzimləmə qaydalarına uyğunluğun, xüsusən də, tikinti, istehsal və enerji kimi sənayelərin qorunmasında vacibdir.</p>
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