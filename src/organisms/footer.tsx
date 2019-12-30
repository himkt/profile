import * as React from 'react';


class Footer extends React.Component<any> {

  render () {
    return (
      <footer className="footer" style={{backgroundColor: 'hsl(0, 0%, 95%)'}}>
        <div className="content has-text-centered">
          <p><strong>himkt.github.io</strong> by <a href="https://twitter.com/himkt">himkt</a>. 2017-2019</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
