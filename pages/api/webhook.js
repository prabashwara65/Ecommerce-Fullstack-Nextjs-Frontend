import { mongooseConenct } from '@/lib/mongoose'

import {buffer} from 'micro';
import {Order} from "@/models/Order";

const endpointSecret = "whsec_220f2ed2b8c0d097443614fe77d57ae64ae329689ab2e1a71dde7778bf6e1b7e";

export default async function handler(req,res) {
  await mongooseConenct();
  

  let event;

  try {
    event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
  } catch (err) {
    res.status(400));
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const data = event.data.object;
      const orderId = data.metadata.orderId;
      const paid = data.payment_status === 'paid';
      if (orderId && paid) {
        await Order.findByIdAndUpdate(orderId,{
     
        })
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send('ok');
}

export const config = {
  api: {bodyParser:false,}
};

// bright-thrift-cajole-lean
// account id acct_1PVVuNAJebdXgZbZ
