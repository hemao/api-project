const app = require('express')()
app.use(require('./lib/routes/index'))

app.set("port", process.env.PORT || 8080)

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

//app.listen(3000, () => console.log('listening on port 3000'))

