
import * as C from '../Form1/style'
import {useForm,FormActions} from '../../contexts/FormContext'
import {Tprincipal} from '../../components/Tprincipal'
import {useNavigate,Link} from 'react-router-dom'
import { ChangeEvent, useEffect } from 'react'
import {toast} from 'react-toastify'


const Form3=()=>{
    const navigate=useNavigate()
    const {state,dispatch}=useForm()


    const clickNext=()=>{
       if(state.email !== '' && state.github !== ''){
        toast.success(`Ok ${state.name} em breve entraremos em contato. Boa Sorte`)
        navigate('/final')
       }else{
        toast.error('Preencha todos os campos corretamente')
       }
    }

    useEffect(()=>{
        if(state.name === ''){
            navigate('/')
        }else{
            dispatch({
                type:FormActions.setCurrentStep,
                payload:1
            })
        }
    },[])

    const EmailChange=(e:ChangeEvent<HTMLInputElement>)=>{
        dispatch({
            type:FormActions.setEmail,
            payload:e.target.value
        })
    }

    const GitHubChange=(e:ChangeEvent<HTMLInputElement>)=>{
        dispatch({
            type:FormActions.setGithub,
            payload:e.target.value
        })
    }

    return(
        <Tprincipal>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>{state.name} onde te achamos ?</h1>
                <p>Preencha corretamente para conseguirmos entrar em contato</p>

                <hr/>
                <label>Qual seu E-mail</label>
                <input type='email'
                value={state.email}
                onChange={EmailChange}
                />

                <label>Qual seu GitHub</label>
                <input type='email'
                value={state.github}
                onChange={GitHubChange}
                />
                
                <Link to='/form2' className='linkBtn'>Voltar</Link>
                <button onClick={clickNext}>Finalizar Cadastro</button>
            </C.Container>
        </Tprincipal>
    )
}


export default Form3