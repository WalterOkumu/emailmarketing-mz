import Image from "next/image";


export default function TestimonialItem() {

    const profile = '/profile.jpg';

    return(
        <div className="flex flex-row gap-4">
            <div className="">
                <Image src={profile} width={150} height={150} className="rounded object-cover" alt="Profile"/>
            </div>
            <div className="md:self-start">
                <p  className="font-bold">José Manel</p>
                <p className="text-xs text-gray-600">CEO da Blast Enterprise</p>
                <p className="text-xs w-2/3 pt-1"><span className="text-[#FFF200]"></span> Lorem ipsum dolor sit amet, 
                    consecterur adipiscing elit,
                    sed do elusmod tempor<span className="text-[#FFF200]"></span> 
                </p>
            </div>
        </div>
    );
}