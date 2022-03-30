const fs = require('fs')
fs.writeFileSync('./.env', `API_KEY=${process.env.REACT_APP_API_ID}\n`)