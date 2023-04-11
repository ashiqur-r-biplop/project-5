import React from "react";
import OthersHeader from "../OthersHeader/OthersHeader";

const Blogs = () => {
  return (
    <div>
      <OthersHeader>Blogs Page</OthersHeader>
      <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
        <h1 className="md:my-10 ms-5 text-4xl font-bold text-center ">
          frequently <span className="title-text">asked question</span>
        </h1>
        <div className="grid gap-4 md:grid-cols-2 grid-cols-1 lg:my-20 md:my-10 ms-5">
          <div className="border p-4">
            <h3 className="text-xl font-semibold">
              when should you context API ?
            </h3>
            <p>
              -Looking at contacts is a hook to react-router-dom.Props drilling
              can be done very easily with it.
            </p>
          </div>

          <div className="border p-4">
            <h3 className="text-xl font-semibold">What is Custom Hook ?</h3>
            <p>
              -In React, a custom hook is a reusable piece of logic that
              encapsulates stateful and/or side-effectful behavior that can be
              shared across multiple components..
            </p>
          </div>
          <div className="border p-4">
            <h3 className="text-xl font-semibold">What is useRef ?</h3>
            <p>
              -In React, the useRef hook is used to create a mutable reference
              that can be attached to a DOM node or any other mutable value.
            </p>
          </div>
          <div className="border p-4">
            <h3 className="text-xl font-semibold">What is useMemo ?</h3>
            <p>
              -In React, the useMemo hook is used to memoize a value and avoid
              unnecessary recalculations. It takes a function and an array of
              dependencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
