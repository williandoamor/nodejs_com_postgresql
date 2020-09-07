const db = require('./conectiondb')

async function inserirDados() {

   await db.connect()

    /*Realiza insert na tabela de eventos*/
   const sqlEventos = 'insert into eventos (nome_event, data_event) values($1, $2)'   
   await db.query(sqlEventos, ['encontro NodeJs.', '10/12/2020']) 
   await db.query(sqlEventos, ['Encontro de Postgreslq.', '15/12/2020']) 
 
   /*Insere registros na tabela de participante*/
   const sqlParticipante = 'insert into participante(nome_par, dtinc_par) values($1, $2)'

   await db.query(sqlParticipante, ['Carlos', '07/09/2020'])
   await db.query(sqlParticipante, ['Augusto', '07/09/2020'])
   await db.query(sqlParticipante, ['Janaina', '07/09/2020'])
   await db.query(sqlParticipante, ['Rafael', '07/09/2020'])
   
   /*Insere registros na tabela de evento_participante*/
   const sqlEventPar = 'insert into evento_participante (cod_event, cod_par, dtcad_eventp) values ($1, $2, $3)';
   
   await db.query(sqlEventPar, [1,2,'07/09/2020'])
   await db.query(sqlEventPar, [2,2,'07/09/2020'])

   await db.end()

}

inserirDados()