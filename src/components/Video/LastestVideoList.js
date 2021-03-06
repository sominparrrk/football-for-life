import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getLatestVideo from '../../lib/api/video';
import LatestVideoItem from './LatestVideoItem';

const Container = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  column-gap: 2rem;

  @media ${(props) => props.theme.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.mobileLg} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const LastestVideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getLatestVideo().then((videos) => setVideos(videos));
  }, []);
  console.log('[LatestVideo Component]: ', videos);

  return (
    <Container>
      {videos.map((video) => (
        <LatestVideoItem key={video.matchviewUrl} video={video} />
      ))}
    </Container>
  );
};

export default LastestVideoList;
