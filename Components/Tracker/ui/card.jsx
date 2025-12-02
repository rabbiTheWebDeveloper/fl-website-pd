import * as React from 'react';
import style from './style.module.css';

const TitleWrapper = React.forwardRef(({ className, ...props }, ref) => <div ref={ref} className={`${style.titleWrapper} custom-titleWrapper ${className}`} {...props} />);
TitleWrapper.displayName = 'TitleWrapper';

const Title = React.forwardRef(({ className, ...props }, ref) => <div ref={ref} className={`${style.title} custom-title ${className}`} {...props} />);
Title.displayName = 'Title';

const CardButton = React.forwardRef(({ className, ...props }, ref) => <button ref={ref} className={`${style.cardButton} custom-tableButton ${className}`} {...props} />);
CardButton.displayName = 'CardButton';

const Card = React.forwardRef(({ className, ...props }, ref) => <div ref={ref} className={`${style.card} ${className}`} {...props} />);
Card.displayName = 'Card';

const CardHeader = React.forwardRef(({ className, color, ...props }, ref) => <div ref={ref} style={{ backgroundColor: color }} className={`${style.cardHeader} ${className}`} {...props} />);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef(({ className, ...props }, ref) => <h3 ref={ref} className={style.cardTitle} {...props} />);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef(({ className, ...props }, ref) => <p ref={ref} className={style.cardDescription} {...props} />);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef(({ className, color, ...props }, ref) => <div className={`${style.cardContent} ${className}`} style={{ color }} ref={ref} {...props} />);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef(({ className, row, ...props }, ref) => <div ref={ref} className={`${style.cardFooter} ${row ? style.row : ''}`} {...props} />);
CardFooter.displayName = 'CardFooter';

const CardGroup = React.forwardRef(({ className, ...props }, ref) => <div ref={ref} className={style.cardGroup} {...props} />);
CardGroup.displayName = 'CardGroup';

export { Title, TitleWrapper, CardButton, Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
