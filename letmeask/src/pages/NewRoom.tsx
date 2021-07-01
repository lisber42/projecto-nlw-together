import {Link} from'react-router-dom'
//import { useAuth } from '../hooks/useAuth';


import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';



import { Button } from '../components/Button';
import '../styles/auth.scss';


export function NewRoom() {

    //const { user }= useAuth()
    return(
        <div id="page-auth"> 
            <aside>
               <img src={illustrationImg} alt="Ilustraçao simbolizando peguntas e respostas " />
               <strong>Crie salas de Q &amp; A ao_vivo</strong>
               <p>Tire as duvidas de sua audiencia em tempo-real</p> 
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt=" Letmeask"/>
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Criar Sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar en uma sala já Existente?<Link to="/">Clique Aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}