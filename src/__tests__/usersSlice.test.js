import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { fetchUsers } from '../redux/usersSlice';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('usersSlice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      users: {
        users: [],
        status: 'idle',
        error: null,
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch users successfully', async () => {
    const responseData = [{ id: 1, name: 'User 1' }];

    axios.get.mockResolvedValue({ data: responseData });

    await store.dispatch(fetchUsers());

    const actions = store.getActions();

    expect(actions[0].type).toEqual(fetchUsers.pending.type);
    expect(actions[1].type).toEqual(fetchUsers.fulfilled.type);
    expect(actions[1].payload).toEqual(responseData);
  });

  it('should handle fetch users failure', async () => {
    axios.get.mockRejectedValue(new Error('Failed to fetch users'));

    await store.dispatch(fetchUsers());

    const actions = store.getActions();

    expect(actions[0].type).toEqual(fetchUsers.pending.type);
    expect(actions[1].type).toEqual(fetchUsers.rejected.type);
    expect(actions[1].error.message).toEqual('Failed to fetch users');
  });
});
