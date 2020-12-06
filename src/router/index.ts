import { Express } from 'express';
import * as v1 from 'controllers/v1';
import ApplicationRouter from './application.router';
// import { HttpMethod, RouterAction } from 'interface/router';

/*
*  this.route(HttpMethod.GET, '/users', UsersController, 'index')
*    => GET: /users to UsersController # index
*
*  this.resources('/users', UsersController)
*    => GET: /users to UsersController # index
*    => POST: /users to UsersController # create
*    => GET: /users/:id to UsersController # show
*    => PATCH: /users/:id to UsersController # update
*    => PUT: /users/:id to UsersController # update
*    => DELETE: /users/:id to UsersController # delete
*/

class Router extends ApplicationRouter {
  constructor(app: Express) {
    super(app);
    this.routes();
  }

  private routes = () => {
    this.resources('/v1/health', v1.HealthController, ['index'])
  };
}

export default Router;
