import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

type Props = {
  searchParams: {
    q: string;
  };
};

export default async function Search({ searchParams }: Props) {
  return (
    <div className="px-5 py-8 pt-20 w-full">
      <div className="flex mb-5">
        <SearchBar
          initialValue={searchParams.q}
          key={searchParams.q}
          style={{ flexBasis: 600, flexGrow: 0, flexShrink: 1 }}
        />
      </div>

      <SearchResults query={searchParams.q} />
    </div>
  );
}
