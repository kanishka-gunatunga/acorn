import {PortableText} from 'next-sanity'
import {getTermsData} from "../../../sanity/api";


// interface TermsAndConditionsData {
//     title: string;
//     body: any[];
// }


const TermsAndConditions = async () => {

    const termsData = await getTermsData();
    console.log("terms: ", termsData);

    return (
        <div className="min-h-screen py-16 bg-white lato">
            <h1 className="lato mt-15 md:mt-20 lg:mt-30 font-bold text-[#3C3C3C] text-[20px] text-center mb-6 md:text-[35px] lg:text-[45px] sm:text-[30px] xs:text-[25px]">{termsData.title}</h1>
            <div
                className="font-light justify-left leading-12 px-4 sm:px-6 md:px-15 mt-6 text-base md:text-lg lg:text-xl">
                <PortableText value={termsData.body}/>
            </div>
        </div>
    );
}

export default TermsAndConditions;