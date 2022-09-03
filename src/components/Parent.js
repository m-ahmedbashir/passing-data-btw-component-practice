import React, { useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [data, setData] = useState("");
  const childToParent = (childData) => {
    setData(childData);
  };
  return (
    <div>
      <div>{data}</div>
      <Child childToParent={childToParent} />
    </div>
  );
};

export default Parent;

// ----------------------------------
// Sending Data from parent to child
// ----------------------------------

// import { Button } from "react-bootstrap";
// import React, { useState } from "react";
// import Child from "./Child";
// const Parent = () => {
//   const [data, setData] = useState("");

//   const parentToChild = () => {
//     setData("I am the data passed from parent to child");
//   };
//   return (
//     <div>
//       <Child parentToChild={data} />
//       <div>
//         <Button className="primary" onClick={() => parentToChild()}>
//           {" "}
//           I am button in Parent
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Parent;
