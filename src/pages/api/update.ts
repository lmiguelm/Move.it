import { NextApiRequest, NextApiResponse } from 'next';
import query from '../../config/database';
import { getSession } from 'next-auth/client';

export default async function Update(req: NextApiRequest, res: NextApiResponse) {

  const response: any  = await getSession({ req });

  if(response) {
    const { 
      level,
      currentExperience,
      challengesCompleted,
      totalExperience,
    } = req.body;
  
    try {
      await query({
        query: `UPDATE users SET level=?, current_experience=?, total_experience=?, challenges_completed=? WHERE id=?`,
        values: [ level, currentExperience, totalExperience, challengesCompleted, response.user.id ]
      });
    } catch (e) {
      console.log(e);
    } finally {
      return res.status(200);
    }
  } else {
    return res.status(401);
  }
}