import React from "react";
import Carousel from "react-elastic-carousel";
import MultiCard from "../MultiCard";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function MultiCarousel() {
  const maxIpad = useMediaQuery("(max-width:1160px)");
  const minIpad = useMediaQuery("(min-width:767px)");
  const maxMobile = useMediaQuery("(max-width:766px)");
  const minMobile = useMediaQuery("(min-width:320px)");
  const desktop = useMediaQuery("(max-width:1200px)");

  return (
    <Carousel
      itemsToShow={
        minIpad && maxIpad ? 3 : minMobile && maxMobile ? 1 : desktop ? 4 : 4
      }
      itemPadding={[1, 1]}
      itemsToScroll={
        minIpad && maxIpad ? 3 : minMobile && maxMobile ? 1 : desktop ? 4 : 4
      }
      renderPagination={({ pages, activePage, onClick }) => {
        return (
          <div className='row'>
            {pages.map((page) => {
              const isActivePage = activePage === page;
              return (
                <div
                  className={isActivePage ? "circle isActiveSlide" : "circle"}
                  key={page}
                  onClick={() => onClick(page)}
                />
              );
            })}
          </div>
        );
      }}>
      <div>
        <MultiCard id='244' />
      </div>
      <div>
        <MultiCard id='211' />
      </div>
      <div>
        <MultiCard id='212' />
      </div>
      <div>
        <MultiCard id='247' />
      </div>
      <div>
        <MultiCard id='248' />
      </div>
      <div>
        <MultiCard id='200' />
      </div>
      <div>
        <MultiCard id='210' />
      </div>
      <div>
        <MultiCard id='214' />
      </div>
      <div>
        <MultiCard id='219' />
      </div>
      <div>
        <MultiCard id='218' />
      </div>
      <div>
        <MultiCard id='217' />
      </div>
      <div>
        <MultiCard id='215' />
      </div>
      <div>
        <MultiCard id='220' />
      </div>
    </Carousel>
  );
}

export default MultiCarousel;
