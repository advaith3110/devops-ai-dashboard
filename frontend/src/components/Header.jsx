function Header() {
  return (
    <div className="h-16 border-b border-zinc-800 flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">DevOps Operations Center</h1>

      <div className="flex items-center gap-6 text-sm">
        <span className="text-zinc-400">Environment: Production</span>

        <span className="text-emerald-400">● Online</span>
      </div>
    </div>
  );
}

export default Header;
