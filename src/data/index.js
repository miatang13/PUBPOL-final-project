// Central registry — import all fields here.
// To add a new field: create a new data file and add it to the array below.

import warehousing from './warehousing.js'
import manufacturing from './manufacturing.js'
import retail from './retail.js'
import healthcare from './healthcare.js'
import agriculture from './agriculture.js'

export const fields = [warehousing, manufacturing, retail, healthcare, agriculture]

/**
 * @typedef {Object} Robot
 * @property {string} name
 * @property {string} company
 * @property {string} description
 * @property {string} price
 * @property {string} image  - path relative to /public
 */

/**
 * @typedef {Object} Job
 * @property {string} title
 * @property {string} humanImage  - path relative to /public
 * @property {string} robotImage  - path relative to /public
 * @property {number} annualIncome
 * @property {Robot[]} robots
 */

/**
 * @typedef {Object} Field
 * @property {string} field
 * @property {Job[]} jobs
 */
