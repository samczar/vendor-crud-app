/**
 * Express configuration
 */

'use strct'

const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const bodyParser = require('body-parser')
const cors = require('cors')
const errorHandler = require('errorhandler')

module.exports = (app) => {
	const env = app.get('env')
	app.use(cors())
	app.use(compression())
	app.use(
		bodyParser.urlencoded({
			extended: false,
			limit: '50mb',
		})
	)

	app.use(bodyParser.json({ limit: '50mb' }))
	if ('development' === env || 'test' === env) {
		app.use(morgan('dev'))
		app.use(errorHandler())
	}
}
