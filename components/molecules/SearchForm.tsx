import { Icon } from "@/components/atoms";
import { CATEGORIES } from "@/lib/heritage";

export function SearchForm({
  query,
  onQueryChange,
  category,
  onCategoryChange,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  category?: string;
  onCategoryChange?: (value: string) => void;
}) {
  const showDropdown = Boolean(onCategoryChange) && category !== undefined;

  return (
    <form
      className="grid gap-3 sm:grid-cols-[1fr_auto]"
      role="search"
      onSubmit={(event) => event.preventDefault()}
    >
      {/* --- The search box --- */}
      <div className="relative">
        <label className="sr-only" htmlFor="site-search">
          Search heritage sites
        </label>
        <Icon
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-tidal-teal"
          name="search"
        />
        <input
          autoComplete="off"
          className="h-12 w-full border border-tide-ink/30 bg-white pl-12 pr-4 text-base placeholder:text-tide-ink/50 focus:border-tidal-teal focus:outline-none focus:ring-2 focus:ring-copper-sand/60"
          id="site-search"
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search a place, like Bolinao or island"
          type="search"
          value={query}
        />
      </div>

      {/* --- The category dropdown (Sites page only) --- */}
      {showDropdown ? (
        <div className="relative">
          <label className="sr-only" htmlFor="site-category">
            Filter by category
          </label>
          <select
            className="h-12 w-full appearance-none border border-tide-ink/30 bg-white px-4 pr-10 text-sm font-bold text-tide-ink focus:border-tidal-teal focus:outline-none focus:ring-2 focus:ring-copper-sand/60 sm:w-56"
            id="site-category"
            onChange={(event) => onCategoryChange?.(event.target.value)}
            value={category}
          >
            {CATEGORIES.map((option) => (
              <option key={option} value={option === "All categories" ? "all" : option}>
                {option}
              </option>
            ))}
          </select>
          <Icon
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-tidal-teal"
            name="chevronDown"
          />
        </div>
      ) : null}
    </form>
  );
}
