const Pool = require('pg').Pool

const connection = new Pool({
  user: 'utbebmhbscqvew',
  host: 'ec2-54-170-123-247.eu-west-1.compute.amazonaws.com',
  database: 'dcf8q1s7nshss8',
  password: 'c5ea74be57ab3ef76c7ebb3f77c8cebed1bc47db22c06166be3d9644e0c99e1b',
  port: 5432,
})
module.exports = connection;