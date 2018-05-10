import React from 'react'
import dateFormat  from 'dateformat'

import IconButton from '../template/iconButton'



export default props => {
    const renderRows = () => {
        const list = props.list || []

        return list.map(usuario => (
            <tr key={usuario._id}>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
                <td>{usuario.tipo}</td>
                <td>{dateFormat(usuario.dataatualizacao, "dd/mm/yyyy HH:MM:ss")}</td>
                <td>{dateFormat(usuario.datacriacao, "dd/mm/yyyy HH:MM:ss")}</td>
                <td>
                    <IconButton style='danger' icon='trash-o' help="Clique para excluir"
                        onClick={() => props.handleRemove(usuario)}></IconButton>
                </td>
            </tr>
        ))
    }
    return (
        <table className='table table-striped table-bordered table-hover table-sm'>
            <thead className="thead-light">
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Tipo</th>
                    <th>Dt. Atualização</th>
                    <th>Dt. Criação</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}