import CardMember from "./CardMember";

type Member = {
  id: string;
  name: string;
  role: string;
};

interface CardMemberListProps {
  members: Member[];
}

const CardMemberList = ({ members }: CardMemberListProps) => {
  return (
    <div>
      <div className="mb-5 flex gap-2">
        <button className="inline-flex items-center justify-center rounded-full bg-meta-3 px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
          Starfish
        </button>
        <button className="inline-flex items-center justify-center rounded-full bg-meta-3 px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
          Squid
        </button>
        <button className="inline-flex items-center justify-center rounded-full bg-meta-3 px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
          Dolphin
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {members.map((member) => (
          <CardMember key={member.id} name={member.name} role={member.role} />
        ))}
      </div>
    </div>
  );
};

export default CardMemberList;
