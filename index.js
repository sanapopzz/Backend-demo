const express=require("express");
const cors=require("cors")
const app=new express();
const multer=require('multer');
const storage=multer.memoryStorage();
const upload=multer({storage:storage})
const studentmodel=require('./model/student')
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());


app.get('/',(request,response)=>{
    response.send("hai")
    })

app.put('/edit/:id',async(request,response)=>{
    let id=request.params.id
    await studentmodel.findByIdAndUpdate(id.request.body)
    response.send("record updated")
})
    
app.listen(3001,(request,response)=>{
        console.log("Port ok")
    })

// app.post('/new',(request,responce)=>{
//     console.log(request.body)
//     new studentmodel(request.body).save();
//     responce.send("record saved")
// })

app.post('/new',upload.single('image1'),async(request,response)=>{
    try{
        const{Adminno,Name,Age,Course}=request.body
        const newdata=new studentmodel({
            Adminno,Name,Age,Course,
            image1:{
                data:request.file.buffer,
                contentType:request.file.mimetype
            }
        })
        console.log(newdata)
        await newdata.save();
        response.status(200).json({message:'Record saved'});
    }
    catch(error)
    {
        response.status(500).json({error:'Internale Server Error'});
    }
})

app.get('/view',async(request,response)=>{
     var data=await studentmodel.find();
     response.send(data)
})