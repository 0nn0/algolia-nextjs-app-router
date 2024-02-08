"use client";

import algoliasearch from "algoliasearch/lite";
import { Hit as AlgoliaHit } from "instantsearch.js";
import {
  Configure,
  Highlight,
  Pagination,
  SearchBox,
  useHits,
  usePagination,
} from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";

const client = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76");

function Hits() {
  const { hits, results } = useHits();

  const emptyQuery = results?.query.trim() === "";
  const hasResults = hits.length > 0 && !emptyQuery;

  return (
    <div>
      {hits.map((hit) => (
        <Hit key={hit.objectID} hit={hit} />
      ))}

      {hasResults && <Pagination />}
    </div>
  );
}

function Hit({
  hit,
}: {
  hit: AlgoliaHit<{
    name: string;
    price: number;
  }>;
}) {
  return (
    <>
      <Highlight hit={hit} attribute="name" className="Hit-label" />
      <span className="Hit-price">${hit.price}</span>
    </>
  );
}

export default function Search() {
  return (
    <InstantSearchNext searchClient={client} indexName="instant_search" routing>
      <div className="Container">
        <div>
          <Configure hitsPerPage={1} />
          <SearchBox />
          <Hits />
        </div>
      </div>
    </InstantSearchNext>
  );
}

function CustomPagination() {
  const { currentRefinement, canRefine, refine, nbPages } = usePagination();

  if (!canRefine) {
    return null;
  }

  return <div style={{ marginTop: 50 }}>Pagination placeholder</div>;
}
