import Axios from '../util/axios';

export default {
  getInfo: (start, end) =>
    Axios({
      url: '/train',
      method: 'get',
      data: {
        start,
        end,
      },
    }),
};
