import ApplicationController from 'controllers/application.controller';

class HealthController extends ApplicationController {
  public index = () => {
    this.success({ status: 'ok'});
  };
};

export default HealthController;
