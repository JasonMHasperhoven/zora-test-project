import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: <string>process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
});

export default unsplash;