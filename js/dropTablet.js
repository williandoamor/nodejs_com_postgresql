const db = require('./conectiondb');

async function droTables() {
   
   /*Conecta ao banco de dados*/ 
   await db.connect() 
   /*Deleta a tabela eventos*/
   await db.query('DROP TABLE eventos CASCADE')
   /*Deleta a tabela participante*/
   await db.query('DROP TABLE participante CASCADE')
   /*Deleta a tabela evento_participante*/  
   await db.query('DROP TABLE evento_participante CASCADE')
   /*Encerra a conexao com o banco de dados*/
   db.end()

   console.log('Tabela deletadas!') 
}

droTables()