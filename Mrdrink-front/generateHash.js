const bcrypt = require('bcryptjs')

const password = '123456'

bcrypt.hash(password, 10, (err, hash) => {

    if(err){
        console.log("Erro ao gerar hash:", err)

    } else{
        console.log("Senha hashada:", hash)

    }

})