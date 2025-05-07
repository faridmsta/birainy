import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import Image from 'next/image'
import data from '@/assets/img/data.webp'

const lists = {
    frs: [
        "Kadr dəyişikliyi dərəcələri",
        "İşə qəbul xərcləri",
        "İşçilərin məşğulluq səviyyəsi",
        "Təlimin effektivliyi kimi göstəricilərin qiymətləndirilməsi.",

    ],

}

const Sec43 = () => {
    return (
        <section className='flex flex-col gap-6 pb-20'>
            <div className="title text-[2rem] vs:text-[2.5rem] md:text-[3rem] mtb:!text-[4rem] font-neue "
            >İnsan Resurslarının təhlili    </div>
            <div className="">
                <p className="text-[rgba(0,0,0,.72)]">İnsan resurslarının təhlili şirkətin işçilərinə aid məlumatların toplanması və təhlilini əhatə edir. Bu cür təhlil həm kəmiyyət, həm də keyfiyyət metodlarından istifadə etməklə həyata keçirilir, bura daxildir:</p>
                <ul>
                    {lists["frs"].map((item, index) => (
                        <li
                            className='font-grotesk text-[rgba(0,0,0,.72)] relative pl-6 after:absolute after:left-[6px] after:top-1/2 after:-translate-y-0.5 after:w-[6px] after:h-[6px] after:bg-[rgba(0,0,0,.72)] after:rounded-full'
                            key={item + index}>{item}</li>
                    ))}
                </ul>
            </div>
            <p className="text-[rgba(0,0,0,.72)]"
            >HR təhlilinin son məqsədi işçi qüvvəsinin planlaşdırılması üçün nümunələri, təkmilləşdirilməli sahələri və strateji imkanları müəyyən etməkdir.</p>

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

export default Sec43