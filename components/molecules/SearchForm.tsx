/** Tidal Field Guide — native, screen-reader-labelled search and category controls. */
import { Icon } from "@/components/atoms";

export type FilterOption = { value: string; label: string };

export function SearchForm({ query, filter, filterOptions, onQueryChange, onFilterChange }: { query: string; filter: string; filterOptions: FilterOption[]; onQueryChange: (value: string) => void; onFilterChange: (value: string) => void }) {
  return <form className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_12rem]" role="search" onSubmit={(event) => event.preventDefault()}>
    <div className="relative">
      <label className="sr-only" htmlFor="heritage-search">Search heritage sites</label>
      <Icon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-tidal-teal" name="search" />
      <input className="h-12 w-full border border-tide-ink/30 bg-white py-3 pl-12 pr-4 text-base placeholder:text-charcoal/55 focus:border-tidal-teal focus:ring-2 focus:ring-copper-sand/70" id="heritage-search" onChange={(event) => onQueryChange(event.target.value)} placeholder="Search a place or municipality" type="search" value={query} />
    </div>
    <div className="relative">
      <label className="sr-only" htmlFor="heritage-filter">Filter heritage sites by category</label>
      <select className="h-12 w-full appearance-none border border-tide-ink/30 bg-white px-4 pr-10 text-sm font-bold text-tide-ink focus:border-tidal-teal focus:ring-2 focus:ring-copper-sand/70" id="heritage-filter" onChange={(event) => onFilterChange(event.target.value)} value={filter}>
        {filterOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
      <Icon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-tidal-teal" name="chevronDown" />
    </div>
  </form>;
}
