import api from '@/plugins/axios';

const url = import.meta.env.VITE_BASE_URL;

function signin(data) {
  return api.post(url + 'api/admin/signin', data);
}

export { signin };
