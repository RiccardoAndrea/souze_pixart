const pagamenti = require('express').Router();
const bodyparser = require('body-parser')
const stripe = require('stripe')('sk_test_51ML1xaLE1Xa3zqqaCGsu3s4Nj2U1QBhRZigPsYAaODTdvhZ01sKMAXggDuNKCnDMkYKLP2tJXqmt30JVM8gOdxbc00FLn87wT3')

pagamenti.use(bodyparser.urlencoded({extended:false}))
pagamenti.use(bodyparser.json())



pagamenti.post('/strype',(req, res) => { 
    //questo metodo crea un utente che sta eseguendo l'acquisto
	stripe.customers.create({ 
		email: req.body.stripeEmail, 
		source: req.body.stripeToken,
		name: 'Alessandro Massadoro', 
		address: { 
			line1: 'Via amba alagi', 
			postal_code: '81012', 
			city: 'Caiazzo', 
			state: 'Campania', 
			country: 'Italia', 
		} 
	}) 
	.then((customer) => { 
		return stripe.charges.create({ 
			amount: 7000,	 
			description: 'Articoli', 
			currency: 'USD', 
			customer: customer.id 
		}); 
	}) 
	.then((charge) => { 
		res.redirect('/');// If no error occurs 
	}) 
	.catch((err) => { 
		res.send(err)	 // If some error occurs 
	}); 
})


module.exports = pagamenti;