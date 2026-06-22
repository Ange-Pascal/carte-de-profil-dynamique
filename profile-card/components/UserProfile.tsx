export default function UserProfile({
  name,
  role,
  isOnline,
  skills,
}: UserProfil) {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md border border-gray-200">
        <div className="flex items-center space-x-4">
            <div>
                <div className="text-xl font-medium text-black">{name}</div>
                <p className="text-gray-500">{role}</p>
            </div>
            <span className={`h-3 w-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-gray-500'}`}></span>
        </div>
        <div className="flex gap-3">
            {skills.map((skill) => (
                <span className="px-2 py-1 text-xs text-blue-700 bg-blue-100 rounded">{skill}</span>
            ))}
        </div>

    </div>
  );
}
