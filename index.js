const app = require('express')()
const cors = require("cors")

app.use(cors())
app.use(require('./lib/routes/index'))


app.set("port", process.env.PORT || 3000)

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});


//app.listen(3000, () => console.log('listening on port 3000'))

