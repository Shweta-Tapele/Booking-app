import Hotel from "../models/Hotel.js";

export const createHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body)
  try{
    const savedHotel = await newHotel.save()
    res.status(200).json(savedHotel)
  }
  catch(err){
    next(err);
  }
};


export const updateHotel = async (req,res,next)=>{
   try{
      const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
      res.status(200).json(updatedHotel)
    }
    catch(err){
    next(err)
  }
}


export const deleteHotel = async (req,res,next)=>{
    try{
    await Hotel.findByIdAndDelete(req.params.id)
    res.status(200).json("Hotel has been deleted")
  }
  catch(err){
    next(err);
  }
};

export const getHotels = async (req,res,next)=>{
    const failed = true
    //testing the error.js 
    //if(failed) return next(createError(401,"You are not authenticated"));
    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels)
       }
    catch(err){
      //res.status(500).json(err)
      next(err) 
    }
}

export const getHotel = async (req,res,next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
      }
      catch(err){
    next(err)
  }
}


export const  countByCity = async(req,res,next)=>{
  const cities = req.query.cities.split(",");
  //console.log(cities);
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const  countByType = async(req,res,next)=>{
  const types = req.query.types.split(",");
  //console.log(types);
  try {
    const list = await Promise.all(
      types.map((type) => {
        return Hotel.countDocuments({ type: type });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

