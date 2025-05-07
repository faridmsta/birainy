import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import Image from 'next/image'
import data from '@/assets/img/data.webp'

const lists = {
    frs: [
        "Onun maliyyə hesabatlarını",
        "Mənfəət və zərər hesabatlarını",
        "Pulun dövriyyəsi haqqında hesabatları yoxlamağı əhatə edir. ",
    ],

}
const Sec42 = () => {
    return (
        <section className='flex flex-col gap-6 pb-20'>
            <div className="title text-[2rem] vs:text-[2.5rem] md:text-[3rem] mtb:!text-[4rem] font-neue "
            >Maliyyə təhlili</div>
            <div className="">
                <p className="text-[rgba(0,0,0,.72)]">Maliyyə təhlili şirkətin və ya təşkilatın maliyyə vəziyyətini qiymətləndirmək üçün:</p>
                <ul>
                    {lists["frs"].map((item, index) => (
                        <li
                            className='font-grotesk text-[rgba(0,0,0,.72)] relative pl-6 after:absolute after:left-[6px] after:top-1/2 after:-translate-y-0.5 after:w-[6px] after:h-[6px] after:bg-[rgba(0,0,0,.72)] after:rounded-full'
                            key={item + index}>{item}</li>
                    ))}
                </ul>
            </div>
            <p className="text-[rgba(0,0,0,.72)]">Bu təhlilin məqsədi şirkətin gəlirliliyini, likvidliyini və ödəmə qabiliyyətini qiymətləndirmək, əsaslandırılmış investisiya və ya kredit qərarları qəbul etməkdir.</p>
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

export default Sec42