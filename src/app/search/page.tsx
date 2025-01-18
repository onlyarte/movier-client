import { MOVIER_LOGO } from '../components/Image/assets';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

type Props = {
  searchParams: {
    q: string;
  };
};

export default async function Search({ searchParams }: Props) {
  return (
    <div className="px-5 pb-8 pt-20 w-full flex flex-col">
      <div className="w-full lg:max-w-[400px] mb-3 self-center">
        <img
          src={MOVIER_LOGO}
          alt="Movier"
          className="w-full max-w-[400px] mb-8"
        />
        <SearchBar initialValue={searchParams.q} autoFocus />
      </div>

      <SearchResults query={searchParams.q} />
    </div>
  );
}
