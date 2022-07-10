const jobs = require('./jobs');
const users = require('./users')

module.exports = {
    ...jobs,
    ...users
}