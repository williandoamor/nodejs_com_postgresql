const db = require('./conectiondb')


async function selectData() {

    var resul

     db.connect()
     /*Select da tabela eventos*/
     resul = await db.query('select * from eventos')
     console.log('TABELA EVENTOS')
     console.log(resul.rows)

     /*Selet da tabela participantes*/
     resul = await db.query('select * from participante')
     console.log('TABELA PARTICIPANTE')
     console.log(resul.rows)

     /*Select da tabela evento_participante*/
     resul = await db.query('select eventos.nome_event, participante.nome_par,'
                          +' evento_participante.dtcad_eventp from evento_participante inner join eventos'
                          +' on (evento_participante.cod_event=eventos.cod_event)'
                          +' inner join participante'
                          +' on (evento_participante.cod_par=participante.cod_par)')

     console.log('TABELA EVENTO PARTICIPANTE')
     console.log(resul.rows)                      



      db.end

}


selectData()
