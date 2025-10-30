const {getAllQoutes} = require('../repositories/qoutesRepositories.js');

const getQoutes = async (req,res) => {
    try {
        const qoutes = await getAllQoutes();
        res.json(qoutes);
    } catch (error) {
        console.error('Error fetching qoutes', err.message);
        res.status(500).json({error: 'Failed to fetch qoutes'});
    }
};

module.exports = { getQoutes };