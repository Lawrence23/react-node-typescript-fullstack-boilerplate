import { OK, BAD_REQUEST } from "http-status-codes";
import { Controller, Get } from "@overnightjs/core";
import { Logger } from "@overnightjs/logger";
import { Request, Response } from "express";

@Controller('api/sample')
class SampleController {
  public static SUCCESS_MSG = 'Success!';

  @Get(':name')
  private sayHello(req: Request, res: Response) {
    try {
      const { name } = req.params;

      if (name === 'fail') {
        throw Error('User triggered failure')
      }
      Logger.Info(SampleController.SUCCESS_MSG + name);
      return res.sendStatus(OK).json({ message: SampleController.SUCCESS_MSG + name });
    } catch (error) {
      Logger.Err(error, true);
      return res.sendStatus(BAD_REQUEST).json({ error: error.message })
    }
  }
}

export default SampleController;