export default function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block bg-white border border-slate-200 rounded-full px-3 py-0.5 text-xs font-medium text-slate-500">
      {label}
    </span>
  );
}
