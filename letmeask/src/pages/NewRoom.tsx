import {Link, useHistory} from 'react-router-dom'
import {FormEvent, useState} from 'react'
import { useAuth } from '../hooks/useAuth';


import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import '../styles/auth.scss';
import { database } from '../services/firebase';


export function NewRoom(){
    const { user }= useAuth()
    const history = useHistory()
    const [newRoom, setRoom] = useState('')

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if (newRoom.trim() === ''){
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        })

        history.push(`/rooms/${firebaseRoom.key}`)
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
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit = {handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                            onChange = {event => setRoom(event.target.value)}
                            value={newRoom}
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