// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  calculateTotalPaint,
  calculatePaintCans,
} from '../../../services/calcServices';

export default function amount(req: NextApiRequest, res: NextApiResponse<any>) {
  
  const {
    body: { walls },
  } = req;
  console.log(walls);
  
  if (!walls || walls.length !== 4) {
    res.status(400).json({ error: 'invalid body' });
  } else {
    const area = calculateTotalPaint(walls);
    const result = calculatePaintCans(area);
    res.status(200).json(result);
  }
}
