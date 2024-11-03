import "./movies.css";
import Tag from "./Tag";
import SearchBar from "../general/SearchBar";
import SelectInput from "../general/SelectInput";
import NumberInput from "../general/NumberInput";

const Filter = ({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) => {
  const sortOptions = [
    { value: "", label: "Default" },
    { value: "latest", label: "Latest" },
    { value: "oldest" },
    { value: "highestrated", label: "Highest Rated" },
    { value: "lowestrated", label: "Lowest Rated" },
  ];
  const genreOptions = [
    { value: "action", label: "Action" },
    { value: "drama", label: "Drama" },
    { value: "comedy", label: "Comedy" },
    { value: "biography", label: "Biography" },
    { value: "romance", label: "Romance" },
    { value: "thriller", label: "Thriller" },
    { value: "war", label: "War" },
    { value: "history", label: "History" },
    { value: "sport", label: "Sport" },
    { value: "sci-fi", label: "Sci-Fi" },
    { value: "documentary", label: "Documentary" },
    { value: "crime", label: "Crime" },
    { value: "fantasy", label: "Fantasy" },
  ];
  return (
    <div className="movies-filter">
      <ul className="filter-section">
        <li>
          <SearchBar title={title} setTitle={setTitle} />
        </li>
        <li>
          <NumberInput
            label="Min Date"
            min={1970}
            max={2022}
            step={1}
            value={minYear}
            setValue={setMinYear}
          />
        </li>
        <li>
          <NumberInput
            label="Max Date"
            min={1970}
            max={2022}
            step={1}
            value={maxYear}
            setValue={setMaxYear}
          />
        </li>
        <li>
          <SelectInput
            label="Sort"
            options={sortOptions}
            multiple={false}
            value={sort}
            setValue={setSort}
          />
        </li>
      </ul>
      <ul className="filter-section-2">
        {genreOptions.map((genre, idx) => (
          <Tag
            key={`tag-${idx}`}
            genre={genre.label}
            genres={genres}
            setGenres={setGenres}
            filter={true}
          />
        ))}
      </ul>
    </div>
  );
};

export default Filter;
