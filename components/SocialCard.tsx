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
        "w-full max-w-[60px] px-2 py-3 flex flex-col justify-center items-center gap-2 bg-white transition-all shadow-sm border border-neutral-600/15 rounded-xl " +
        props.className
      }
    >
      <img src={props.src} alt={props.alt} width={25} />
      <div className="text-[10px] text-neutral-500">{props.title}</div>
    </div>
  );
};
