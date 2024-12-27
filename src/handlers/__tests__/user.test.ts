import * as User from '../user';

describe('creating a new user', () => {
    it('should should create a new user', async () => {
        const req = { body: { username: 'test', password: 'testwjest' } };
        const res = { json({token}) {
            expect(token).toBeTruthy();
        }}

        await User.createNewUser(req, res, () => {});
    })
})