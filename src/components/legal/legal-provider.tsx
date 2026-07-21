"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { LegalModal } from "@/components/legal/legal-modal";
import type { LegalDocId } from "@/lib/legal/content";

interface LegalContextValue {
  openLegal: (id: LegalDocId) => void;
}

const LegalContext = createContext<LegalContextValue | null>(null);

export function LegalProvider({ children }: { children: ReactNode }) {
  const [docId, setDocId] = useState<LegalDocId | null>(null);

  const openLegal = useCallback((id: LegalDocId) => {
    setDocId(id);
  }, []);

  const onClose = useCallback(() => setDocId(null), []);

  const value = useMemo(() => ({ openLegal }), [openLegal]);

  return (
    <LegalContext.Provider value={value}>
      {children}
      <LegalModal docId={docId} onClose={onClose} />
    </LegalContext.Provider>
  );
}

export function useLegal() {
  const ctx = useContext(LegalContext);
  if (!ctx) {
    throw new Error("useLegal must be used within LegalProvider");
  }
  return ctx;
}
