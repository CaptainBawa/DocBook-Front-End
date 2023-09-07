import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { fetchDoctors } from '../redux/doctorsSlice';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('doctorsSlice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      doctors: {
        doctors: [],
        status: 'idle',
        error: null,
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch doctors successfully', async () => {
    const responseData = [{ id: 1, name: 'Doctor 1' }];

    axios.get.mockResolvedValue({ data: responseData });

    await store.dispatch(fetchDoctors());

    const actions = store.getActions();

    expect(actions[0].type).toEqual(fetchDoctors.pending.type);
    expect(actions[1].type).toEqual(fetchDoctors.fulfilled.type);
    expect(actions[1].payload).toEqual(responseData);
  });

  it('should handle fetch doctors failure', async () => {
    axios.get.mockRejectedValue(new Error('Failed to fetch doctors'));

    await store.dispatch(fetchDoctors());

    const actions = store.getActions();

    expect(actions[0].type).toEqual(fetchDoctors.pending.type);
    expect(actions[1].type).toEqual(fetchDoctors.rejected.type);
    expect(actions[1].error.message).toEqual('Failed to fetch doctors');
  });
});
