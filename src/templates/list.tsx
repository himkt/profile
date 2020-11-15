import * as React from 'react';


export interface Props {
  title: string;
  items: Array<JSX.Element>;
}


class List extends React.Component<Props, {}> {

  render () {
    var key = 1;
    const items = [];
    for (const item of this.props.items) {
      items.push(<li key={key}>{item}</li>);
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
                <h1 className="title is-2">{this.props.title}</h1>
                <ol>{items}</ol>
              </div>
            </div>
            <div className="column"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default List;
