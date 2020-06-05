const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
	async index(request, response) {
		const { latitude, longitude, techs } = request.query;
		
		const techsArray = parseStringAsArray(techs);

		const devs = await Dev.find({
			techs: {
					// Filtrar os Devs por tecnologias
					$in:techsArray,
			},
			location: {
				$near: {
					$geometry: {
							type: 'Point',
							coordinates: [longitude, latitude],
					},
					// Buscar todos os Devs num raio de 10Km
					$maxDistance: 10000,
				},
			}
		});
		return response.json({ devs });
	}
}