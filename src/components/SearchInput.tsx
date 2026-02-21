type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SearchInput = ({ value, onChange }: Props) => {
  return (
    <input
      type="text"
      placeholder="Buscar produto..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded px-3 py-2 w-full"
    />
  );
};

export default SearchInput;
