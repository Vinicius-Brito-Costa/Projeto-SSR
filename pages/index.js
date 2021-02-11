import Produto from './components/box_produto';
import Head from 'next/head';
export default function Home(props) {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" / >
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
            </Head>
            <body>
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
            </body>
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