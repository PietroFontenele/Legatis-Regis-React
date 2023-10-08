import menu from '../../IMGS/PNGs/menu.png';
import { useState } from 'react';
import Modal from '../Modal/Modal'
import './Menu.css'

export const Menu = () => {
    const [openModal, setOpenModal] = useState(false);
    const Open = () => setOpenModal(true);
    const Close = () => setOpenModal(false)

    return (
        <nav className='Menu'>

            <ul>
                <li>quem somos</li>
                <li>faixa-etaria</li>
                <li>local</li>
            </ul>
            <div className='logoContainer' onClick={Open}>
                <button className='op'>Log-in</button>
            </div>

            <Modal className="Mod" isOpen={openModal} isClose={Close}>
                <form>
                    <div className='Form'>

                        <input type="text" placeholder='Nome' />
                        <input type="text" placeholder='SobreNome' />
                        <input type="Email" placeholder='Email' />
                        <input type="text" className='pass' placeholder='Senha' />    <p className='sen'>sua senha tem que ter pelo menos 4 carcteres e um numero</p>
                    </div>

                </form>
                <div className='btns'>
                    <button className='Close btn' onClick={Close}>Cancelar</button>
                    <button className='Save btn' >Salvar</button>
                </div>
            </Modal>
        </nav>
    )
}