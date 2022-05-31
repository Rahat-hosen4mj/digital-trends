import React from "react";

const Blogs = () => {
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 px-2">
    <div className="px-3 mx-3 mt-12">
    <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-8">
              What is the  Purpose of Context API ..?
            </h2>
            <p className="text-zinc-700 mx-8">
              <b>Answer : </b>The Context API is a React structure that enables
              you to exchange unique details and assists in solving
              prop-drilling from all levels of your application. <br />
              The Context API is a component structure provided by the React
              framework, which enables us to share specific forms of data across
              all levels of the application. It,s aimed at solving the problem
              of prop drilling <br />
              Before the Context API, we could use a module to solve this, which
              led to the increasing popularity of state management libraries
              like Redux. <br />
              Before the Context API, we could use a module to solve this, which
              led to the increasing popularity of state management libraries
              like Redux. The Context API has actually always been there but was
              considered experimental.
            </p>
    </div>
    <div className="ml-5 mt-5 p-5">
    <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-6 text-center">
            What is semantic tag ?
            </h2>
            <p className="text-zinc-800 mx-8">
              Semantic tags clearly define the purpose of the HTML element. It
              also describes the type of content that the element should
              contain. For example, One of the most important features of HTML5
              is its semantics. Semantic HTML refers to syntax that makes the
              HTML more comprehensible by better defining the different sections
              and layout of web pages. <b>header</b> <b>footer,</b>{" "}
              <b>footer,</b> <b>article</b> are considered semantic elements as
              they clearly describe their purpose and the type of content they
              should enclose. <br />
              One of the most important features of HTML5 is its semantics.
              Semantic HTML refers to syntax that makes the HTML more
              comprehensible by better defining the different sections and
              layout of web pages. Semantic tags also help search engines to
              parse the webpage correctly and find accurate information. Thus,
              helping search engines to correctly index the page.
            </p>
    </div>
  </div>
  );
};

export default Blogs;
