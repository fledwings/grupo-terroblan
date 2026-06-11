// Compatibility shim mapping react-router-dom v6/v7 API surface used in the
// imported codebase to TanStack Router primitives. Allows .jsx components
// written with `react-router-dom` to work unchanged.
import * as React from "react";
import {
  Link as TLink,
  useNavigate as tUseNavigate,
  useParams as tUseParams,
  useRouterState,
} from "@tanstack/react-router";

type AnyProps = Record<string, any>;

export const Link = React.forwardRef<HTMLAnchorElement, AnyProps>(function Link(
  { to, children, replace, state: _state, ...rest },
  ref,
) {
  // TanStack <Link to> accepts string paths; pass through.
  return (
    <TLink ref={ref as any} to={to} replace={replace} {...rest}>
      {children}
    </TLink>
  );
});

export const NavLink = Link;

export function useNavigate() {
  const nav = tUseNavigate();
  return React.useCallback(
    (to: any, opts?: { replace?: boolean; state?: any }) => {
      if (typeof to === "number") {
        if (typeof window !== "undefined") window.history.go(to);
        return;
      }
      if (typeof to === "string") {
        nav({ to, replace: opts?.replace });
        return;
      }
      if (to && typeof to === "object") {
        const path = (to.pathname ?? "/") + (to.search ?? "") + (to.hash ?? "");
        nav({ to: path, replace: opts?.replace });
      }
    },
    [nav],
  );
}

export function useParams<T extends Record<string, string> = Record<string, string>>(): T {
  return tUseParams({ strict: false }) as T;
}

export function useLocation() {
  return useRouterState({ select: (s) => s.location });
}

export function useSearchParams(): [URLSearchParams, (next: URLSearchParams | Record<string, string>) => void] {
  const loc = useLocation();
  const nav = tUseNavigate();
  const params = new URLSearchParams(loc.searchStr || "");
  const setParams = (next: URLSearchParams | Record<string, string>) => {
    const sp = next instanceof URLSearchParams ? next : new URLSearchParams(next);
    nav({ to: loc.pathname, search: Object.fromEntries(sp.entries()) as any });
  };
  return [params, setParams];
}

// Layout-only passthroughs so imports don't crash if used.
export const BrowserRouter = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
export const Routes = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
export const Route = (_: AnyProps) => null;
export const Outlet = () => null;
