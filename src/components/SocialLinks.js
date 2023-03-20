import { socialLinks } from "../data";

const SocialLinks = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass}>
    {socialLinks.map((item)=>{
      return(
        <li key={item.id}>
          <a href={item.href} className={itemClass} target='_blank' rel='noreferrer'><i className={item.icon}></i></a>
        </li>
      )
    })}
  </ul>
  )
}
export default SocialLinks