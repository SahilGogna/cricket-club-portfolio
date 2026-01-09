import './Achievements.css';

// Import league logos
import socaLogo from '../assets/images/soca-logo.jpeg';
import rplLogo from '../assets/images/rpl-logo.jpeg';
import wclLogo from '../assets/images/woodstock-logo.jpeg';
import gladiatorLogo from '../assets/images/gladiator-cup-logo.jpeg';

// Trophy SVG component with color support
const Trophy = ({ color = 'gold' }) => {
    const colors = {
        gold: '#FFD700',
        silver: '#C0C0C0',
        bronze: '#CD7F32'
    };

    return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill={colors[color]}>
            <path d="M12 2C13.1 2 14 2.9 14 4H18C18.55 4 19 4.45 19 5V6C19 8.21 17.21 10 15 10H14.83C14.42 11.17 13.31 12 12 12C10.69 12 9.58 11.17 9.17 10H9C6.79 10 5 8.21 5 6V5C5 4.45 5.45 4 6 4H10C10 2.9 10.9 2 12 2ZM6 6V6C6 7.66 7.34 9 9 9H9.17C9.06 8.69 9 8.35 9 8V6H6ZM15 6H15V8C15 8.35 14.94 8.69 14.83 9H15C16.66 9 18 7.66 18 6V6H15ZM12 4C11.45 4 11 4.45 11 5V8C11 8.55 11.45 9 12 9C12.55 9 13 8.55 13 8V5C13 4.45 12.55 4 12 4ZM9 13H15V15H14V22H10V15H9V13Z" />
        </svg>
    );
};

function Achievements() {
    // 2025 Achievements data
    const achievements2025 = [
        {
            league: 'SOCA League',
            achievement: 'Reached Eliminator',
            subtitle: 'Semifinalists',
            color: 'blue',
            logo: socaLogo,
            trophyColor: 'silver'
        },
        {
            league: 'RPL League',
            achievement: 'Semifinalists',
            subtitle: 'RPL 2025',
            color: 'red',
            logo: rplLogo,
            trophyColor: 'silver'
        },
        {
            league: 'WCL Elite Division',
            achievement: 'Runners-Up',
            subtitle: 'Finalists',
            color: 'green',
            logo: wclLogo,
            trophyColor: 'bronze'
        },
        {
            league: 'Gladiator Cup',
            achievement: 'Runners-Up',
            subtitle: 'Finalists',
            color: 'purple',
            logo: gladiatorLogo,
            trophyColor: 'bronze'
        }
    ];

    // 2024 Achievements data
    const achievements2024 = [
        {
            league: "Braveheart's Cricket League",
            achievement: 'Winners',
            subtitle: 'BCC 2024',
            color: 'orange',
            logo: null,
            trophyColor: 'gold'
        },
        {
            league: 'Royal Cricket League',
            achievement: "Runner's Up",
            subtitle: 'RCC 2024',
            color: 'teal',
            logo: null,
            trophyColor: 'bronze'
        }
    ];

    const AchievementCard = ({ achievement, showLogo = true }) => (
        <div className={`achievement-card ${achievement.color}`}>
            <div className="achievement-badge">
                {achievement.league}
            </div>
            {showLogo && (
                <div className="achievement-logo">
                    {achievement.logo ? (
                        <img src={achievement.logo} alt={achievement.league} />
                    ) : (
                        '🏏'
                    )}
                </div>
            )}
            <div className="achievement-league-name">{achievement.achievement}</div>
            <div className="achievement-subtitle">{achievement.subtitle}</div>
            <div className="achievement-trophy">
                <Trophy color={achievement.trophyColor} />
            </div>
        </div>
    );

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1 className="text-display">Achievements</h1>
                    <p className="page-hero-subtitle">
                        Celebrating our competitive success across multiple leagues.
                    </p>
                </div>
            </section>

            {/* 2025 Season */}
            <section className="achievements-section">
                <div className="container">
                    <div className="achievements-year-header">
                        <h2>Brothers XI 2025 Season Achievements</h2>
                        <p>4 Leagues, 4 Success Stories</p>
                    </div>
                    <div className="achievements-grid">
                        {achievements2025.map((achievement, index) => (
                            <AchievementCard key={index} achievement={achievement} showLogo={true} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 2024 Season */}
            <section className="achievements-section year-2024">
                <div className="container">
                    <div className="achievements-year-header">
                        <h2>Brothers XI 2024 Season Achievements</h2>
                        <p>2 Leagues, 2 Success Stories</p>
                    </div>
                    <div className="achievements-grid">
                        {achievements2024.map((achievement, index) => (
                            <AchievementCard key={index} achievement={achievement} showLogo={false} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Achievements;
