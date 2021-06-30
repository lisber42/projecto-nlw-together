//importando img no react  com webpack
import {useHistory} from'react-router-dom'



import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';


import { Button } from '../components/Button';
import '../styles/auth.scss';


export function Home() {
    //criando um HOOKS
    const history = useHistory();

    function navigateToNewRoom() {
        history.push('/rooms/new');
    }

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
                    <button onClick={navigateToNewRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do Google "/>
                        Crie sua Sala com o Google
                    </button>
                    <div className="separator"> ou entre  em  uma  sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o codigo da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}