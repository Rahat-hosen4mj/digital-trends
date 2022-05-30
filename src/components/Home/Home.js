import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import ReviewDetail from "../ReviewDetail/ReviewDetail";

const Home = () => {
  let [reviews] = useReviews();
  reviews = reviews.slice(0,3);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-20 py-12 md:flex-row flex-col items-center mt-12">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-4xl sm:text-4xl t mb-4 font-medium text-gray-900">
              Your next Laptop
              <br className="hidden lg:inline-block" />
              <small className="text-purple-600 text-5xl mt-3">
                Your best Laptop
              </small>
            </h1>
            <p className="mb-8 leading-relaxed">
              The MacBook Pro with M1 (from $1,299) is a laptop with an
              unbeatable combo of power and endurance, making it one of the best
              laptops you can buy right now. And I know this because I’ve been
              using this system for months to plow through my workload, and I
              can barely get this machine to stutter no matter what I throw at
              it..
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Live demo
              </button>
            </div>
          </div>
          <div className="w-full lg:max-w-lg lg:w-full md:w-1/2 ">
            <img
              className="object-cover object-center rounded-md"
              alt="laptop"
              src={
                "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              }
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <h1 className="text-4xl pt-12">Customer Review</h1>
        <div className="container px-16 py-8 mx-auto">
          <div className="flex flex-wrap mx-2">
            {reviews.map((review) => (
              <ReviewDetail review={review} key={review.id}></ReviewDetail>
            ))}
          </div>
        </div>
      </section>
      <div className="mb-12">
        <Link to="/review">
          <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            see all review
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
