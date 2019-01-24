import React from 'react';

import BrowserDtector from '../dist/lib/browser-dtector';

class BrowserDtectorComponent extends React.PureComponent {
  render() {
    const browser = new BrowserDtector(window.navigator.userAgent);
    const userAgent = browser.parseUserAgent();
    const isKnownBrowser = userAgent.name !== 'Unknown';

    return (
      <React.Fragment>
        <div className="content justify-center browser-dtector">
          {isKnownBrowser && (
            <React.Fragment>
              <p className="text">
                You are viewing this page in -
                <span className="browser-name">{'{'}{userAgent.name}{'}'}</span>
              </p>
              <p className="sub-text">{userAgent.platform}, v{userAgent.version}</p>
            </React.Fragment>
          )}
          {!isKnownBrowser && (
            <p className="text"><span className="browser-name">{'{ Unknown Browser }'}</span></p>
          )}
        </div>
        <footer className="footer">BrowserDtector: v{browser.__VERSION__}</footer>
      </React.Fragment>
    );
  }
}

export default BrowserDtectorComponent;
