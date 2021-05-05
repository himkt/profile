import * as React from 'react';


const publication = {
  marginRight: 10 + 'px'
}

const myhero = {
  background: '' +
    'repeating-linear-gradient(transparent 0%,transparent 25%,#a7dcff 25%,#a7dcff  37.5%), ' +
    'linear-gradient(#24a5f9,#034792), '  +
    'linear-gradient(90deg,transparent 0%,transparent 50%,#b4cac1 50%,#b4cad9 80%), ' +
    'radial-gradient(circle, #0277BD 10%, #0277BD 70%)',
  backgroundBlendMode: 'screen'
}


class Hero extends React.Component<any> {
  render () {
    return (
      <section className="myhero hero is-primary is-medium is-bold" style={myhero}>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column"></div>
              <div className="column is-6">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">Makoto Hiramatsu</p>
                  </header>
                  <div className="card-content kokokara">
                    <div className="content">Research Engineer at Cookpad. I received the bachelor's degree in library and information science and
                    the master's degree in informatics from University of Tsukuba (2017 and 2019, respectively).</div>
                    <p className="title is-5" style={{color: 'hsl(0, 0%, 29%)'}}>Research Topics:</p>
                    <div className="content">Natural Language Processing, Machine Learning</div>
                    <p className="title is-5" style={{color: 'hsl(0, 0%, 29%)'}}>Social Accounts:</p>
                    <div className="content">
                      <span style={publication}><a href="https://twitter.com/himkt" target="_brank"><i className="fab fa-lg fa-twitter"></i></a></span>
                      <span style={publication}><a href="https://www.instagram.com/himamako/" target="_brank"><i className="fab fa-lg fa-instagram"></i></a></span>
                      <span style={publication}><a href="https://github.com/himkt" target="_brank"><i className="fab fa-lg fa-github"></i></a></span>
                      <span style={publication}><a href="https://speakerdeck.com/himkt" target="_brank"><i className="fab fa-lg fa-speaker-deck"></i></a></span>
                      <span style={publication}><a href="https://himkt.medium.com" target="_brank"><i className="fab fa-lg fa-medium"></i></a></span>
                      <span style={publication}><a href="http://qiita.com/klis" target="_brank"><i className="fas fa-lg fa-blog"></i></a></span>
                      <span style={publication}><a href="http://note.com/himkt" target="_brank"><i className="fas fa-lg fa-sticky-note"></i></a></span>
                      <span style={publication}><a href="https://scholar.google.com/citations?user=48jLQIwAAAAJ&hl=en&oi=ao" target="_brank"><i className="fas fa-lg fa-graduation-cap"></i></a></span>
                      <span style={publication}><a href="http://facebook.com/makoto.hiramatsu.001" target="_brank"><i className="fab fa-lg fa-facebook"></i></a></span>
                    </div>
                    <p className="title is-5" style={{color: 'hsl(0, 0%, 29%)'}}>Links:</p>
                    <div className="content">
                      <span style={publication}><a href="http://himkt.github.io/profile/resume.pdf" target="_brank"><i className="fas fa-lg fa-address-card"></i> Resume</a></span>
                      <span style={publication}><a href="http://himkt.github.io/interest" target="_brank"><i className="fas fa-lg fa-paperclip"></i> Interest</a></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
