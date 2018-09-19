import React from "react";
import Helmet from "react-helmet";
import { random, isEmpty } from "lodash";
import Link from "gatsby-link";

import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

import { bgSidebar } from "../../data";

const NavLink = props => {
  if (!props.test) {
    return (
      <Link className="btn btn-light" to={`/${props.url}`}>
        {props.text}
      </Link>
    );
  }
  return <span className="btn btn-light disabled">{props.text}</span>;
};

class Index extends React.Component {
  render() {
    const { data, pathContext } = this.props;
    const { group, index, first, last, pageCount } = pathContext;
    const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();
    const sideBg = bgSidebar[random(bgSidebar.length - 1)];
    return (
      <div className="master">
        <Helmet title={config.siteTitle}/>
        <main className="inner">
          {!isEmpty(group) && <PostListing postEdges={group} />}
          <div className="pagination">
            <NavLink test={first} url={previousUrl} text="Trang Trước" />
            <NavLink test={last} url={nextUrl} text="Trang Sau" />
          </div>
        </main>
        <div className="aside" style={{ backgroundImage: `url(${sideBg})` }} />
      </div>
    );
  }
}

export default Index;
