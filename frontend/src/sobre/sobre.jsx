import React, { Component } from 'react'

import Menu from '../template/menu'
import PageHeader from '../template/pageHeader'

export default class Sobre extends Component {
    render() {
        return (
            <div>
                <Menu />
                <PageHeader name='Sobre' small='Informações sobre a aplicação'></PageHeader>
                <section>
                    <p>
                        OftalClinic é uma aplicação web desenvolvida para cadeira Requisitos de Sistemas do cruso de sistema de informação da Universidade Estácio de Sá (FIC - Moreira Campos)
                    </p>

                    <h4>Docente</h4>

                    Gerhard Philippe de Saboia Oliveira
                    <br />
                    <a href="http://lattes.cnpq.br/2373847814121241">Currículo lattes</a>
                    
                    <h4> Dicente</h4>
                    
                    Daniel Nascimento Barroso
                    <br />
                    <a href="http://lattes.cnpq.br/8149398137909414">Currículo lattes</a>
                    
                </section>
        </div >
      )
    }
}