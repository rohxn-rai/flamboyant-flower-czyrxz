import type { NextApiRequest, NextApiResponse } from "next";
import { CustomError } from "@/errors/custom-error";

export function withErrorHandler(
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void> | void
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await handler(req, res);
    } catch (err) {
      if (err instanceof CustomError) {
        res.status(err.statusCode).json({ errors: err.serializeErrors() });
        return;
      }

      console.error(err);
      res.status(400).json({
        errors: [{ message: (err as Error).message }],
      });
    }
  };
}
