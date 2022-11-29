// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  calculateTotalPaint,
  calculatePaintCans,
} from '../../../utils/calcServices';
import { returnErrorTypes, returnTypes } from '../../../types/returnTypes';
import { wallTypes } from '../../../types/typesStructures';

export default function amount(
  req: NextApiRequest,
  res: NextApiResponse<returnTypes | returnErrorTypes>
) {
  const {
    body: { walls },
  } = req;
  walls.map(({ wall }: wallTypes) => {
    if (!wall.width || !wall.height) {
      return res.status(400).json({ error: 'invalid body' });
    } else {
      const area = calculateTotalPaint(walls);
      const result = calculatePaintCans(area);
      return res.status(200).json(result);
    }
  });
}
