import IconSearch from '@/assets/icon-search.svg'
import Image from 'next/image'
export function Search() {
    return (
        <div className='flex items-center gap-4'>
            <Image
                src={IconSearch}
                alt="IconSearch"
            />

            <input type="text" placeholder='Olá! Faça uma busca '
            className='bg-transparent outline-none pr-4 text-white placeholder:text-white'/>
        </div>
    )
}