import { Express, Request, Response } from 'express';
import { HttpMethod, RouterAction } from 'interface/router';

class ApplicationRouter {
  private app: Express;

  constructor(app: Express) {
    this.app = app;
  }

  protected route = (
    method: HttpMethod,
    path: string,
    Controller: any,
    action: string
  ) => {
    this.app[method](path, (request: Request, response: Response) => {
      new Controller(this.app, request, response)[action]();
    });
  };

  protected resources = (
    path: string,
    Controller: any,
    actions: string[] = [],
  ) => {
    const definedActions: string[] = actions.length
      ? actions
      : Object.values(RouterAction);

    definedActions.forEach((action) => {
      switch (action) {
        case RouterAction.index:
          this.route(HttpMethod.GET, path, Controller, RouterAction.index);
          break;
        case RouterAction.create:
          this.route(HttpMethod.POST, path, Controller, RouterAction.create);
          break;
        case RouterAction.show:
          this.route(HttpMethod.GET, `${path}/:id`, Controller, RouterAction.show);
          break;
        case RouterAction.update:
          this.route(HttpMethod.PATCH, `${path}/:id`, Controller, RouterAction.update);
          this.route(HttpMethod.PUT, `${path}/:id`, Controller, RouterAction.update);
          break;
        case RouterAction.show:
          this.route(HttpMethod.DELETE, `${path}/:id`, Controller, RouterAction.delete);
          break;
      }
    });
  };
}

export default ApplicationRouter;
