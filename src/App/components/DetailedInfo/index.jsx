import React from "react";
import CommonInfo from "./CommonInfo";
import MyOpinion from "./MyOpinion";

import "./DetailedInfo.css";

export default class DetailedInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isOpen: nextProps.selectedFilmId !== null ? true : false
    })
  }

  render() {
    const noneOrBlock = this.state.isOpen === true ? { display: 'block' } : { display: 'none' };

    return (
      <aside className="details" style={noneOrBlock}>
        <CommonInfo film={this.props.film} lang={this.props.lang}/>
        <MyOpinion film={this.props.film} lang={this.props.lang}/>
      </aside>
    );
  }
}
