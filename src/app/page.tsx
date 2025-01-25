import { makeMetadata } from '@/utils/metadata';
import SearchBar from './search/components/SearchBar';
import SearchResults from './search/components/SearchResults';
import { MOVIER_LOGO } from './components/Image/assets';
import { SearchQuery } from './search/components/SearchResults/useSearchQuery';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="px-5 pb-8 pt-20 w-full flex flex-col">
      <div className="w-full lg:max-w-[400px] mb-3 self-center">
        <Image
          src={MOVIER_LOGO}
          alt="Movier"
          width={400}
          height={200}
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
    tmdbId: 2636,
    title: 'The Specialist',
    poster:
      'http://image.tmdb.org/t/p/original/9CVAjtkSaFs9FyddGfThj11ZuQq.jpg',
    year: 1994,
  },
  {
    tmdbId: 10543,
    title: 'Fear',
    poster:
      'http://image.tmdb.org/t/p/original/mUVTKyDGKgpSF41PEsrrXDzBhSo.jpg',
    year: 1996,
  },
  {
    tmdbId: 2124,
    title: 'Color of Night',
    poster:
      'http://image.tmdb.org/t/p/original/w1OBPkf3BxeC7543YzFwiKIwBFJ.jpg',
    year: 1994,
  },
  {
    tmdbId: 1965,
    title: 'A Perfect Murder',
    poster:
      'http://image.tmdb.org/t/p/original/wC0ax12N9GQ8vMXPEs4nES5AAiB.jpg',
    year: 1998,
  },
  {
    tmdbId: 8834,
    title: 'Conspiracy Theory',
    poster:
      'http://image.tmdb.org/t/p/original/wj0n6gci4EMWRhV9ozCKTgESGdB.jpg',
    year: 1997,
  },
  {
    tmdbId: 619,
    title: 'The Bodyguard',
    poster:
      'http://image.tmdb.org/t/p/original/2VgZW2ZD3pNoV2j8U2GXNRwOsk9.jpg',
    year: 1992,
  },
  {
    tmdbId: 11060,
    title: 'Internal Affairs',
    poster: 'http://image.tmdb.org/t/p/original/A4pH8DiNFEf2AgXkM4zk3ZpblV.jpg',
    year: 1990,
  },
  {
    tmdbId: 4823,
    title: 'Final Analysis',
    poster:
      'http://image.tmdb.org/t/p/original/xR6T30U2nyyjygNnElQJpedbpck.jpg',
    year: 1992,
  },
  {
    tmdbId: 33408,
    title: 'The Crush',
    poster:
      'http://image.tmdb.org/t/p/original/yLjDOHZ56VBYLg5m3ohx4hMcTtO.jpg',
    year: 1993,
  },
  {
    tmdbId: 37141,
    title: 'The Babysitter',
    poster:
      'http://image.tmdb.org/t/p/original/wOv6HKiKTcDiyZRXPOsjm2JhVZV.jpg',
    year: 1995,
  },
  {
    tmdbId: 2251,
    title: 'Unfaithful',
    poster:
      'http://image.tmdb.org/t/p/original/bjiHEhuiwhIygzjczbTPAA07cGc.jpg',
    year: 2002,
  },
  {
    tmdbId: 7442,
    title: 'Sleeping with the Enemy',
    poster:
      'http://image.tmdb.org/t/p/original/lhkfSDKWvu6fX9LSyVaEklaLNZP.jpg',
    year: 1991,
  },
  {
    tmdbId: 345,
    title: 'Eyes Wide Shut',
    poster:
      'http://image.tmdb.org/t/p/original/knEIz1eNGl5MQDbrEAVWA7iRqF9.jpg',
    year: 1999,
  },
  {
    tmdbId: 274,
    title: 'The Silence of the Lambs',
    poster:
      'http://image.tmdb.org/t/p/original/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg',
    year: 1991,
  },
  {
    tmdbId: 1592,
    title: 'Primal Fear',
    poster:
      'http://image.tmdb.org/t/p/original/qJf2TzE8nRTFbFMPJNW6c8mI0KU.jpg',
    year: 1996,
  },
  {
    tmdbId: 617,
    title: 'Wild Things',
    poster:
      'http://image.tmdb.org/t/p/original/aaicreJBf7EuwGq3GgUV5ZedlfF.jpg',
    year: 1998,
  },
  {
    tmdbId: 1213,
    title: 'The Talented Mr. Ripley',
    poster:
      'http://image.tmdb.org/t/p/original/6ojHgqtIR41O2qLKa7LFUVj0cZa.jpg',
    year: 1999,
  },
  {
    tmdbId: 402,
    title: 'Basic Instinct',
    poster:
      'http://image.tmdb.org/t/p/original/76Ts0yoHk8kVQj9MMnoMixhRWoh.jpg',
    year: 1992,
  },
  {
    tmdbId: 10998,
    title: 'Fatal Attraction',
    poster:
      'http://image.tmdb.org/t/p/original/vjB9XwJKnYqFKKjhWcE6WpAf5Ki.jpg',
    year: 1987,
  },
  {
    tmdbId: 9264,
    title: 'Poison Ivy',
    poster:
      'http://image.tmdb.org/t/p/original/igwGf0qNka1qH1HPijgbABfUfB4.jpg',
    year: 1992,
  },
];
