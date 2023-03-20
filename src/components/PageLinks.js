import { pageLinks } from '../data';

const PageLinks = ({ parentClass, itemClass }) => {
    return (
        <ul className={parentClass} id='nav-links'>
            {pageLinks.map((item) => {
                return (<li key={item.id}>
                    <a href={item.href} className={itemClass}>{item.text}</a>
                </li>)
            })}
        </ul>
    )
}
export default PageLinks
