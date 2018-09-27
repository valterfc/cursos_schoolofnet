const Person = require('../../schemas/Person');

module.exports = (req, res) => {
    Person
        .findByName('Valter', 'F.C.', (err, person) => {
            return res.json({ person });
        });
};