import { mongooseConenct } from '@/lib/mongoose'
import Products from '@/models/Products';
import React from 'react'

export default  async function handler(req ,res )  {
  await mongooseConenct();
  
  const ids = req.body.ids;
  res.json(await Products.find({_id:ids}));
 
}


