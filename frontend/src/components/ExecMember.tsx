import Image from 'next/image';

export default function ExecMember({ name, role, desc, img_src }) {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full">
        <Image
          src={img_src}
          width={300}
          height={300}
          alt={`portrait of ${name}`}
          className="block w-full object-cover"
        />
      </div>
      <div className="w-full mt-4 mb-10">
        <h2 className="font-bold">{name}</h2>
        <h3 className="text-gray-700">{role}</h3>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
}
