import './Pictures.css';

const Pictures = ({res, currentIndex, btnNext}) => {

  return (
    <div className="pictures">
      <div>
        <div>
          <div className="imgContainer" onClick={() => {btnNext()}}>
          {res.length > 0 && (
              <img
                key={res[currentIndex].id}
                src={res[currentIndex].urls.regular}
                alt={res[currentIndex].alt_description}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pictures;
