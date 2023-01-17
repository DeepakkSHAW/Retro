import axios from 'axios';

export default axios.create({

  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization : 'Bearer q12Wr3yKHnTocmd-XsOhi2T051ZDgLkV1N70bgmSa9cBLuVBuwMiid_dp8sApRK46yPqHzeIxVJ1vYN-2Fj0hQQjJiNwxxSIJGJ_d_mvCXNdFejLtANh0vo16-fAY3Yx'
  },
});
