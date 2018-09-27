const Person = require('../../schemas/Person');

module.exports = (req, res) => {
    Person
        .findById(req.params.id)
        .then((person) => {
            console.log(person.name.fullname);
            
            //acessando o método de instância que criei
            person.ageGreaterThan20(person.age, (err, result) => {
                console.log(result);
            });

            return res.json({ person });
        })
}