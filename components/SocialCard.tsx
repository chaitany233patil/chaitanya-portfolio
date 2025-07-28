interface ISocial {
  src: string;
  title: string;
  alt: string;
  className?: string;
}

export const SocialCard = (props: ISocial) => {
  return (
    <div
      className={
        "bg-gradient-to-b from-neutral-50 via-neutral-100 to-yellow-400/15 min-w-12 md:min-w-14 max-w-[51px] px-2 py-3 flex flex-col justify-center items-center gap-2 bg-white transition-all shadow-sm border border-neutral-600/15 rounded-xl " +
        props.className
      }
    >
      <img src={props.src} alt={props.alt} width={20} />
      <div className="text-[9px] text-neutral-500">{props.title}</div>
    </div>
  );
};
