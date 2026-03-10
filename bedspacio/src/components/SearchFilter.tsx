
// ICONS
import Search from '@/asset/icon/search.svg'

import { getBranches } from '../../lib/branch'
import SearchFilterClient from './SearchFilterClient';


export default async function SearchFilter() {
    const branches = await getBranches();


    return (
        <div className="relative flex flex-col xl:flex-row lg:flex-row md:flex-col items-center justify-center w-full gap-2">
            <SearchFilterClient branchData={branches}/>
        </div>
    )
}