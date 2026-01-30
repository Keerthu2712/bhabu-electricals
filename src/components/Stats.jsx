import { BriefcaseIcon, UserGroupIcon, ClockIcon, TrophyIcon } from "@heroicons/react/24/outline";

const statsData = [
  { icon: <BriefcaseIcon className="stat-icon" />, number: "250+", label: "Projects Completed" },
  { icon: <UserGroupIcon className="stat-icon" />, number: "120+", label: "Happy Clients" },
  { icon: <ClockIcon className="stat-icon" />, number: "15+", label: "Years of Experience" },
  { icon: <TrophyIcon className="stat-icon" />, number: "50+", label: "Awards & Certifications" },
];

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {statsData.map((stat, idx) => (
          <div className="stat-card" key={idx}>
            {stat.icon}
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
