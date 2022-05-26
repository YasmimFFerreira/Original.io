import React from 'react';
import './../../components/home/article.scss';
import { Link } from 'react-router-dom';

export function Article() {
    return (
        <article>

            <div id="home-article">

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
                    <button >
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
                <div className="compra">
                    <Link to='./product'>
                        <p> ADICIONAR Á SACOLA</p>
                    </Link>
                </div>
                <div className="text04">Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.</div>
            </div>
        </article>
    )
};