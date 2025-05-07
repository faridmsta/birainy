import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import Image from 'next/image'
import data from '@/assets/img/data.webp'
const Sec46 = () => {
    return (
        <section className='flex flex-col gap-6 pb-20'>
            <div className="serviceSectionTitle"
            >Əsas Performans Göstəriciləri (KPI) təhlili</div>
            <p className="text-[rgba(0,0,0,.72)]">KPI təhlili şirkətin fəaliyyətinin onun strateji məqsəd və vəzifələrinə
                uyğun qiymətləndirilməsini əhatə edir. Bu proses, müştəri saxlamaq
                dərəcəsi, satış artımı və ya işçilərin məhsuldarlığı kimi şirkətin uğuru
                üçün vacib olan KPI-lərin seçilməsini və izlənilməsini nəzərdə tutur.
                Əsas Performans Göstəriciləri təhlili şirkətin fəaliyyətinə dair fikirlər
                təqdim edən dəyərli vasitədir və biznes nəticələrini yaxşılaşdırmaq
                üçün məlumatlara uyğun əsaslandırılmış qərarlar qəbul etməyə
                imkan verir.</p>
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

export default Sec46