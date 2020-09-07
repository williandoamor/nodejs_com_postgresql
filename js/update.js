const db = require('./conectiondb')


async function updateData() {

  db.connect()
   
    const sqlUpdate = 'update participante set nome_par = $1'
    + ' where cod_par = $2'
    var result
   
   await db.query(sqlUpdate, ['Carlos Augusto', 1]) 
   /*Selectiona o usuario novamente para validar se a alteraçao ocorreu*/
   result = await db.query('select nome_par from participante where cod_par=1')
   console.log(result.rows)

  db.end()


}

updateData()