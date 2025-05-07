import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'

const Sec47 = () => {
    return (
        <section className='flex flex-col gap-6 pb-20'>
            <div className="serviceSectionTitle"
            >1C proqramı ilə inteqrasiya</div>
            <p className="serviceSectionParagraf">1C proqramından verilənlərin Microsoft Power BI-a qoşulması biznes məlumatlarının təhlili və vizuallaşdırılması üçündür. Bu inteqrasiya şirkətlərə real vaxt rejimində məlumat təhlilindən istifadə etməklə yaxşı əsaslandırılmış qərarlar qəbul etmək imkanı verir.</p>
            <div className="btns flex flex-col md:flex-row items-start gap-4 ">
                <ContactUsBtn />
                <OurWorksBtn />
            </div>
         
        </section>
    )
}

export default Sec47