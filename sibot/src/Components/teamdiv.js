export default function TeamDiv({ idx, img, name, title }) {
  return (
    <>
      <div className="flex flex-col gap-0">
        <div
          className={`bg-${
            (idx + 1) % 2 == 0 ? "secondary" : "red"
          } w-40 h-40 flex items-center justify-center rounded-full overflow-clip`}
        >
          <img src={img} alt="Person" className="w-32 rounded-full" />
        </div>
        <h4 className="font-bold text-xl mt-2">{name}</h4>
        <p className="text-[#939394] text-xs">{title}</p>
      </div>
    </>
  );
}
