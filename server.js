const express =require("express")
const app = express()
const request =require('request')

//routes
app.get("/",(req,res)=>{
    res.send('hello damian')
})

app.get('/access_token',(req,res)=>{
    //access token
    let url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
    let auth = new Buffer("00BrlsjQpba7zyAfZuAYXa5maJpnsw3w:RAVtOZ5FzASVpsih").toString('base64')
    request({
        url:url,
        header: {
            "Authorization": "Basic"  + auth
        }
    },(error,response,body)=>{
        if(error){
            console.log(error)
        }else{
            res.status(200).json(body)
        }
    })
})

//listen
app.listen(7000,(err,live)=>{
    if(err){
        console.log(`Error located on server ${err}`)
    }else{
        console.log(`Server is running at http://localhost:7000`)
    
}})
