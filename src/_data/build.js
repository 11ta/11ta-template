require('dotenv').config()

/**
 * Setup a current env and timestamp with timezone support 
 *  for use in footer and other non-content file locations
 */
module.exports = {
  env: process.env.ELEVENTY_ENV,
  timestamp: new Date(),
  timezone: process.env.TIMEZONE || 'UTC',
  url: process.env.URL || 'http://localhost:8080',
}
