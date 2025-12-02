import { Time } from './Time';
import style from './style.module.css';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <p>
          ©Copyright All Right Reserved by <span>FunnelLiner™</span>
        </p>

        <p>
          <Time /> - Local Time (Dhaka/Bangladesh)
        </p>
      </div>
    </footer>
  );
};
