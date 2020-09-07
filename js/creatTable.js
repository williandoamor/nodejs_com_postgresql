const db = require('./conectiondb')

async function createTable() {

    await db.connect()
    
    await db.query('create table eventos(cod_event serial primary key,'
         +' nome_event varchar(100) not null,'
         +' data_event date not null,'
         +' dumanut_event TIMESTAMP)')

    await db.query('create table participante('	
        + ' cod_par serial primary key,'
        + ' nome_par varchar(100) not null,'
        + ' dtinc_par date not null,'
        + ' dumanut_par timestamp)')    


        await db.query ('create table evento_participante('	
            +' cod_event integer not null,'
            +' cod_par integer not null,'
            +' dtcad_eventp date not null,'
            +' dumanut_par timestamp,'
            +' primary key (cod_event, cod_par),'
            +' foreign key (cod_event) references eventos (cod_event),'
            +' foreign key (cod_par) references participante (cod_par))'
        )

        /*Cria a trigger para alimentar o campo data de manutencao
         da tabela eventos*/ 
        await db.query('create or replace function fc_dumanut_event()'
              +' returns trigger as $fc_dumanut_event$'
            +' begin'
            +' new.dumanut_event='+'now'+';'
            +' return new;'
            +' end;'
            +' $fc_dumanut_event$'
            +' language plpgsql;')

      
       await db.query('create trigger'
        +' trg_dumanut_evento' 
       +' before insert or update on eventos'
       +' for each row execute procedure fc_dumanut_event();')
       
       
       await db.query('create or replace function fc_dumanut_participante()'
       +' returns trigger as $fc_dumanut_participante$'
       +' begin'
       +' new.dumanut_par='+'now'+';'
       +' return new;'
       +' end;'
       +' $fc_dumanut_participante$'
       +' language plpgsql;'
       )


       await db.query('create trigger'
        +' tgr_dumant_particpante'
       +' before insert or update on participante' 
       +' for each row execute procedure'
       +' fc_dumanut_participante();')


       /*Cria a funcao para alimentar o campo data de manutencao da tabela evento_participante*/
       await db.query('create or replace function fc_dumanut_evento_parcipante()'
            +' returns trigger as $fc_dumanut_evento_participante$'
            +' begin'
            +' new.dumanut_par='+'now'+';'
            +'   return new;'
            +' end;'
            +' $fc_dumanut_evento_participante$'
            +' language plpgsql;')


      await db.query('create trigger'
             +' trg_dumanut_evento_partipante'
             +' before insert or update on evento_participante'
             +' for each row execute procedure fc_dumanut_evento_parcipante();')  
             
             
      db.end()

      console.log('Tabelas criadas com sucesso')
    
}


createTable()