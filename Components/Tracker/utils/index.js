export const open = element => {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  const popupWidth = 520;
  const popupHeight = viewportHeight;

  const leftPosition = (viewportWidth - popupWidth) / 2;
  const topPosition = (viewportHeight - popupHeight) / 2 + 50;

  const newWindow = window.open('', 'popupWindow', `width=${popupWidth},height=${popupHeight},left=${leftPosition},top=${topPosition}`);

  if (newWindow) {
    const clonedElement = element.cloneNode(true);

    const stylesheets = Array.from(document.styleSheets)
      .map(stylesheet => {
        try {
          let cssText = Array.from(stylesheet.cssRules || [])
            .map(rule => rule.cssText)
            .join('\n');

          if (!cssText.includes('#timeline')) {
            cssText += '#timeline { max-height: unset !important; }\n';
          }

          if (!cssText.includes('#tracking-card')) {
            cssText += '#tracking-card { height: 100vh; overflow-y: auto; }\n';
          }

          if (!cssText.includes('#tracking-card-header')) {
            cssText += '#tracking-card-header { position: sticky; top: 0; }\n';
          }

          if (!cssText.includes('#logo')) {
            cssText += '#logo { display: block !important; }\n';
          }

          cssText = cssText.replace(/#popout-button\s*{[^}]*}/g, '');

          return cssText;
        } catch (error) {
          console.warn(`Cannot access cssRules from ${stylesheet.href}. Skipping...`);
          return '';
        }
      })
      .join('\n');

    const styleElement = newWindow.document.createElement('style');
    styleElement.appendChild(newWindow.document.createTextNode(stylesheets));
    newWindow.document.head.appendChild(styleElement);

    const titleElement = newWindow.document.createElement('title');
    titleElement.appendChild(newWindow.document.createTextNode('Funnel Liner Tracking'));
    newWindow.document.head.appendChild(titleElement);

    const metaViewport = newWindow.document.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    newWindow.document.head.appendChild(metaViewport);

    const popoutButton = clonedElement.querySelector('#popout-button');
    if (popoutButton) {
      popoutButton.remove();
    }

    newWindow.document.body.appendChild(clonedElement);
  }
};

export function formatMonth(dateString) {
  const date = new Date(dateString);
  const options = { month: "short", day: "2-digit" };
  return new Intl.DateTimeFormat('en-US', options)?.format(date);
}

export function formatTime(dateString) {
  const date = new Date(dateString);
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  return new Intl.DateTimeFormat('en-US', options)?.format(date);
}
