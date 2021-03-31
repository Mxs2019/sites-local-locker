"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    const { name, address, geomodifier, description, hours } = pageData;

    const geomodifierMerged = pageData.geomodifier
      ? pageData.geomodifier
      : pageData.address.city;

    return (
      <div>
        <div className="flex min-h-screen">
          <div className="w-12 bg-green-500 min-h-screen"></div>
          <div className="w-full">
            <div></div>
            <div className="container">
              <div className="border-b pb-2 mb-6">
                <a href="/" className="flex items-center">
                  <div>
                    <svg
                      width="6"
                      height="11"
                      viewBox="0 0 6 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M.117 5.14a.337.337 0 000 .499l4.307 4.336c.117.146.351.146.498 0l.557-.586a.337.337 0 000-.498L2.02 5.375 5.48 1.889c.146-.147.146-.381 0-.498L4.922.805c-.147-.147-.381-.147-.498 0L.117 5.14z"
                        fill="#00173C"
                      ></path>
                    </svg>
                  </div>
                  <div className="">&nbsp;Back</div>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h1>
                    {name} {geomodifierMerged}
                  </h1>
                  <div className="mb-4">
                    <h3>Address:</h3>
                    <p>
                      {address.line1}, {address.city}, {address.region}{" "}
                      {address.postalCode}
                    </p>
                  </div>
                  {description && (
                    <div className="mb-4">
                      <h3>Details:</h3>
                      <p>{description}</p>
                    </div>
                  )}
                  <div className="mb-4">
                    <h3>Hours:</h3>
                    <p></p>
                  </div>
                </div>
                <div>Photos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector("#react-app");
ReactDOM.render(e(LikeButton), domContainer);
