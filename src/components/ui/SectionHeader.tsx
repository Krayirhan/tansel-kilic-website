type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  descriptionClassName?: string;
};

export default function SectionHeader({
  label,
  title,
  description,
  className = "mb-10",
  descriptionClassName = "mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 md:text-base",
}: SectionHeaderProps) {
  return (
    <div className={className}>
      {label ? (
        <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.28em] text-slate-500">
          {label}
        </span>
      ) : null}
      <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-[2.35rem] md:text-[2.65rem] md:leading-[1.05]">
        {title}
      </h2>
      {description ? <p className={descriptionClassName}>{description}</p> : null}
    </div>
  );
}
