import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../app.css'

import React from 'react'

export default props => (
    <div className="login">
        <div className="row justify-content-md-center">
            <div className="col-lg-6 col-lg-offset-3">
                <div className="inner-form">
                    <h1>OftalClinic</h1>
                    <form role="form">
                        <div className="row">
                            <div className="col-lg-12">
                                <label>E-mail</label>
                                <div className="form-group">
                                    <input type="email" name="email" id="email" className="form-control" placeholder="exemplo@exemplo.com.br" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <label>Senha</label>
                                <div className="form-group">
                                    <input type="password" name="password" id="password" className="form-control" placeholder="Digite sua senha" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <button type="submit" className="btn btn-default">
                                    <span>LOGAR</span>
                                </button>
                            </div>
                            <div className="col-lg-12">
                                <div className="forgot">
                                    <p><a href="#cadastrese">Cadastre sua conta?</a></p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
)