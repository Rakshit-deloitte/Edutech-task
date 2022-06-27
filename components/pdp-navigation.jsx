import Link from "next/link";

function Navigation(props) {
   const {course}=props
  return (
    <>
      <div className="container my-3 d-flex">
        <Link href={`/`}>
          <p className="mb-0 cursor">All courses</p>
        </Link>
        <img src={"/Images/leftArrow.svg"} className="mx-3" />
        <p className="mb-0 font-weight-bold">{course?.title}</p>
      </div>
    </>
  );
}

export default Navigation;
