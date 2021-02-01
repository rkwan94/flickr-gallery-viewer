import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';
import styled from 'styled-components';

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`;

const TileContainer = styled.div`
  overflow-y: scroll;

  img:hover::after {
    content: "Hover Text"; 
    position: absolute; 
    top: calc(50% - 12px); 
    left: calc(50% - 40px); 
    color: #ffffff; 
    opacity: 0; 
    z-index: 10;
  }

  a {
    color: rgb(33, 150, 243);
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

const Tile = (props) => {
  return (
    <TileContainer>
      <img
        src={props.thumbnailAnchor}
        width="100%"
        height="auto"
        alt={props.title}
      />

      <p>
        By {props.author} at {props.dateTaken}
      </p>

      <a 
        href={props.fullSizeImageAnchor}
        target="_blank"
      >
        Open image in new tab
      </a>

      <TagContainer
      >
        { props.tags.map(t => 
          <Tag 
            key={t}
          >
              {t}
          </Tag>)}
      </TagContainer>
    </TileContainer>
  );
};

Tile.propTypes = {
  thumbnailAnchor: PropTypes.string,
  fullSizeImageAnchor: PropTypes.string,
  author: PropTypes.string,
  dateTaken: PropTypes.string,
  tags: PropTypes.array,
  title: PropTypes.string,
};

export default Tile;