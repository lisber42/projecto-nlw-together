//importando img no react  com webpack
import {useHistory} from'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';
import '../styles/auth.scss';


import { useAuth } from '../hooks/useAuth'
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';



export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth()
    const [roomCode, setRoomCode] = useState('');

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle() 
        }
        
        history.push('/rooms/new');
    }

    async function handleJoinRoom(event: FormEvent){
        event.preventDefault();

        if (roomCode.trim() === '') {
            return;
        }

        const roomRef = await database.ref(`rooms/$(roomCode)`).get();

        if (!roomRef.exists()) {
            alert(' A sala não existe')
            return;
        }

        history.push(`/rooms/${roomCode}`);


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
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do Google "/>
                        Crie sua Sala com o Google
                    </button>
                    <div className="separator"> ou entre  em  uma  sala</div>
                    <form onSubmit= {handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Digite o codigo da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
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