'use client';

import { useEffect, useState } from 'react';

type Tournament = {
  name: string;
  subtitle: string;
  timeLabel: string;
  buyIn: string;
  prize: string;
  players: string;
  targetTime: string;
  accent: string;
  badge: string;
};

function formatCountdown(target: string) {
  const now = new Date().getTime();
  const targetDate = new Date(target).getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    return 'Live now';
  }

  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
    2,
    '0'
  )}:${String(seconds).padStart(2, '0')}`;
}

function useCountdown(target: string) {
  const [time, setTime] = useState(formatCountdown(target));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatCountdown(target));
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  return time;
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        padding: '12px 14px',
        borderRadius: '16px',
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        style={{
          fontSize: '11px',
          color: '#9f8b92',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: '6px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: '15px',
          color: '#fff4f7',
          fontWeight: 600,
        }}
      >
        {value}
      </div>
    </div>
  );
}

function TournamentCard({ tournament }: { tournament: Tournament }) {
  const countdown = useCountdown(tournament.targetTime);

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '24px',
        padding: '24px',
        background:
          'linear-gradient(180deg, rgba(32,8,16,0.95) 0%, rgba(14,8,12,0.98) 100%)',
        border: `1px solid ${tournament.accent}`,
        boxShadow: `0 0 30px ${tournament.accent}`,
        overflow: 'hidden',
        minHeight: '320px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at top right, ${tournament.accent} 0%, transparent 45%)`,
          opacity: 0.18,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignSelf: 'flex-start',
            padding: '6px 12px',
            borderRadius: '999px',
            border: `1px solid ${tournament.accent}`,
            background: 'rgba(255,255,255,0.03)',
            color: '#f7d8df',
            fontSize: '12px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          {tournament.badge}
        </div>

        <h3
          style={{
            margin: 0,
            fontSize: '28px',
            fontWeight: 700,
            color: '#fff4f7',
            letterSpacing: '-0.03em',
          }}
        >
          {tournament.name}
        </h3>

        <p
          style={{
            marginTop: '10px',
            marginBottom: '22px',
            color: '#cbb8bf',
            lineHeight: 1.5,
            fontSize: '15px',
          }}
        >
          {tournament.subtitle}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '14px',
            marginBottom: '22px',
          }}
        >
          <InfoItem label="Starts" value={tournament.timeLabel} />
          <InfoItem label="Buy-in" value={tournament.buyIn} />
          <InfoItem label="Prize Pool" value={tournament.prize} />
          <InfoItem label="Players" value={tournament.players} />
        </div>

        <div
          style={{
            marginTop: 'auto',
            padding: '16px',
            borderRadius: '18px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div
            style={{
              fontSize: '12px',
              color: '#a8969d',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '8px',
            }}
          >
            Starts in
          </div>

          <div
            style={{
              fontSize: '28px',
              fontWeight: 700,
              color: countdown === 'Live now' ? '#ffffff' : '#ffd7e2',
              letterSpacing: '0.08em',
            }}
          >
            {countdown}
          </div>
        </div>

        <button
          style={{
            marginTop: '18px',
            height: '50px',
            border: 'none',
            borderRadius: '16px',
            background: `linear-gradient(135deg, ${tournament.accent}, #2d0f1b)`,
            color: 'white',
            fontSize: '15px',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: `0 10px 30px ${tournament.accent}`,
          }}
        >
          Join Tournament
        </button>
      </div>
    </div>
  );
}

function FeaturePill({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        minWidth: '130px',
        padding: '14px 16px',
        borderRadius: '18px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div
        style={{
          fontSize: '11px',
          color: '#a89299',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: '6px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: '16px',
          fontWeight: 700,
          color: '#fff3f6',
        }}
      >
        {value}
      </div>
    </div>
  );
}

