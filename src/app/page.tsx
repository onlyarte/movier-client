import { makeMetadata } from '@/utils/metadata';
import SearchBar from './search/components/SearchBar';
import SearchResults from './search/components/SearchResults';
import { SearchQuery } from '@/graphql/graphql';
import { MOVIER_LOGO } from './components/Image/assets';

export default function Home() {
  return (
    <div className="px-5 pb-8 pt-20 w-full flex flex-col">
      <div className="w-full lg:max-w-[400px] mb-3 self-center">
        <img
          src={MOVIER_LOGO}
          alt="Movier"
          className="w-full max-w-[400px] mb-8"
        />
        <SearchBar placeholder="90s romantic thrillers" />
      </div>

      <SearchResults query="" mock={mock} />
    </div>
  );
}

export const metadata = makeMetadata();

const mock: SearchQuery['search'] = [
  {
    id: 2636,
    title: 'The Specialist',
    poster:
      'http://image.tmdb.org/t/p/original/9CVAjtkSaFs9FyddGfThj11ZuQq.jpg',
    year: 1994,
    __typename: 'Movie',
  },
  {
    id: 10543,
    title: 'Fear',
    poster:
      'http://image.tmdb.org/t/p/original/mUVTKyDGKgpSF41PEsrrXDzBhSo.jpg',
    year: 1996,
    __typename: 'Movie',
  },
  {
    id: 2124,
    title: 'Color of Night',
    poster:
      'http://image.tmdb.org/t/p/original/w1OBPkf3BxeC7543YzFwiKIwBFJ.jpg',
    year: 1994,
    __typename: 'Movie',
  },
  {
    id: 1965,
    title: 'A Perfect Murder',
    poster:
      'http://image.tmdb.org/t/p/original/wC0ax12N9GQ8vMXPEs4nES5AAiB.jpg',
    year: 1998,
    __typename: 'Movie',
  },
  {
    id: 8834,
    title: 'Conspiracy Theory',
    poster:
      'http://image.tmdb.org/t/p/original/wj0n6gci4EMWRhV9ozCKTgESGdB.jpg',
    year: 1997,
    __typename: 'Movie',
  },
  {
    id: 619,
    title: 'The Bodyguard',
    poster:
      'http://image.tmdb.org/t/p/original/2VgZW2ZD3pNoV2j8U2GXNRwOsk9.jpg',
    year: 1992,
    __typename: 'Movie',
  },
  {
    id: 11060,
    title: 'Internal Affairs',
    poster: 'http://image.tmdb.org/t/p/original/A4pH8DiNFEf2AgXkM4zk3ZpblV.jpg',
    year: 1990,
    __typename: 'Movie',
  },
  {
    id: 4823,
    title: 'Final Analysis',
    poster:
      'http://image.tmdb.org/t/p/original/xR6T30U2nyyjygNnElQJpedbpck.jpg',
    year: 1992,
    __typename: 'Movie',
  },
  {
    id: 33408,
    title: 'The Crush',
    poster:
      'http://image.tmdb.org/t/p/original/yLjDOHZ56VBYLg5m3ohx4hMcTtO.jpg',
    year: 1993,
    __typename: 'Movie',
  },
  {
    id: 37141,
    title: 'The Babysitter',
    poster:
      'http://image.tmdb.org/t/p/original/wOv6HKiKTcDiyZRXPOsjm2JhVZV.jpg',
    year: 1995,
    __typename: 'Movie',
  },
  {
    id: 2251,
    title: 'Unfaithful',
    poster:
      'http://image.tmdb.org/t/p/original/bjiHEhuiwhIygzjczbTPAA07cGc.jpg',
    year: 2002,
    __typename: 'Movie',
  },
  {
    id: 7442,
    title: 'Sleeping with the Enemy',
    poster:
      'http://image.tmdb.org/t/p/original/lhkfSDKWvu6fX9LSyVaEklaLNZP.jpg',
    year: 1991,
    __typename: 'Movie',
  },
  {
    id: 345,
    title: 'Eyes Wide Shut',
    poster:
      'http://image.tmdb.org/t/p/original/knEIz1eNGl5MQDbrEAVWA7iRqF9.jpg',
    year: 1999,
    __typename: 'Movie',
  },
  {
    id: 274,
    title: 'The Silence of the Lambs',
    poster:
      'http://image.tmdb.org/t/p/original/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg',
    year: 1991,
    __typename: 'Movie',
  },
  {
    id: 1592,
    title: 'Primal Fear',
    poster:
      'http://image.tmdb.org/t/p/original/qJf2TzE8nRTFbFMPJNW6c8mI0KU.jpg',
    year: 1996,
    __typename: 'Movie',
  },
  {
    id: 617,
    title: 'Wild Things',
    poster:
      'http://image.tmdb.org/t/p/original/aaicreJBf7EuwGq3GgUV5ZedlfF.jpg',
    year: 1998,
    __typename: 'Movie',
  },
  {
    id: 1213,
    title: 'The Talented Mr. Ripley',
    poster:
      'http://image.tmdb.org/t/p/original/6ojHgqtIR41O2qLKa7LFUVj0cZa.jpg',
    year: 1999,
    __typename: 'Movie',
  },
  {
    id: 402,
    title: 'Basic Instinct',
    poster:
      'http://image.tmdb.org/t/p/original/76Ts0yoHk8kVQj9MMnoMixhRWoh.jpg',
    year: 1992,
    __typename: 'Movie',
  },
  {
    id: 10998,
    title: 'Fatal Attraction',
    poster:
      'http://image.tmdb.org/t/p/original/vjB9XwJKnYqFKKjhWcE6WpAf5Ki.jpg',
    year: 1987,
    __typename: 'Movie',
  },
  {
    id: 9264,
    title: 'Poison Ivy',
    poster:
      'http://image.tmdb.org/t/p/original/igwGf0qNka1qH1HPijgbABfUfB4.jpg',
    year: 1992,
    __typename: 'Movie',
  },
];
