import { ContainerGrid } from "./ContainerGrid";
import Arrow from '@/assets/arrow-explorer.svg'
import ImgAppltStore from "@/assets/btn-apple-store.svg"
import ImgGoogleStore from '@/assets/btn-google-play.svg'
import Image from "next/image";
import WomanImage from '@/assets/woman.png'

export function SectionHero() {
    return (
        <section className="w-full
       h-[704px] bg-img_bg_hero bg-no-repeat 
       bg-center bg-cover">


            <div>
                <ContainerGrid>
                    <div className="flex-1 max-w-[500px] ">
                        <h1 className="text-white text-7xl font-bold mb-8" >Tenha seu banco na palma da mão.</h1>
                        <p className="text-white text-xl max-w-[408px] mb-8">Todas as operações que você precisa em
                            um só lugar. Simples, completo e feito pra você.</p>

                        <div className="flex gap-4 mb-24">
                            <button>
                                <Image
                                    src={ImgAppltStore}
                                    alt="ImgAppltStore"
                                />
                            </button>
                            <button>
                                <Image
                                    src={ImgGoogleStore}
                                    alt="ImgGoogletStore"
                                />
                            </button>
                        </div>
                        <button className="flex items-center gap-3">
                            <Image src={Arrow}
                                alt="Arrow"
                            />
                            <span className="text-white text-sm  font-bold">Continue explorando</span>
                        </button>



                    </div>
                    <Image
                        src={WomanImage}
                        alt="WomanImage"
                   className="mr-[-41px]" />
                </ContainerGrid>
            </div>
        </section>
    );
}