import * as C from './styled'
import {Link} from 'react-router-dom'
import {ReactComponent as Profile} from '../../images/profile.svg'
import {ReactComponent as Book} from '../../images/book.svg'
import {ReactComponent as Email } from '../../images/mail.svg'

type Props={
    title:string,
    description:string,
    icon:string,
    path:string
    active:boolean
}

const SideBar=({title,description,icon,path,active}:Props)=>{
    return(
       <C.Container>
        <Link to={path}>
            <C.Info>
                <C.Title>{title}</C.Title>
                <C.Description>{description}</C.Description>
            </C.Info>
            <C.Icon active={active}>
                {icon === 'profile' &&
                 <Profile fill='white' width={24} height={24}/>
                }
                 {icon === 'book' &&
                 <Book fill='white' width={24} height={24}/>
                }
                 {icon === 'mail' &&
                 <Email fill='white' width={24} height={24}/>
                }
                
            </C.Icon>
            <C.Point active={active}></C.Point>
        </Link>
       </C.Container>
    )
}


export default SideBar