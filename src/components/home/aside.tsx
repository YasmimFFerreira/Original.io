import prod02Img from './../../assets/images/prod02.svg'
import seta4Icons from './../../assets/icons/seta4.svg';
import videoIcons from './../../assets/icons/video.svg';
import seta1Icons from './../../assets/icons/seta1.svg';

import './../../components/home/aside.scss';
import React from 'react';

export function Aside() {
    return (
        <aside>
            <div id="home-aside">

                <div className="home">
                    Home /
                    <div className="home02">
                        Sapatos
                    </div>
                </div>

                <div className="text02">
                    Vídeo
                </div>

                <div className="container">
                    <div className="img02">
                        <img src={prod02Img} alt="Ilustração rasteira" />
                    </div>
                    <div className="play">
                        <img src={videoIcons} alt="play video" />
                    </div>
                    <div className="seta1">
                        <img src={seta1Icons} alt="Ilustração seta subir" />
                    </div>
                    <div className="img03">
                        <img src={prod02Img} alt="Ilustração rasteira" />
                    </div>
                    <div className="img01">
                        <img src={prod02Img} alt="Ilustração rasteira" />
                    </div>
                    <div className="img01">
                        <img src={prod02Img} alt="Ilustração rasteira" />
                    </div>
                    <div className="img01">
                        <img src={prod02Img} alt="Ilustração rasteira" />
                    </div>
                    <div className="seta4">
                        <img src={seta4Icons} alt="Ilustração seta subir" />
                    </div>
                </div >

                <main>
                    <img src={prod02Img} alt="Ilustração rasteira" />
                </main>
            </div>
        </aside>
    )
};