const db = require('./conectiondb')


async function deleteUser() {


  db.connect()
  var sqlDelete = 'delete from participante where cod_par=$1'
  
  /*Deleta o participante com codigo igual a 1*/
  await db.query(sqlDelete, [1])

  db.end()


}

deleteUser()