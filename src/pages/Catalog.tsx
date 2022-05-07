import logoImg from '../assets/images/logo.svg'
import prod02Img from '../assets/images/prod02.svg';
import prod03Img from '../assets/images/prod03.svg';
import prod04Img from '../assets/images/prod04.svg';
import prod01Img from '../assets/images/prod01.svg';
import unionIcons from '../assets/icons/union.svg';
import sacolaIcons from '../assets/icons/sacola.svg';
import seta1Icons from '../assets/icons/seta1.svg';
import seta6Icons from '../assets/icons/seta6.svg';
import seta7Icons from '../assets/icons/seta7.svg';
import seta4Icons from '../assets/icons/seta4.svg';
import '../styles/auth.scss';

export function Catalog() {
    return (

        <div id="page-auth">




            <div className="logo-content">
                <img src={logoImg} alt="logo original.io" />
            </div>
            <header>
                <div className="acesso"> Entrar | Cadastrar-se</div>

                <div className="itens">SAPATOS  BOLSAS  ACESSÓRIOS  OFF</div>

                <div className="busca">
                    <img src={unionIcons} alt="Ilustração barra busca" />
                    <p>Busca</p>
                </div>

                <div className="sacola">
                    <img src={sacolaIcons} alt="Ilustração sacola" />
                </div>

            </header>

            <menu>

                <div className="imag-content">
                    <div className="img1">
                        <img src={prod02Img} alt="Ilustração rasteira" />
                    </div>

                    <div className="seta1">
                        <img src={seta1Icons} alt="Ilustração seta subir" />
                    </div>

                    <div className="img2">
                        <img src={prod02Img} alt="Ilustração rasteira" />
                    </div>
                    <div className="img3">
                        <img src={prod02Img} alt="Ilustração rasteira" />
                    </div>
                    <div className="img4">
                        <img src={prod02Img} alt="Ilustração rasteira" />
                    </div>
                    <div className="img5">
                        <img src={prod02Img} alt="Ilustração rasteira" />
                    </div>

                    <div className="seta4">
                        <img src={seta4Icons} alt="Ilustração seta subir" />
                    </div>

                </div >


                <div className="principal">
                    <img src={prod02Img} alt="Ilustração rasteira" />
                </div>

                <aside>
                    <h2>RASTEIRA TIRA DEDO</h2>
                    <p>RT 0568 | 03.07.0653</p>

                </aside>
            </menu>

            <h1>QUEM VIU, VIU TAMBÉM </h1>

            <main>
                <div className="images" >
                    <img src={prod03Img} alt="Ilustração bolsa" />
                    <img src={prod04Img} alt="Ilustração rasteira" />
                    <img src={prod02Img} alt="Ilustração rasteira" />
                    <img src={prod01Img} alt="Ilustração carteira" />
                </div>
                <div className="components">
                    <p>R$ 204,90</p>
                    <button>
                        rosa
                    </button>
                    <button>
                        azul
                    </button>
                    <button>
                        marrom
                    </button>
                    <button>
                        preto
                    </button>
                </div>
            </main>

            <h3>
                <img src={seta6Icons} alt="Ilustração seta lado" />
                <p>1 de 3</p>
                <img src={seta7Icons} alt="Ilustração seta lado" />
            </h3>

            <footer>

            </footer>

        </div>

    )
}
