export default function AboutText({ title, text }) {
  return (
    <div className="my-5">
      <h2 className="text-2xl text-[#244F7A]">{title}</h2>
      <p>{text}</p>
    </div>
  );
}
