import { ContainerGrid } from "./ContainerGrid";
import Image from "next/image";
import PhoneIcon from "@/assets/icon-phone.svg" ;
import SoluctionsIcon from '@/assets/icon-solutions.svg';
import OptionsIcon from '@/assets/icon-options.svg';
import CardIcon from '@/assets/icon-card.svg';
import ImagePhone from '@/assets/phone.png'
export function SectionServices() {
    return (
        <section className="relative w-full h-[965px] ">

        <ContainerGrid>

            <div className="flex-1 max-w-[610px] pt-32">
                <span className="block text-primary-orange
                text-sm font-bold uppercase mb-9">Serviços exclusivos</span>
                <h2 className="text-primary-gray text-[56px]
                font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa</h2>
                <p className=" text-lg m-w-[554px] mb-16
                text-secondary-gray">Veja como vocoê pode cuidar das suas finanças pelo app Itaú de forma segura,
                    rápida e o melhor, no conforto da sua casa.</p>
                    <ul className="flex flex-col items-start gap-9">
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Image src={PhoneIcon} alt="Icon Phone"/>
                            </div>
                            
                            <p className="flex-1 text=txt-gray pr-2">Acompanhar sua conta, fazer transferências e 
                                pagamentos de onde estiver
                            </p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Image src={SoluctionsIcon} alt="Icon Phone"/>
                            </div>
                            
                            <p className="flex-1 text=txt-gray pr-2">
                                Soluções de empréstimos e renegociação para organizar suas finanças
                            </p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Image src={OptionsIcon} alt="Icon Phone"/>
                            </div>
                            
                            <p className="flex-1 text=txt-gray pr-2">Diversas opções de investimentos, de acordo com o seu perfil de investidor
                            </p>
                        </li>
                        <li className="flex items-center gap-9 ">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Image src={CardIcon} alt="Icon Phone"/>
                            </div>
                            
                            <p className="flex-1 text=txt-gray pr-2">Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual
                            </p>
                        </li>
                    </ul>
            </div>
        </ContainerGrid>
        <div className="absolute flex items-center top-0 right-0 w-[32%] h-full bg-gray-phone">

            <Image src={ImagePhone} 
            alt="ImagePhone" className="translate-x-[-50%]"/>
        </div>
                </section>
    )
}