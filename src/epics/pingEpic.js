import 'rxjs';

import { PING, sendPong } from '../actions';

const pingEpic = action$ =>
  action$.ofType(PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo(sendPong());

export default pingEpic;
