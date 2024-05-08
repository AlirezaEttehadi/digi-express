import DGXLogo from "./components/DGXLogo";
import DGXDropdown from "./components/DGXDropdown";
import DGXContainer from "./components/DGXContainer";
import { mockData } from "./mock/drop-items";
import "./App.css";

import "./fonts/font.css";
import { useState } from "react";
import { PlaceHolder } from "./mock/constant";

function App() {
  const [result, setResult] = useState();

  const handleChange = (key) => {
    setResult(mockData.find((item) => item.key === key));
  };
  return (
    <div
      id="app"
      className="flex"
      style={{ backgroundImage: 'url("/assets/pixel-arts/pixel-wall.png")' }}
    >
      <DGXContainer className="top">
        <DGXLogo className="flex" />
        <div className="mt">
          <DGXDropdown
            options={mockData}
            value={result?.key}
            onChange={handleChange}
          >
            {(item) => (
              <div className="item size text">
                {item.name} {item.brand}
                <img
                  style={{
                    width: "24px",
                    height: "24px",
                    objectFit: "contain",
                  }}
                  alt="Express logo"
                  src={item.img}
                />
              </div>
            )}
          </DGXDropdown>
        </div>
        <div className="result">{result?.name || PlaceHolder}</div>
      </DGXContainer>
    </div>
  );
}

export default App;
