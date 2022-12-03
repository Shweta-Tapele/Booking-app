import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Portland,Seattle,NewYork");
  

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="http://www.gonext.com/wp-content/uploads/2019/10/Portland-Oregon_iS_994318522_web.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Portland</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2017/11/seattle-waterfront-1.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Seattle</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://www.tourmag.com/photo/art/default/67984859-47943899.jpg?v=1665757302"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>New York</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
