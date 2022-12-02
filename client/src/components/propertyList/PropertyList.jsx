import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading } = useFetch("/hotels/countByType");

  const images = [
    "https://images1.apartments.com/i2/o2Yl7hqCwOjhMh9AFAzLfhaTexUXtxyVYFbGsIiV8s0/117/sixteen-g-portland-or-primary-photo.jpg?p=1",
    "https://images1.apartments.com/i2/O2AF4pw3cgjpiXFIQhck7CMzHV6FGzK1LE0xF8SH0Fw/117/ella-portland-or-building-photo.jpg",
    "https://photos.zillowstatic.com/fp/029dedb9071b64e4fb1dae3c5e150d82-p_e.jpg",
    "https://images1.apartments.com/i2/2dxXGeJsjA700rAs9KP0shVIz-AwdxCLLDlh_BqtnCQ/117/sanctuary-apartments-portland-or-interior-photo.jpg",
    "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/6/26/1/DOTY2019_Andrew-Suvalsky-Designs_Sutton_4.jpg.rend.hgtvcom.966.644.suffix/1561557149588.jpeg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
