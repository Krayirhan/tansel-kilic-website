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
  className = "mb-8 md:mb-9",
  descriptionClassName = "mt-4 max-w-2xl text-[0.98rem] leading-7 text-slate-600 md:text-base",
}: SectionHeaderProps) {
  return (
    <div className={className}>
      {label ? (
        <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
          {label}
        </span>
      ) : null}
      <h2 className="max-w-3xl text-[2rem] font-semibold leading-[1.06] tracking-[-0.03em] text-slate-950 sm:text-[2.28rem] md:text-[2.55rem]">
        {title}
      </h2>
      {description ? <p className={descriptionClassName}>{description}</p> : null}
    </div>
  );
}
