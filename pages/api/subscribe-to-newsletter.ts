import { NextApiRequest, NextApiResponse } from "next";

const subscribeToNewsLetter = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { email }: { email: string } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const API_SERVER = process.env.MAILCHIMP_API_SERVER;
    const data = {
      email_address: email,
      status: "subscribed",
    };

    const response = await fetch(
      `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    const jsonResponse = await response.json();

    if (response.status >= 400) {
      // 400 or above is an error
      return res.status(response.status).json({
        error: jsonResponse,
      });
    }

    return res.status(201); // New email added to listing and throw 201 success
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

export default subscribeToNewsLetter;
