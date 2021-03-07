import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../config/database';

export default async function GetRanking(req: NextApiRequest, res: NextApiResponse) {

  const query = `
    SELECT
      id,
      name,
      image,
      level,
      total_experience AS totalExperience,
      challenges_completed AS challengesCompleted
    FROM
      users
    ORDER BY
      total_experience DESC
  `;

  const users = await db({
    query,
    values: []
  });

  return res.json(users);
}