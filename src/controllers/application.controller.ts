import { Express, Request, Response } from "express";

class ApplicationController {
  protected params: any;
  protected request: Request;
  protected response: Response;
  protected app: Express;

  public constructor(
    app: Express,
    request: Request,
    response: Response,
  ) {
    this.app = app;
    this.params = request.params;
    this.request = request;
    this.response = response;
  };

  protected success = (payload: any = {}, status = 200) => {
    this.response.status(status).json({ payload: payload });
  };

  protected failure = (payload: any = {}, status = 422) => {
    this.response.status(status).json({ error: payload });
  };
};

export default ApplicationController;