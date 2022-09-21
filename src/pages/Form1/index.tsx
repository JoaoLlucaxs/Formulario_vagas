import * as C from './style'
import {useForm,FormActions} from '../../contexts/FormContext'
import {Tprincipal} from '../../components/Tprincipal'
import {useNavigate} from 'react-router-dom'
import { ChangeEvent, useEffect } from 'react'
import {toast} from 'react-toastify'


const Form1=()=>{
    const navigate=useNavigate()
    const {state,dispatch}=useForm()


    const clickNext=()=>{
        if(state.name !== ''){
            navigate('/form2')
        }else{
          toast.error('Ops..Digite o seu nome')
        }
    }

    useEffect(()=>{
        dispatch({
            type:FormActions.setCurrentStep,
            payload:1
        })
    },[dispatch])

    const NameChange=(e:ChangeEvent<HTMLInputElement>)=>{
        dispatch({
            type:FormActions.setName,
            payload:e.target.value
        })
    }
    return(
        <Tprincipal>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Comece nos dizendo seu nome</h1>
                <p>Preencha o campo abaixo com seu nome</p>

                <hr/>
                <label>Nome Completo</label>
                <input type='text'
                value={state.name}
                onChange={NameChange}
                autoFocus/>

                <button onClick={clickNext}>Próximo</button>
            </C.Container>
        </Tprincipal>
    )
}


export default Form1