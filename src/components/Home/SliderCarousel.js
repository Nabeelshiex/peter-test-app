import React from "react";
import Carousel from "react-elastic-carousel";
import "./home.css";
import SliderCard from "../SliderCard";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function SliderCarousel() {
  const desktop = useMediaQuery("(max-width:1980px)");
  const minDesktop = useMediaQuery("(min-width:1025px)");

  return (
    <Carousel
      itemsToShow={desktop && minDesktop ? 2 : 1}
      itemPadding={[0, 0]}
      itemsToScroll={desktop && minDesktop ? 2 : 1}
      itemPadding={[0, 0]}
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
        <SliderCard
          image={"https://picsum.photos/id/249/600/300"}
          imageText='Sticky Cauliflower'
        />
      </div>
      <div>
        <SliderCard
          image={"https://picsum.photos/id/250/600/300"}
          imageText='Italienska köttbullar i tomatsås'
        />
      </div>
      <div>
        <SliderCard
          image={"https://picsum.photos/id/247/600/300"}
          imageText='Italienska köttbullar i tomatsås'
        />
      </div>
      <div>
        <SliderCard
          image={"https://picsum.photos/id/248/600/300"}
          imageText='Italienska köttbullar i tomatsås'
        />
      </div>
      <div>
        <SliderCard
          image={"https://picsum.photos/id/251/600/300"}
          imageText='Italienska köttbullar i tomatsås'
        />
      </div>
      <div>
        <SliderCard
          image={"https://picsum.photos/id/252/600/300"}
          imageText='Italienska köttbullar i tomatsås'
        />
      </div>
      <div>
        <SliderCard
          image={"https://picsum.photos/id/253/600/300"}
          imageText='Italienska köttbullar i tomatsås'
        />
      </div>
      <div>
        <SliderCard
          image={"https://picsum.photos/id/254/600/300"}
          imageText='Italienska köttbullar i tomatsås'
        />
      </div>
    </Carousel>
  );
}

export default SliderCarousel;
