type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
  descriptionClassName?: string;
};

export default function SectionHeader({
  label,
  title,
  description,
  className = "mb-12",
  descriptionClassName = "text-slate-500 leading-relaxed text-base max-w-2xl",
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-2">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
        {title}
      </h2>
      {description ? <p className={descriptionClassName}>{description}</p> : null}
    </div>
  );
}
