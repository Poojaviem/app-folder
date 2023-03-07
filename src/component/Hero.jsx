import React from 'react'
import Herocart from './Herocart'
import data from '../Record'
import { SimpleGrid } from '@chakra-ui/react'

export default function Hero() {
 return (

    <>
    <div className='container'>
    
       
       <SimpleGrid w="100%" columns={{base:3,lg:4}} spacing={4}>
       {
        data.map((product)=>
        <Herocart key={product.id} product={product}/>
        )
       }
       </SimpleGrid>
      
       </div>
</>
        
)
      }

