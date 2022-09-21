import * as C from '../Form1/style'
import {useForm,FormActions} from '../../contexts/FormContext'
import {Tprincipal} from '../../components/Tprincipal'
import {useNavigate,Link} from 'react-router-dom'
import {useEffect } from 'react'
import {toast} from 'react-toastify'
import Opcoes from '../../components/Opcoes'


const Form2=()=>{
    const navigate=useNavigate()
    const {state,dispatch}=useForm()


    const clickNext=()=>{
        if(state.name !==''){
            toast.success('Nível adicionado com sucesso!')
            navigate('/form3')
        }else{
          toast.error('Escolha o seu nível profissional')
        }
    }

    useEffect(()=>{
        if(state.name === ''){
            navigate('/')
        }else{
        dispatch({
            type:FormActions.setCurrentStep,
            payload:2
        })
    }
    },[])


    const setLevel=(level:number)=>{
        dispatch({
            type:FormActions.setLevel,
            payload:level
        })
    }

    return(
        <Tprincipal>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>Ok, {state.name} </h1>
                <h3>O que condiz mais com seu estado atual ?</h3>

                <Opcoes
                title='Júnior'
                description='Programo a menos de 2 anos'
                icon='💻'
                selected={state.level === 0}
                onClick={()=>setLevel(0)}/>

                
                <Opcoes
                title='Pleno'
                description='Programo a mais de 3 anos'
                icon='📈'
                selected={state.level === 1}
                onClick={()=>setLevel(1)}/>

                
                <Opcoes
                title='Senior'
                description='Programo a mais de 5 anos'
                icon='📈'
                selected={state.level === 2}
                onClick={()=>setLevel(2)}/>

                <Link to='/' className='linkBtn'>Voltar</Link>
                <button onClick={clickNext}>Próximo</button>
            </C.Container>
        </Tprincipal>
    )
}


export default Form2