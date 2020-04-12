import React from 'react';
import PageTitle from '../components/PageTitle'
import DynamicList from '../components/ListDynamic'
import { lists } from './lists'

const Taxes = () => {
    return (
        <div className='w-90 center bg-white'>
            <PageTitle title="Taxes" />
            <div>
                <DynamicList items={lists.test} />
           </div>
        </div>
    )
}

export default Taxes;