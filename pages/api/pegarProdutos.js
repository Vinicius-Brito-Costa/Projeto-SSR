function conexao(){
    const mysql = require('mysql2');
    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'fullstack'
    })
    con.connect((erro) => {
        if(erro){
            console.log('A conexão com banco de dados falhou. ' + erro);
        }
        else{
            console.log('Conexão com banco de dados realizada com sucesso.');
        }
    })
    return con;
}
function produtos(conexao, resposta){
    
    conexao.query('select * from produtos left outer join produtos_categorizados on produtos.id_produto = produtos_categorizados.id_produto left outer join categorias on produtos_categorizados.id_categoria = categorias.id_categoria left outer join sub_categorias on produtos_categorizados.id_sub_categoria = sub_categorias.id_sub_categoria order by produtos.id_produto asc;', (erro, resultado) =>{
        resposta.end(JSON.stringify(resultado));
    });
}

export default (req, res) =>{
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    produtos(conexao(), res);
}