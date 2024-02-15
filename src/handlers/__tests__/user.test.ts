import * as user from '../user'

describe("user handler", function () {

  it('should create a new user', async () => {
    const req = {
      body: {
        username: "test",
        password: "test"
      }
    };
    const res = {
      json: jest.fn()
    };
    await user.createNewUser(req, res, () => { });
  })
})