function GrandTournamentCard() {
  const countdown = useCountdown('2026-04-12T20:00:00');

  return (
    <section
      style={{
        position: 'relative',
        marginTop: '40px',
        borderRadius: '32px',
        padding: '32px',
        background:
          'linear-gradient(135deg, rgba(30,10,16,0.98) 0%, rgba(10,8,12,0.98) 100%)',
        border: '1px solid rgba(178, 62, 92, 0.45)',
        boxShadow: '0 0 50px rgba(120, 20, 50, 0.35)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 15% 20%, rgba(170, 40, 80, 0.28), transparent 32%), radial-gradient(circle at 85% 80%, rgba(102, 34, 68, 0.18), transparent 30%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '28px',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              padding: '6px 12px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.04)',
              color: '#f2c9d4',
              fontSize: '12px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '18px',
            }}
          >
            Featured Grand Tournament
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: 'clamp(34px, 5vw, 58px)',
              lineHeight: 1,
              color: '#fff4f7',
              letterSpacing: '-0.04em',
            }}
          >
            Sunday Grand
          </h2>

          <p
            style={{
              maxWidth: '620px',
              color: '#c7b2b9',
              fontSize: '17px',
              lineHeight: 1.6,
              marginTop: '18px',
              marginBottom: '26px',
            }}
          >
            A higher table, a sharper field, and a bigger finish. Built for players
            who want the week to end with something heavier than a casual sit-in.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
            }}
          >
            <FeaturePill label="Buy-in" value="$25" />
            <FeaturePill label="Prize Pool" value="$2,500" />
            <FeaturePill label="Seats" value="74 / 150" />
            <FeaturePill label="Starts" value="20:00" />
          </div>
        </div>

        <div
          style={{
            borderRadius: '24px',
            padding: '24px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '12px',
                color: '#a89299',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '10px',
              }}
            >
              Starts in
            </div>

            <div
              style={{
                fontSize: '40px',
                fontWeight: 800,
                color: '#ffe4ea',
                letterSpacing: '0.08em',
                marginBottom: '22px',
              }}
            >
              {countdown}
            </div>

            <div
              style={{
                height: '1px',
                background: 'rgba(255,255,255,0.08)',
                marginBottom: '18px',
              }}
            />

            <div
              style={{
                color: '#c7b2b9',
                lineHeight: 1.6,
                fontSize: '15px',
              }}
            >
              Limited-entry major with a heavier prize pool and cleaner structure for
              players who want a proper headline event.
            </div>
          </div>

          <button
            style={{
              marginTop: '24px',
              height: '54px',
              border: 'none',
              borderRadius: '18px',
              background: 'linear-gradient(135deg, #8f2744, #31101a)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '15px',
              cursor: 'pointer',
              boxShadow: '0 14px 40px rgba(143, 39, 68, 0.35)',
            }}
          >
            Reserve Your Seat
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const tournaments: Tournament[] = [
    {
      name: 'Morning Blitz',
      subtitle: 'A fast daily warm-up with low friction and quick pressure.',
      timeLabel: '09:00',
      buyIn: '$2',
      prize: '$50',
      players: '18 / 50',
      targetTime: '2026-04-08T09:00:00',
      accent: 'rgba(180, 72, 102, 0.42)',
      badge: 'Fast Entry',
    },
    {
      name: 'Evening Sprint',
      subtitle: 'The most active daily table with steady traffic and cleaner pacing.',
      timeLabel: '18:00',
      buyIn: '$5',
      prize: '$150',
      players: '34 / 80',
      targetTime: '2026-04-07T18:00:00',
      accent: 'rgba(140, 58, 92, 0.42)',
      badge: 'Most Active',
    },
    {
      name: 'Night Stack',
      subtitle: 'A darker late-session grind for players who like deeper momentum.',
      timeLabel: '23:00',
      buyIn: '$10',
      prize: '$300',
      players: '12 / 40',
      targetTime: '2026-04-07T23:00:00',
      accent: 'rgba(110, 46, 88, 0.46)',
      badge: 'Late Grind',
    },
  ];

  return (
    <main
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at top, rgba(90,18,44,0.24), transparent 28%), linear-gradient(180deg, #050507 0%, #09070a 35%, #050506 100%)',
        color: 'white',
      }}
    >
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '40px 20px 80px',
        }}
      >
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            padding: '16px 0 34px',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '13px',
                color: '#b59aa3',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                marginBottom: '10px',
              }}
            >
              RoyalStack Poker
            </div>

            <div
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#fff4f7',
                letterSpacing: '-0.03em',
              }}
            >
              A sharper kind of poker
            </div>
          </div>

          <button
            style={{
              height: '48px',
              padding: '0 20px',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.04)',
              color: '#fff3f6',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Enter Lobby
          </button>
        </header>

        <section
          style={{
            padding: '50px 0 20px',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '26px',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                padding: '6px 12px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)',
                color: '#e7c5cf',
                fontSize: '12px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '18px',
              }}
            >
              Daily rhythm. Grand moments.
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: 'clamp(46px, 8vw, 84px)',
                lineHeight: 0.95,
                letterSpacing: '-0.05em',
                color: '#fff4f7',
                maxWidth: '780px',
              }}
            >
              Built for tournaments, not noise.
            </h1>

            <p
              style={{
                marginTop: '22px',
                maxWidth: '640px',
                color: '#c4b0b7',
                fontSize: '18px',
                lineHeight: 1.7,
              }}
            >
              Clean daily poker tournaments, heavier headline events, and a darker
              signature style that feels premium without drowning the screen in chaos.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '14px',
                flexWrap: 'wrap',
                marginTop: '28px',
              }}
            >
              <button
                style={{
                  height: '54px',
                  padding: '0 24px',
                  border: 'none',
                  borderRadius: '18px',
                  background: 'linear-gradient(135deg, #8f2744, #2b0e17)',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '15px',
                  cursor: 'pointer',
                  boxShadow: '0 14px 40px rgba(143,39,68,0.35)',
                }}
              >
                Join Today’s Tournaments
              </button>

              <button
                style={{
                  height: '54px',
                  padding: '0 24px',
                  borderRadius: '18px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  color: '#fff4f7',
                  fontWeight: 600,
                  fontSize: '15px',
                  cursor: 'pointer',
                }}
              >
                View Schedule
              </button>
            </div>
          </div>

          <div
            style={{
              borderRadius: '28px',
              padding: '26px',
              background:
                'linear-gradient(180deg, rgba(28,10,16,0.95) 0%, rgba(12,8,12,0.98) 100%)',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 0 40px rgba(100, 20, 40, 0.18)',
            }}
          >
            <div
              style={{
                fontSize: '12px',
                color: '#aa9199',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '10px',
              }}
            >
              Today at a glance
            </div>

            <div
              style={{
                fontSize: '34px',
                fontWeight: 800,
                color: '#fff2f5',
                letterSpacing: '-0.04em',
                marginBottom: '18px',
              }}
            >
              3 Daily Tournaments
            </div>

            <div
              style={{
                display: 'grid',
                gap: '12px',
              }}
            >
              {[
                ['Morning Blitz', '09:00'],
                ['Evening Sprint', '18:00'],
                ['Night Stack', '23:00'],
              ].map(([name, time]) => (
                <div
                  key={name}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '14px 16px',
                    borderRadius: '16px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: '#fff3f6',
                        fontWeight: 600,
                        marginBottom: '4px',
                      }}
                    >
                      {name}
                    </div>
                    <div
                      style={{
                        color: '#a9939a',
                        fontSize: '13px',
                      }}
                    >
                      Daily tournament
                    </div>
                  </div>

                  <div
                    style={{
                      color: '#f0c5d1',
                      fontWeight: 700,
                    }}
                  >
                    {time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GrandTournamentCard />

        <section style={{ marginTop: '60px' }}>
          <div
            style={{
              marginBottom: '22px',
            }}
          >
            <div
              style={{
                fontSize: '13px',
                color: '#ad949b',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '10px',
              }}
            >
              Daily Tournaments
            </div>

            <h2
              style={{
                margin: 0,
                fontSize: 'clamp(30px, 5vw, 50px)',
                color: '#fff4f7',
                letterSpacing: '-0.04em',
              }}
            >
              Three daily battles. One steady rhythm.
            </h2>

            <p
              style={{
                maxWidth: '720px',
                color: '#c2afb5',
                fontSize: '17px',
                lineHeight: 1.6,
                marginTop: '14px',
              }}
            >
              Clear, regular, fast to understand, and always on the clock.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}
          >
            {tournaments.map((tournament) => (
              <TournamentCard key={tournament.name} tournament={tournament} />
            ))}
          </div>
        </section>

        <section
          style={{
            marginTop: '64px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
          }}
        >
          <div
            style={{
              borderRadius: '26px',
              padding: '28px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div
              style={{
                fontSize: '13px',
                color: '#ad949b',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '10px',
              }}
            >
              Monthly Ranking
            </div>

            <h3
              style={{
                margin: 0,
                fontSize: '30px',
                color: '#fff4f7',
                letterSpacing: '-0.03em',
              }}
            >
              Top Players
            </h3>

            <div
              style={{
                marginTop: '22px',
                display: 'grid',
                gap: '12px',
              }}
            >
              {[
                ['#1', 'Seat Open', '0 pts'],
                ['#2', 'Seat Open', '0 pts'],
                ['#3', 'Seat Open', '0 pts'],
              ].map(([place, name, points]) => (
                <div
                  key={place}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '14px 16px',
                    borderRadius: '16px',
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '12px',
                        display: 'grid',
                        placeItems: 'center',
                        background: 'rgba(143,39,68,0.18)',
                        color: '#ffdbe4',
                        fontWeight: 700,
                      }}
                    >
                      {place}
                    </div>
                    <div style={{ color: '#fff3f6', fontWeight: 600 }}>{name}</div>
                  </div>

                  <div style={{ color: '#c8b3ba' }}>{points}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              borderRadius: '26px',
              padding: '28px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div
              style={{
                fontSize: '13px',
                color: '#ad949b',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '10px',
              }}
            >
              Monthly Crown
            </div>

            <h3
              style={{
                margin: 0,
                fontSize: '30px',
                color: '#fff4f7',
                letterSpacing: '-0.03em',
              }}
            >
              Grand Finish
            </h3>

            <p
              style={{
                marginTop: '14px',
                color: '#c5b0b7',
                lineHeight: 1.7,
                fontSize: '16px',
              }}
            >
              The month closes with one larger final event for the strongest regulars
              and the sharpest late risers.
            </p>

            <div
              style={{
                marginTop: '20px',
                display: 'grid',
                gap: '12px',
              }}
            >
              <InfoItem label="Prize Pool" value="$5,000" />
              <InfoItem label="Entry Type" value="Qualified + Direct Buy-in" />
              <InfoItem label="Status" value="Coming Soon" />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
