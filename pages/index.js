import Produto from './components/box_produto';
export default function Home(props) {
    return (
        <div>
            {props.BD && props.BD.map((item, index )=> 
              
                <Produto 
                key = {index}
                nome = {item.nome}
                id_produto = {item.id_produto}
                preco = {item.preco_atual}
                preco_antigo = {(item.preco_antigo == null ?'espaco': ("R$ " + item.preco_antigo))}
                promo = {item.promocao == null ? null: (item.promocao + "%")}
                classe = {item.id_sub_categoria} 
                id = {item.id_categoria}
                imagem = {item.nome_imagem}
                retorno = {item}
            />
            )}
        </div>
    )
}
export async function getServerSideProps(context){
    const resultado = await fetch('http://localhost:3000/api/pegarProdutos');
    const json = await resultado.json();
    return{
        props: {
            BD: json
        }
    }
}