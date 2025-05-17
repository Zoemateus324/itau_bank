import { ContainerGrid } from "./ContainerGrid";

export function SectionServices() {
    return (
        <section className="w-full h-[965px]">

        <ContainerGrid>

            <div className="flex-1 max-w-[594px] pt-32">
                <span className="block text-primary-orange
                text-sm font-bold uppercase mb-9">Serviços exclusivos</span>
                <h2 className="text-primary-gray text-[56px]
                font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa</h2>
                <p className=" text-lg m-w-[554px] mb-16
                text-secondary-gray">Veja como vocoê pode cuidar das suas finanças pelo app Itaú de forma segura,
                    rápida e o melhor, no conforto da sua casa.</p>
            </div>
        </ContainerGrid>
                </section>
    )
}