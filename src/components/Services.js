import Title from './Title';
import {services} from '../data';
import Service from './Service';
import { icon } from '@fortawesome/fontawesome-svg-core';

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title="OUR" subTitle="SERVICES"/>
      <div className='section-center services-center'>
          {services.map((item)=>{
              return ( <Service {...item} key={item.id} />)   
          })}
      </div>
    </section>
  )
}
export default Services