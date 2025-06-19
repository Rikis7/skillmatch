import { useState } from "react";

const users = [
  {
    id: 1,
    name: "Amina Karimova",
    title: "Frontend Developer",
    bio: "Passionate about building user-friendly interfaces with React.",
    skills: ["React", "Tailwind", "TypeScript"],
    avatar: "https://i.pravatar.cc/150?img=15"
  },
  {
    id: 2,
    name: "Diyorbek Sodiqov",
    title: "Backend Engineer",
    bio: "Experienced in Node.js, databases, and microservices.",
    skills: ["Node.js", "MongoDB", "Docker"],
    avatar: "https://i.pravatar.cc/150?img=13"
  },
  {
    id: 3,
    name: "Elina Nematova",
    title: "UI/UX Designer",
    bio: "Crafting intuitive user experiences and clean interfaces.",
    skills: ["Figma", "Prototyping", "Design Systems"],
    avatar: "https://i.pravatar.cc/150?img=12"
  }
];

function Discover() {
  const [search, setSearch] = useState("");

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Discover Talent 💡
        </h1>

        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-gray-700 dark:text-white"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((user) => (
            <div
              key={user.id}
              className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{user.name}</h2>
                  <p className="text-sm text-gray-500 dark:text-slate-400">{user.title}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-slate-300 mt-3">{user.bio}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {user.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-white rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex space-x-3">
                <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-xl hover:bg-indigo-700 transition">
                  Message
                </button>
                <button className="bg-gray-200 dark:bg-slate-700 text-sm text-gray-800 dark:text-white px-4 py-2 rounded-xl hover:bg-gray-300 dark:hover:bg-slate-600 transition">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Discover;
