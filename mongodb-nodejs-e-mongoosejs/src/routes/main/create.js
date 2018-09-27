const Person = require('./../../schemas/Person');

module.exports = (req, res) => {
    let data = {
        name: {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        },
        age: req.body.age,
        city: req.body.city
    }

    // ------------------------------------
    // usando método de instância ".save"
    // é necessário criar uma instância da classe
    let person = new Person(data);

    person
        .save()
        .then((created) => {
            return res.json({ body: created })
        })
    // ------------------------------------

    // aqui cria chamando diretamente a classe
    // Person
    //     .create(data) //.create(req.body)
    //     .then((created) => {
    //         return res.json({ body: created })
    //     })
}