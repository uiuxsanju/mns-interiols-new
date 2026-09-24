import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type EstimateCtx = { open: boolean; openEstimate: () => void; setOpen: (v: boolean) => void };

const Ctx = createContext<EstimateCtx | null>(null);

export function EstimateProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openEstimate = useCallback(() => setOpen(true), []);
  const value = useMemo(() => ({ open, openEstimate, setOpen }), [open, openEstimate]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useEstimate() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useEstimate must be used inside EstimateProvider");
  return ctx;
}
