import React from "react";
import format from "date-fns/format";

export default class JobsPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;

    return (
      <div className="animate__animated animate__fadeIn">
        <div className="max-w-5xl mx-auto pt-20 pb-10 px-2">

          <div className="mb-10">
            <h1 className="text-2xl lg:text-4xl font-semibold normal-case">{ entry.getIn(["data", "title"])}</h1>
            <ul className="font-semibold">
              <li>Category: <span className="normal-case font-normal">{ entry.getIn(["data", "category"])}</span></li>
              <li>Type: <span className="normal-case font-normal">{ entry.getIn(["data", "jobType"])}</span></li>
              <li>Location: <span className="normal-case font-normal">{ entry.getIn(["data", "location"])}</span></li>
              <li>Salary: <span className="normal-case font-normal">{ entry.getIn(["data", "salary"])}</span></li>
              <li>Note: <span className="normal-case font-normal">{ entry.getIn(["data", "note"])}</span></li>
            </ul>
          </div>

          <div className="normal-case markdown">
            { widgetFor("body") }
          </div>

        </div>
      </div>
    );
  }
}
