import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import {
  fetchAppointments,
} from '../redux/appointmentsSlice';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('appointmentsSlice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      appointments: {
        appointments: [],
        status: 'idle',
        error: null,
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch appointments successfully', async () => {
    const responseData = [{ id: 1, date: '2023-09-10' }];

    axios.get.mockResolvedValue({ data: responseData });

    await store.dispatch(fetchAppointments());

    const actions = store.getActions();

    expect(actions[0].type).toEqual(fetchAppointments.pending.type);
    expect(actions[1].type).toEqual(fetchAppointments.fulfilled.type);
    expect(actions[1].payload).toEqual(responseData);
  });

  it('should handle fetch appointments failure', async () => {
    axios.get.mockRejectedValue(new Error('Failed to fetch appointments'));

    await store.dispatch(fetchAppointments());

    const actions = store.getActions();

    expect(actions[0].type).toEqual(fetchAppointments.pending.type);
    expect(actions[1].type).toEqual(fetchAppointments.rejected.type);
    expect(actions[1].error.message).toEqual('Failed to fetch appointments');
  });
});
