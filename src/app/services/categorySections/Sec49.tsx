import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import Image from 'next/image'
import data from '@/assets/img/data.webp'

const lists = {
    frs: [
        "Qoyulmuş hədəflərə nə qədər nail olunduğu, hansı ərazilərdə daha yaxşı və ya pis nəticə əldə edildiyi",
        "Lokal ərazilərdə üstünlük verilən məhsullar və markalar",
        "Müxtəlif dövrlər ərzində həyata keçən satışların analizi, ən gəlirli günlərin təhlili",
        "Müştərilərin demoqrafik göstəricilər üzrə almağa daha meyilli olduğu məhsul və markalar",
        "Müştərilərin üstünlük verdiyi ödəniş üsulları və valyuta",
        "Anbarlara daxil olan və oradan mağazalara daşınan məhsullar haqqında statistikalar"
    ],
};


const Sec49 = () => {
    return (
        <section className='flex flex-col gap-6 pb-20'>
            <div className="title text-[2rem] vs:text-[2.5rem] md:text-[3rem] mtb:!text-[4rem] font-neue "
            >Satış/KPI</div>
            <p className="text-[rgba(0,0,0,.72)]">BIRainy tərəfindən təqdim olunan Satış və KPI analizi hesabatı, satış prosesinin müxtəlif fazalarını izləməyə imkan verir. Bu hesabat vasitəsilə sahibkarlar, anbarların vəziyyəti, müştəri qruplarının seçimləri, satışlar və əldə edilmiş gəlirlər haqqında detallı məlumatla təchiz olunurlar.</p>
            <div className="">
                <p className="text-[rgba(0,0,0,.72)]">Hesabat bu metrikləri ehtiva edir:</p>
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

export default Sec49