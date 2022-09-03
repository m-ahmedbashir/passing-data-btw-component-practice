import { Button } from "react-bootstrap";
import React from "react";

const Child = ({ childToParent }) => {
  const data = "This is the data from the child to the parent";
  return (
    <div>
      <Button className="danger" onClick={() => childToParent(data)}>
        I am button in the child component
      </Button>
    </div>
  );
};

export default Child;

// ----------------------------------
// Getting data from parent to child
// ----------------------------------
// import React from "react";

// const Child = ({ parentToChild }) => {
//   return <>{parentToChild}</>;
// };

// export default Child;
