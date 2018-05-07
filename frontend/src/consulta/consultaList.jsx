import React from 'react'
import dateFormat  from 'dateformat'

import IconButton from '../template/iconButton'



export default props => {
    const renderRows = () => {
        const list = props.list || []

        return list.filter(consulta => consulta.clienteId != null && consulta.medicoId != null).map(cliente => (
            <tr key={cliente._id}>
                <td>{cliente.clienteId.nome}</td>
                <td>{cliente.medicoId.nome}</td>
                <td>{dateFormat(cliente.datahora, "dd/mm/yyyy HH:MM:ss")}</td>
                <td>{dateFormat(cliente.dataatualizacao, "dd/mm/yyyy HH:MM:ss")}</td>
                <td>{dateFormat(cliente.datacriacao, "dd/mm/yyyy HH:MM:ss")}</td>
                <td>
                    <IconButton style='danger' icon='trash-o' help="Clique para excluir"
                        onClick={() => props.handleRemove(cliente)}></IconButton>
                </td>
            </tr>
        )
    )
    }
    return (
        <table className='table table-striped table-bordered table-hover table-sm'>
            <thead className="thead-light">
                <tr>
                    <th>Cliente</th>
                    <th>Médico</th>
                    <th>Data e Hora</th>
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