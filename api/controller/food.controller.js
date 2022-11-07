exports.getTeamDetails = (req, res) => {
    return res.status(200).json({
        team: "backend4",
        memberNames: [
            "Swathika B",
            "Aadarsh Sreekumar",
            "Anirudh Ramesh"
        ]
    })
}

const fs = require('fs');

let data = fs.readFileSync('./data/Foodjson.json');
const locations = ["US-NC","IE","IN"]
const food = JSON.parse(data);

exports.getFoodDetails = (req,res)=>{
    let loc = req.query.location;
    let foods;
    if(locations.includes(loc)){
        if(locations.indexOf(loc)==0){

            foods=JSON.parse(JSON.stringify(food));
            foods.forEach(e => {
                
                e.price = e.price + (0.08*e.price);
                e.price = e.price.toPrecision(3);
                
            });
        }
        else if(locations.indexOf(loc)==1){
           
            foods=JSON.parse(JSON.stringify(food));
            foods.forEach(e => {
                
                e.price = e.price + (0.23*e.price);
                e.price = e.price.toPrecision(3);
                
            });
        }
        else if(locations.indexOf(loc)==2){
            
            foods=JSON.parse(JSON.stringify(food));
            foods.forEach(e => {
                
                e.price= e.price*82.20; //Convert to INR
                e.price = e.price + (0.18*e.price);
                e.price = e.price.toPrecision(5);
                
            }); 
        }
        res.status(200).json({
            error:false,
            message: "successful retrieval!",
            data: foods
        })
    }
    else{
        
        res.status(404).json({
            error:true,
            message: "unsuccessful get request!",
            data:null
        })
    }
    
}