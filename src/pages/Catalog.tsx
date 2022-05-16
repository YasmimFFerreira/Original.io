import { useHistory } from 'react-router-dom';
import logoImg from '../assets/images/logo.svg'
import prod02Img from '../assets/images/prod02.svg';
import prod03Img from '../assets/images/prod03.svg';
import prod04Img from '../assets/images/prod04.svg';
import prod01Img from '../assets/images/prod01.svg';
import vtexImg from '../assets/images/vtex.svg';
import seloImg from '../assets/images/selo-ebit.svg';
import unionIcons from '../assets/icons/union.svg';
import sacolaIcons from '../assets/icons/sacola.svg';
import facebookIcons from '../assets/icons/facebook.svg';
import instaIcons from '../assets/icons/insta.svg';
import subtractIcons from '../assets/icons/subtract.svg';
import seta1Icons from '../assets/icons/seta1.svg';
import seta7Icons from '../assets/icons/seta7.svg';
import seta8Icons from '../assets/icons/seta8.svg';
import seta9Icons from '../assets/icons/seta9.svg';
import seta4Icons from '../assets/icons/seta4.svg';
import videoIcons from '../assets/icons/video.svg';

import '../styles/catalog.scss';

import { Button } from '../components/Button';

export function Catalog() {
    const history = useHistory();

    function navigateToCompra() {
        history.push('./compra');
    }
    return (

        <div id="page-catalog">

            <div className="logo-content">
                <img src={logoImg} alt="logo original.io" />
            </div>

            <header>
                <div className="acess"> Entrar | Cadastrar-se</div>

                <div className="items">SAPATOS  BOLSAS  ACESSÓRIOS  OFF</div>

                <div className="search">
                    <img src={unionIcons} alt="Ilustração barra busca" />
                    <p>Busca</p>
                </div>

                <div className="bag">
                    <img src={sacolaIcons} alt="Ilustração sacola" />
                </div>
            </header>

            <menu>

                <div className="home">
                    Home /
                    <div className="home02">
                        Sapatos
                    </div>
                </div>

                <div className="text02">
                    Vídeo
                </div>

                <div className="imag-content">
                    <div className="play">
                        <img src={videoIcons} alt="play video" />
                    </div>

                    <div className="img01">
                        <img src={prod02Img} alt="Ilustração rasteira" />
                    </div>

                    <div className="seta1">
                        <img src={seta1Icons} alt="Ilustração seta subir" />
                    </div>

                    <div className="img02">
                        <img src={prod02Img} alt="Ilustração rasteira" />
                    </div>
                    <div className="img03">
                        <img src={prod02Img} alt="Ilustração rasteira" />
                    </div>
                    <div className="img04">
                        <img src={prod02Img} alt="Ilustração rasteira" />
                    </div>
                    <div className="img05">
                        <img src={prod02Img} alt="Ilustração rasteira" />
                    </div>

                    <div className="seta4">
                        <img src={seta4Icons} alt="Ilustração seta subir" />
                    </div>

                </div >
            </menu>

            <div className="principal">
                <img src={prod02Img} alt="Ilustração rasteira" />
            </div>

            <aside>
                <h6>RASTEIRA TIRA DEDO</h6>
                <p> RT 0568 | 03.07.0653</p>

                <div className="valor">
                    <div className="text02">
                        R$ 69,00 |
                    </div>
                    R$ 55,20
                </div>
                <div className="text03">
                    Ou 6x de R$ 9,20
                </div>

                <div className="color">
                    <p>Cor:</p>
                    (Fucsia)
                </div>

                <div className="tam">
                    <p>Tamanho:</p>
                    (32)
                </div>

                <div className="text02">
                    Guia de medidas
                </div>

                <div className="num">
                    <button>
                        <p>33</p>
                    </button>
                    <button>
                        <p>34</p>
                    </button>
                    <button>
                        <p>35</p>
                    </button>
                    <button>
                        <p>36</p>
                    </button>
                    <button>
                        <p>37</p>
                    </button>
                    <button>
                        <p>38</p>
                    </button>
                    <button>
                        <p>39</p>
                    </button>
                    <button>
                        <p>40</p>
                    </button>
                    <button>
                        <p>41</p>
                    </button>
                    <button>
                        <p>42</p>
                    </button>
                </div>

                <div className="cores">
                    <button className="rosa">
                    </button>
                    <button className="azul">
                    </button>
                    <button className="marron">
                    </button>
                    <button className="preto">
                    </button>
                </div>

                <Button onClick={navigateToCompra}>
                    <p> ADICIONAR Á SACOLA</p>
                </Button>

                <div className="text04">Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.</div>

            </aside>

            <h1>QUEM VIU, VIU TAMBÉM </h1>

            <main>

                <div className="img3">
                    <img src={prod03Img} alt="Ilustração bolsa" />
                    <p>R$204,90</p>
                    <div className="cores02">
                        <button className="rosa">
                        </button>
                        <button className="azul">
                        </button>
                        <button className="marron">
                        </button>
                        <button className="preto">
                        </button>
                    </div>
                </div>

                <div className="img4">
                    <img src={prod04Img} alt="Ilustração bolsa" />
                    <p>R$204,90</p>
                    <div className="cores02">
                        <button className="rosa">
                        </button>
                        <button className="azul">
                        </button>
                        <button className="marron">
                        </button>
                        <button className="preto">
                        </button>
                    </div>
                </div>

                <div className="img2">
                    <img src={prod02Img} alt="Ilustração bolsa" />
                    <p>R$204,90</p>
                </div>

                <div className="img1">
                    <img src={prod01Img} alt="Ilustração bolsa" />
                    <p>R$204,90</p>
                    <div className="cores02">
                        <button className="azul">
                        </button>
                        <button className="marron">
                        </button>
                        <button className="preto">
                        </button>
                    </div>
                </div>
            </main>

            <h2>
                <img src={seta7Icons} alt="Ilustração seta lado" />
                <div className="seta8">
                    <img src={seta8Icons} alt="Ilustração seta lado" />
                </div>
            </h2>
            <h4>1 de 3</h4>
            <h3>
                <img src={seta7Icons} alt="Ilustração seta lado" />
                <div className="seta9">
                    <img src={seta9Icons} alt="Ilustração seta lado" />
                </div>
            </h3>

            <footer>
                <div className="ellipse">

                    <p>
                        ASSINE NOSSA NEWS
                    </p>

                    <div className="nome">
                        Nome
                    </div>
                    <div className="email">
                        E-mail
                    </div>

                    <button className="enviar">
                        <div className="env">
                            ENVIAR
                        </div>
                    </button>
                </div>

                <div className="faceb">
                    <img src={facebookIcons} alt="Ilustração facebook" />
                </div>
                <div className="insta">
                    <img src={instaIcons} alt="Ilustração instagram" />
                </div>
                <div className="pint">
                    <img src={subtractIcons} alt="Ilustração pinterest" />
                </div>
                <div className="vtex">
                    <img src={vtexImg} alt="Logo Vtex" />
                </div>
                <div className="selo">
                    <img src={seloImg} alt="Selo Ebit" />
                </div>

                <div className="infos">
                    INSTITUCIONAL  INFORMAÇÕES  CONHEÇA
                </div>
                <div className="info01">
                    <p>A Marca</p>
                    <p>Lojas</p>
                    <p>Contato</p>
                </div>

                <div className="info02">
                    <p>Formas de Pagamentod</p>
                    <p>Trocas e Devoluçoẽs</p>
                    <p>Cuidados Com o Produto</p>
                </div>

                <div className="info03">
                    <p>Franquias e Multimarcas</p>
                    <p>Trabalhe com a Gente</p>
                    <p>Procon-RJ</p>
                </div>
                <div className="rodape">
                    <h5>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie massa in nunc condimentum, vel placerat
                        lacus pulvinar. Suspendisse vel nisl eu tortor feugiat tempus vel in tortor. Nunc semper leo nec tellus gravida faucibus.
                    </h5>
                </div>

            </footer>

        </div>

    )
}
