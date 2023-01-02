 
 module.exports = (app) =>{

    app.get("/",(req,resp)=>{
        resp.sendFile("public/views/index.html",({root: __dirname}))
    })
  }