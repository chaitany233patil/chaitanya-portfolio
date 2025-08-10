export function Footer() {
  return (
    <div className="flex">
      <div className="max-w-2xl mx-auto w-full px-3">
        <div className="w-full border border-black/50 mt-15"></div>
        <div className="pt-1 flex justify-between max-w-2xl items-center mx-auto pb-10">
          <div className="text-neutral-600">2025©Chaitanya Patil.</div>
          <a
            href="https://github.com/chaitany233patil/chaitanya-portfolio"
            target="_blank"
          >
            <div className="text-neutral-600 flex gap-1">
              <img src={"/icons/githublogo.svg"} alt={"github"} width={18} />
              space#233
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
