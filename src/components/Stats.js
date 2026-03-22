import { stats } from '../data/homepage';
import styles from './Stats.module.css';

export default function Stats() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.number}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>
                {stat.label.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < stat.label.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
