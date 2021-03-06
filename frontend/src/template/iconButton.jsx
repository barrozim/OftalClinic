import React from 'react'
import If from './if'
export default props => (
    <If test={!props.hide}>
        <button className={'btn btn-' + props.style} alt={props.help} title={props.help} type={props.typebutton || 'button'}
            onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}></i> {props.legend}
        </button>
    </If>
)

