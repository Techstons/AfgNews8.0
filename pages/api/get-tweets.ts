// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { TwitterData } from "types";
import { Msg } from "types/twitter";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TwitterData | Msg>
) {
  const twitterId = "921835348195360769"; // currently using my own @Kerubi5s account
  const uri = `https://api.twitter.com/2/users/${twitterId}/tweets?max_results=5`;
  const token = process.env.TWITTER_ACCESS_TOKEN;

  try {
    const twitterRes = await fetch(uri, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    if (twitterRes.ok) return res.json(await twitterRes.json());
    if (twitterRes.status === 404)
      return res.status(400).json({ msg: "could not fetch data" });
  } catch (err: any) {
    res.json(err);
  }
}
