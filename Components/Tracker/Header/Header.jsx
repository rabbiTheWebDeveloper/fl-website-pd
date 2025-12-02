import Image from 'next/image';
import style from './style.module.css';
import logo from './logo.png';
import { Badge } from '../ui/badge';
import { MapIcon } from '../ui/icons';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <h1 className={style.logo}>
          <Image src={logo} alt="Funnel Liner" />
        </h1>
        <Badge className={style.badge}>
          <MapIcon className={style.icon} />
          <span>Tracking</span>
        </Badge>
      </div>
    </header>
  );
};
