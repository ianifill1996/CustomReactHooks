# Custom Hooks Lab: usePagination & useDebounce

This project demonstrates two reusable custom React Hooks—`usePagination` and `useDebounce`—built using React and TypeScript with Vite. Each hook encapsulates common client-side logic and is paired with a demo component to show practical usage.

## Hooks Overview

### 1. usePagination

Manages client-side pagination for a list of items.

**Inputs:**
- `totalItems`: total number of items
- `itemsPerPage` (default = 10)
- `initialPage` (default = 1)

**Returns:**
- `currentPage`, `totalPages`, `startIndex`, `endIndex`, `itemsOnCurrentPage`
- `setPage(pageNumber)`, `nextPage()`, `prevPage()`
- `canNextPage`, `canPrevPage`

**Location:** `src/hooks/usePagination.ts`

---

### 2. useDebounce

Delays updating a value until a specified amount of time has passed without changes. Useful for search inputs or real-time filters.

**Inputs:**
- `value`: the input value to debounce
- `delay`: delay in milliseconds (default = 500ms)

**Returns:**
- `debouncedValue`

**Location:** `src/hooks/useDebounce.ts`

---

## Demo Components

### PaginationDemo.tsx
- Uses `usePagination` to paginate a list of 123 items.
- Displays current items, current page, total pages, and page navigation.

### DebounceSearchDemo.tsx
- Uses `useDebounce` to manage debounced input state.
- Displays both the current and debounced values.

---

## Getting Started

### Install and Run

```bash
npm create vite@latest custom-hooks-lab -- --template react-ts
cd custom-hooks-lab
npm install
npm run dev
