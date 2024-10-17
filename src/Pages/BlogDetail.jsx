import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import BlogBG from "../assets/Hbg1.jpg";
import blg from "../assets/hbg2.jpeg";
import Blog from "../Pages/Blog.jsx";

import Image from "../assets/img12.jpeg";

function BlogDetail() {
  const categories = [
    { name: "Web Development", count: 12 },
    { name: "Web Design", count: 22 },
    { name: "UI/UX Design", count: 37 },
    { name: "Graphic Design", count: 42 },
    { name: "Application", count: 14 },
    { name: "Illustration", count: 20 },
    { name: "Branding", count: 10 },
  ];

  return (
    <>
      <div
        className="h-screen flex items-center justify-center text-start bg-cover bg-center"
        style={{
          backgroundImage: `url(${BlogBG})`,
        }}
      >
        {/* Main Container for Content */}
        <div className="flex flex-col items-center justify-start w-full max-w-screen-lg p-4">
          {/* Transparent Buttons to Navigate */}
          <div className="flex space-x-4">
            <Link
              to="/"
              className="bg-transparent text-white px-4 py-2 rounded hover:text-red-500 transition duration-300"
            >
              Home <span className="text-red-500">&gt;</span>
            </Link>
            <Link
              to="/Blog"
              className="bg-transparent text-white px-4 py-2 rounded hover:text-red-500 transition duration-300"
            >
              Blog <span className="text-red-500">&gt;</span>
            </Link>
            <h1 className="bg-transparent text-white px-4 py-2 rounded hover:text-red-500 transition duration-300">
              Single Blog &gt;
            </h1>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl font-bold mt-8 text-white whitespace-nowrap md:ml-32">
            Single Blog
          </h1>

          {/* Breadcrumbs */}
          <p className="mt-4 text-white text-center">
            Work <span className="text-red-500">&gt;</span>
          </p>

          {/* SVG at the Bottom for Styling the Four Edges */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              className="w-full"
              viewBox="0 0 1440 320" // Ensure the correct viewBox size for the SVG
              preserveAspectRatio="none"
            >
              <path
                fill="white" // Change this color if needed
                d="M0,200 L360,250 L1080,340 L720,360 L1440,200 L1440,320 L0,320 Z" // Four Edges Path
              />
            </svg>
          </div>
        </div>
      </div>

      {/* page content */}
      <section className="lg:mx-32 mb-28 mt-28">
        <div className=" lg:flex lg:flex-row flex-col">
          {/* div 1 */}
          <div className="lg:flex lg:w-2/3  lg:flex-col w-full  sm:flex-col">
            <div className="  lg:flex">
              <img
                src={Image}
                alt="Sample Image"
                className="lg:w-full h-[600px] w-[352px]"
              />
            </div>

            <div className="text-justify mt-6">
              <h3 className="text-4xl">
                It is a long established fact a reader be distracted
              </h3>
              <p className="pt-4 leading-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, eius mollitia suscipit, quisquam doloremque
                distinctio perferendis et doloribus unde architecto optio
                laboriosam porro adipisci sapiente officiis nemo accusamus ad
                praesentium? Esse minima nisi et. Dolore perferendis, enim
                praesentium omnis, iste doloremque quia officia optio deserunt
                molestiae voluptates soluta architecto tempora.
              </p>
            </div>

            <div className="text-justify mt-6">
              <h3 className="text-4xl">#2. Creative WordPress Themes</h3>

              <p className="pt-4 leading-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, eius mollitia suscipit, quisquam doloremque
                distinctio perferendis et doloribus unde architecto optio
                laboriosam porro adipisci sapiente officiis nemo accusamus ad
                praesentium? Esse minima nisi et. Dolore perferendis, enim
                praesentium omnis, iste doloremque quia officia optio deserunt
                molestiae voluptates soluta architecto tempora.
              </p>
              <div className="pt-5">
                <img src={Image} alt="" className="w-full" />
              </div>
              <p className="pt-4 leading-7">
                Quisquam esse aliquam fuga distinctio, quidem delectus veritatis
                reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non
                tenetur tempore, nisi culpa voluptate maiores officiis quis vel
                ab consectetur suscipit veritatis nulla quos quia aspernatur
                perferendis, libero sint. Error, velit, porro. Deserunt minus,
                quibusdam iste enim veniam, modi rem maiores.
              </p>
            </div>

            <div className=" my-9 space-x-4">
              <Link to="">
                <span className="border rounded px-2 py-1 text-sm hover:border-gray-950">
                  HOUSE
                </span>
              </Link>
              <Link to="">
                <span className="border rounded px-2 py-1 text-sm hover:border-gray-950">
                  HOME
                </span>
              </Link>
              <Link to="">
                <span className="border rounded px-2 py-1 text-sm hover:border-gray-950">
                  BUILDING
                </span>
              </Link>
              <Link to="">
                <span className="border rounded px-2 py-1 text-sm hover:border-gray-950">
                  TRAVEL
                </span>
              </Link>
            </div>

            <div className="mt-8 text-justify rounded flex flex-col sm:flex-row gap-x-5 bg-slate-100 px-3 sm:px-5">
  <img
    src={blg}
    alt=""
    className="w-24 h-24 sm:w-32 sm:h-32 mt-4 sm:mt-8 ml-2 sm:ml-4"
  />
  <div className="flex flex-col">
    <div className="text-lg sm:text-2xl mt-4 sm:mt-8">George Washington</div>
    <p className="leading-6 sm:leading-7 text-sm sm:text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque,
      autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat
      nam vero culpa sapiente consectetur similique, inventore eos fugit
      cupiditate numquam! Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia
      delectus aut, sunt placeat nam vero culpa sapiente consectetur similique,
      inventore eos fugit cupiditate numquam!
    </p>
    <div className="flex space-x-4 pt-2 sm:pt-3 text-xs sm:text-sm"></div>
  </div>
</div>


          {/* Comments Section */}
<div className="mt-6">
  <h3 className="text-3xl sm:text-4xl mt-10">6. Comments</h3>
</div>

{/* First Comment */}
<div className="flex flex-col sm:flex-row mt-8 gap-x-5">
  <img
    src={blg}
    alt="John Doe"
    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mt-1.5"
  />
  <div className="flex flex-col">
    <div className="text-lg sm:text-xl">John Doe</div>
    <div className="flex space-x-2 sm:space-x-4 text-[red] mt-2 text-xs sm:text-sm">
      <p>Jul 22, 2020</p>
      <p>Admin</p>
      <p>19</p>
    </div>
    <p className="mt-2 text-sm sm:text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
    <button className="bg-slate-300 text-xs sm:text-sm hover:bg-black hover:text-white tracking-widest mt-3 py-1 px-2 rounded">
      Reply
    </button>

    {/* Nested Reply 1 */}
    <div className="flex flex-col sm:flex-row mt-4 sm:ml-24 gap-x-5">
      <img
        src={blg}
        alt="Jane Doe"
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mt-1.5"
      />
      <div className="flex flex-col">
        <div className="text-lg sm:text-xl">Jane Doe</div>
        <div className="flex space-x-2 sm:space-x-4 text-[red] mt-2 text-xs sm:text-sm">
          <p>Jul 22, 2020</p>
          <p>Admin</p>
          <p>10</p>
        </div>
        <p className="mt-2 text-sm sm:text-base">Reply to John Doe's comment</p>
        <button className="bg-slate-300 text-xs sm:text-sm hover:bg-black hover:text-white tracking-widest mt-3 py-1 px-2 rounded">
          Reply
        </button>
      </div>
    </div>
  </div>
</div>

{/* Second Comment */}
<div className="flex flex-col sm:flex-row mt-4 gap-x-5">
  <img
    src={blg}
    alt="Alice Smith"
    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mt-1.5"
  />
  <div className="flex flex-col">
    <div className="text-lg sm:text-xl">Alice Smith</div>
    <div className="flex space-x-2 sm:space-x-4 text-[red] mt-2 text-xs sm:text-sm">
      <p>Jul 23, 2020</p>
      <p>User</p>
      <p>15</p>
    </div>
    <p className="mt-2 text-sm sm:text-base">This is a very helpful post!</p>
    <button className="inline-block bg-slate-300 text-xs sm:text-sm hover:bg-black hover:text-white tracking-widest mt-3 py-1 px-2 rounded">
  Reply
</button>


    {/* Nested Reply 2 */}
    <div className="flex flex-col sm:flex-row mt-4 sm:ml-24 gap-x-5">
      <img
        src={blg}
        alt="Bob Johnson"
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mt-1.5"
      />
      <div className="flex flex-col">
        <div className="text-lg sm:text-xl">Bob Johnson</div>
        <div className="flex space-x-2 sm:space-x-4 text-[red] mt-2 text-xs sm:text-sm">
          <p>Jul 24, 2020</p>
          <p>User</p>
          <p>8</p>
        </div>
        <p className="mt-2 text-sm sm:text-base">I agree with Alice's comment.</p>
        <button className="inline-block bg-slate-300 text-xs sm:text-sm hover:bg-black hover:text-white tracking-widest mt-3 py-1 px-2 rounded">
  Reply
</button>


      </div>
    </div>
  </div>
</div>

{/* Remaining Comments */}
{[ 
  { name: "David Brown", date: "Jul 25, 2020", role: "User", comment: "Interesting perspective!", replies: 12 },
  { name: "Mark Evans", date: "Jul 26, 2020", role: "User", comment: "Great article!", replies: 20 },
  { name: "Sarah Connor", date: "Jul 27, 2020", role: "User", comment: "I found this very useful.", replies: 13 },
  { name: "Michael Scott", date: "Jul 28, 2020", role: "User", comment: "Thanks for sharing this!", replies: 22 }
].map((item, index) => (
  <div key={index} className="flex mt-4 gap-x-5">
    <img src={blg} alt={item.name} className="w-20 h-20 rounded-full mt-1.5" />
    <div className="flex flex-col">
      <div className="text-xl">{item.name}</div>
      <div className="flex space-x-4 text-[red] mt-2 text-sm">
        <p>{item.date}</p>
        <p>{item.role}</p>
        <p>{item.replies}</p>
      </div>
      <p className="mt-2">{item.comment}</p>
      <button className="inline-block bg-slate-300 text-xs sm:text-sm hover:bg-black hover:text-white tracking-widest mt-3 py-1 px-2 rounded">
  Reply
</button>

    </div>
  </div>
))}

            {/* Leave a comment Section */}
            <div className="mt-10">
              <h3 className="text-4xl w-2/3 text-center py-5">
                Leave a comment
              </h3>
              <div className="bg-gray-100 p-10 shadow-md rounded-lg max-w-3xl mx-auto">
                <input
                  type="text"
                  placeholder="Name"
                  className="border p-4 mt-4 rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="border p-4 mt-4 rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="Website"
                  className="border p-4 mt-4 rounded-md w-full"
                />
                <textarea
                  placeholder="Message"
                  className="border p-4 mt-4 rounded-md w-full h-40"
                ></textarea>
                <button className="bg-red-500 text-white px-6 py-3 mt-4 rounded-md hover:bg-red-600">
                  Post comment
                </button>
              </div>
            </div>
          </div>
{/* Second side */}
<div className="ml-6 w-full lg:w-1/3">
  <div className="lg:w-full flex flex-col">
    {/* Search Bar Section */}
    <div className="w-[285px] mt-5 lg:-mt-1 rounded bg-slate-400">
      <div className="flex py-3 pl-5">
        <div className="flex bg-white items-center border rounded-md px-3 lg:py-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-[200px] bg-white outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>

    {/* Categories */}
    <div className="container mt-8 lg:w-[270px]">
      <h1 className="text-lg pb-5">Categories</h1>
      <ul className="categories space-y-4 border-b border-gray-300">
        {categories.map((category) => (
          <li
            key={category.name}
            className="flex w-full justify-between items-center border-b border-gray-300"
          >
            <span className="category-name">{category.name}</span>
            <span className="category-count">({category.count})</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Recent Blog Section */}
    <div className="mt-8">
      <h1 className="text-xl pb-3">Recent Blog</h1>
      {[...Array(3)].map((_, index) => (
        <div className="flex mt-4 gap-x-5" key={index}>
          <img src={blg} alt="" className="w-24 h-20 mt-1.5" />
          <div className="flex flex-col">
            <div className="text-lg">
              Amplify your <br /> blockchain team
            </div>
            <div className="flex space-x-4 pt-3 text-sm">
              <p>Jul 22, 2020</p>
              <p>Admin</p>
              <p>19</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Tag Cloud */}
    <div className="mt-8 space-y-2">
      <h3 className="text-2xl">Tag cloud</h3>
      <div className="flex pt-2 space-x-2">
        {['WEB', 'Design', 'GRAPHIC', 'UI'].map((tag) => (
          <Link to="" key={tag}>
            <span className="border rounded px-2 py-1 text-base hover:border-gray-950">{tag}</span>
          </Link>
        ))}
      </div>

      <div className="flex pt-2 space-x-2">
        {['UX', 'APPS', 'PROGRAMMING'].map((tag) => (
          <Link to="" key={tag}>
            <span className="border rounded px-2 py-1 text-base hover:border-gray-950">{tag}</span>
          </Link>
        ))}
      </div>

      <div className="pt-2">
        <Link to="">
          <span className="border rounded px-2 py-1 text-base hover:border-gray-950">DEVELOPMENT</span>
        </Link>
      </div>
    </div>

    {/* Paragraph Section */}
    <div className="mt-5 w-full mx-auto p-4">
      <h3 className="text-2xl sm:text-xl py-2 sm:py-1">Paragraph</h3>
      <p className="w-full sm:w-[448px] text-justify text-sm sm:text-base">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam vel modi odit accusantium, at tempora. Adipisci, labore autem veniam obcaecati libero accusamus eius laboriosam inventore a doloribus beatae similique rerum.
      </p>
    </div>
  </div>
</div>

        </div>
      </section>
    </>
  );
}

export default BlogDetail;
