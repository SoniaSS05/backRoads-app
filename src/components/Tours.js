import Title from './Title';
import {tours} from '../data';
import Tour from './Tour';

const Tours = () => {
  return (
    <section className='section' id="tours" >
      <Title title="FEATURED" subTitle="TOURS"/>
      <div className='section-center featured-center'>
        {tours.map((item)=>{
          return (<Tour {...item} key={item.id}/>)
        })}
      </div>
    </section>
   
  )
}
export default Tours