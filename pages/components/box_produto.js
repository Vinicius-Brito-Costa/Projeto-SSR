import React from 'react';

export default class Produto extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        
        return(
            <div className="px-1 py-1 card box-produto" >
                <a style={{textDecoration: 'none'}} >
                <div className={'card border-0 bg-transparent text-light sc'+ this.props.classe} id={'c'+ this.props.id +''}>
                    <img className="card-img-top" src={'./imagens/produtos/' + this.props.imagem} alt="Imagem do produto" />
                    <div className="card-body p-1 box-descricao">
                    <span className="preco-antigo text-danger d-block"><p>{this.props.preco_antigo}</p></span>
                        <span className="nome-produto d-block text-nowrap overflow-hidden">{this.props.nome}</span>
                        <ul className="list-unstyled d-flex mx-0 px-0 mb-0 container-fluid text-center">
                            <li className="preco-atual text-light mx-0 pl-1 pr-0 px-0 py-0 container-fluid"><p>{"R$ " + this.props.preco}</p></li>
                            <li className="promo bg-danger mx-0 px-0 mx-0-sm px-0-sm px-1 ml-1"><p>{this.props.promo }</p></li>
                        </ul>
                        <input type="hidden" name="id_produto" style={{display: "none"}} ></input>
                    </div>
                </div>
                </a>
            </div>
        );
    }
}