export default function Badge({ text }) {
  return (
    <div className="bg-red text-xs text-white px-[5px] w-max rounded-full">
      {text}
    </div>
  );
}
