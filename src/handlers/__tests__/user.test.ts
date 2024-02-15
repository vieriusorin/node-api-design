import { prismaMock } from '../../../singleton'

import { MockContext, Context, createMockContext } from '../../../context'
import { createNewUser } from '../user'

let mockCtx: MockContext
let ctx: Context

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context
})

describe('createNewUser', () => {
  it('should create a new user in the database', async () => {
    const mockUser = {
      username: 'test',
      password: 'test',
      createdAt: new Date(),
      id: '1'
    };

    prismaMock.user.create.mockResolvedValue(mockUser)


    await expect(createNewUser(_, _, mockUser)).resolves.toEqual(createNewUser)
  });

});