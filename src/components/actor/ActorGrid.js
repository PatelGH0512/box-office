import React from 'react';
import ActorCard from './ActorCard';

import IMAGE_NOTFOUND from '../../images/notfoundimage.png';
import { FlexGrid } from '../styled';

const ActorGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          image={person.image ? person.image.medium : IMAGE_NOTFOUND}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
