import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
   const users = [
      {id: 1, name: 'Lisa'},
      {id: 2, name: 'Fuu'},
      {id: 3, name: 'Blue'},
   ];

   return response.json(users)
}