import * as React from 'react';
import style from './style.module.css';

const TimelineWrapper = React.forwardRef(({ className, ...props }, ref) => <div ref={ref} className={`${style.timelineWrapper} custom-timelineWrapper ${className}`} {...props} />);
TimelineWrapper.displayName = 'TimelineWrapper';

const Timeline = React.forwardRef(({ className, ...props }, ref) => <div ref={ref} className={`${style.timeline} custom-timeline ${className}`} {...props} />);
Timeline.displayName = 'Timeline';

const Timestamp = React.forwardRef(({ className, ...props }, ref) => <div ref={ref} className={`${style.timestamp} custom-timestamp ${className}`} {...props} />);
Timestamp.displayName = 'Timestamp';

const TimelineDivider = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={`${style.timelineDivider} custom-timelineDivider ${className}`} {...props}>
    <div className={style.dividerLines}>
      <div className={style.dividerInner}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.lineMain} />
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
    </div>
    <div className={style.divider}></div>
  </div>
));
TimelineDivider.displayName = 'TimelineDivider';

const TimelineItemBase = React.forwardRef(({ className, ...props }, ref) => <div ref={ref} className={`${style.timelineItemBase} custom-timelineItemBase ${className}`} {...props} />);
TimelineItemBase.displayName = 'TimelineItemBase';

const TimelineItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={`${style.timelineItem} custom-timelineItem ${className}`} {...props}>
    <TimelineDivider />
    <div className={style.timelineItemContent}>
      <TimelineItemBase>{children}</TimelineItemBase>
    </div>
  </div>
));
TimelineItem.displayName = 'TimelineItem';

export { TimelineWrapper, Timeline, Timestamp, TimelineItem };
