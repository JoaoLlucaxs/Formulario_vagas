import { ReactNode } from 'react'
import * as C from './style'
import {Header} from '../Header'
import SideBar from '../SideBar'
import {useForm} from '../../contexts/FormContext'


type Props={
    children:ReactNode
}


export const Tprincipal=({children}:Props)=>{
    const {state}=useForm()

    return(
        <C.Container>
            <C.Area>
                <Header/>

                <C.Espaco>
                    <C.SideBar>
                        <SideBar
                        title='Pessoal'
                        description='Se identifique'
                        icon='profile'
                        path='/'
                        active={state.currentStep === 1}/>

                        <SideBar
                        title='Experiência'
                        description='Indique seu nível'
                        icon='book'
                        path='/form2'
                        active={state.currentStep === 2}/>

                        <SideBar
                        title='Contato'
                        description='Onde te achamos'
                        icon='mail'
                        path='/form3'
                        active={state.currentStep === 3}/>
                    </C.SideBar>

                    <C.Page>
                        {children}
                    </C.Page>
                </C.Espaco>
            </C.Area>
        </C.Container>
    )
}