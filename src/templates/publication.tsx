import * as React from 'react';


export interface Props {
  papers: Array<any>;
}


class Publication extends React.Component<Props, any> {

  render () {
    var key = 1;
    const publications = [];
    for (const paper of this.props.papers) {
      publications.push(<li key={key}>{paper}</li>);
      key++;
    }

    return (
      <section style={{padding: 3 + 'rem'}}>
        <div className="container">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-8 is-centered">
              <div className="content">
                <hr className="hr" style={{marginBottom: 0}} />
                <h1 className="title is-2">Publication</h1>
                <ol>{publications}</ol>
              </div>
            </div>
            <div className="column"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Publication;
