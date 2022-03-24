// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 600 });

type balance = {
  token: string,
  balance: number
}

type BalanceData = {
  address: string,
  balances: balance[]
}


// TODO: Wrap in try catch & handle Error
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { address, balances } = req.body.data as BalanceData;
    // Basic validation
    if(!address || !balances) throw new Error('Please provide a valid address & balance')

    // No need to fetch previous cached data so just overwrite what exists
    const stored = cache.set(address, balances)
    if(!stored) throw new Error('Falied to store snapshot')

    
    res.send({ address, balances, stored: true })
  
  } catch (e) {
    res.status(500)
  }
}
