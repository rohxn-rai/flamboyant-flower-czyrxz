import { NextApiRequest, NextApiResponse } from "next/types";
import { NotFoundError } from "@/errors/not-found-error";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  throw new NotFoundError();
};
export default handler;
