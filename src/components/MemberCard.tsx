type MemberCardProps = {
  fullname: string;
  photoUrl: string;
  matricula: string;
};

export default function MemberCard({ fullname, photoUrl, matricula }: MemberCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-center">
      <img
        src={photoUrl}
        alt="Integrante"
        className="rounded-full w-28 h-28 mx-auto mb-3 object-cover"
      />
      <p className="text-lg font-semibold">{fullname}</p>
      <p className="text-gray-500 text-sm">Matrícula {matricula}</p>
    </div>
  );
}
