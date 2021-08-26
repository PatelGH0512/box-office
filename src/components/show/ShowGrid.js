import React from 'react';
import ShowCard from './ShowCard';
import IMAGE_NOTFOUND from '../../images/notfoundimage.png';
import { FlexGrid } from '../styled';

const ShowGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NOTFOUND}
          summary={show.summary}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
