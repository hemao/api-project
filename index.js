const app = require('express')()
app.use(require('./lib/routes/index'))
app.listen(3000, () => console.log('listening on port 3000'))