import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExpandedCardId } from "../store/slices/expandedCardIdSlice";

const Card = ({ item, handleCopyClick }) => {
  const dispatch = useDispatch();

  const readMoreCardId = useSelector((state) => {
    return state.expandedCardId;
  });

  return (
    <React.Fragment>
      <h1 id="title">{item.data.title}</h1>

      <br />

      <section id="details">
        <span id="label">Self Text HTML : </span>

        <button onClick={() => handleCopyClick(item.data.id)}>Copy</button>
        <br />

        <p>
          {/**I know about ellipses in css. 
                  But It's not working in my case. 
                  So I did this */}

          {item.data.selftext_html && (
            <React.Fragment>
              {readMoreCardId === item.data.id
                ? item.data.selftext_html
                : item.data.selftext_html.slice(0, 350)}

              {/**When expanded Read more will not appear */}

              {readMoreCardId !== item.data.id && (
                <span
                  id="readMore"
                  onClick={() => dispatch(setExpandedCardId(item.data.id))}
                >
                  Read more...
                </span>
              )}
              {readMoreCardId == item.data.id && (
                <span
                  id="readMore"
                  onClick={() => dispatch(setExpandedCardId(null))}
                >
                  ...Close
                </span>
              )}
            </React.Fragment>
          )}
        </p>

        <div className="notify">Double click</div>
      </section>

      <section id="url">
        <span id="labelForUrl">URL : </span>
        <a href={item.data.url} target="blank">
          {item.data.url}
        </a>
      </section>

      <section id="score">
        <span id="labelForScore">Score : </span>
        {item.data.score}
      </section>
    </React.Fragment>
  );
};

export default Card;
