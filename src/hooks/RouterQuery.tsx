import { useLocation } from 'react-router-dom';

export function useRouterQuery(): URLSearchParams{
  return new URLSearchParams(useLocation().search)
}