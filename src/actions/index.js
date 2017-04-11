export const TEST_ACTION = 'TEST_ACTION';
export const PING = 'PING';
export const PONG = 'PONG';

export const testAction = amount => ({
  type: TEST_ACTION,
  amount,
});

export const sendPing = () => ({
  type: PING,
});

export const sendPong = () => ({
  type: PONG,
});
