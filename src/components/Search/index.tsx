type SearchInputProps = {
  searchTerm: string;
  handleSubmit: (event: any) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCancelSubmit: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm,
  handleChange,
  handleSubmit,
  handleCancelSubmit,
}) => {
  return (
    <form id="search-form" action="" method="POST" onSubmit={handleSubmit}>
      <input
        id="search-input"
        type="text"
        autoComplete="off"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        onInput={handleCancelSubmit}
      />
      <button type="button" onClick={handleSubmit}>Search</button>
    </form>
  );
};
