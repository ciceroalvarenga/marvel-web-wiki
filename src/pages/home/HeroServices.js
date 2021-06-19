import api from '../../services/api';
import qs from 'qs';

export function handleHeros(text) {
  const params = {
    orderBy: '-modified',
    nameStartsWith: text,
  };
  return api.get(`/characters?${qs.stringify(params)}`).then((res) => {
    let result = res.data.data.results;

    return result;
  });
}
