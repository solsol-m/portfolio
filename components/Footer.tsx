import * as React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-2 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm font-semibold text-white/70">Malak Elmalahi</div>
          <div className="text-sm text-white/45">© {year} Malak Elmalahi. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

